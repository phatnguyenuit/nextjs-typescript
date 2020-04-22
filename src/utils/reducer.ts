import { PayloadAction } from 'types/state';
import { Action, AnyAction } from 'redux';

export const createReducer = <TState = any, TAction extends Action = AnyAction>(
  initialState: TState,
  actionsMap: CaseReducers<TState, any>,
) => (prevState = initialState, action: TAction) => {
  const caseReducer = actionsMap[action.type];
  return caseReducer ? caseReducer(prevState, action) : prevState;
};

export const createBasedAPIReducer = <
  TData extends any = any,
  TState extends BasedAPIState<TData> = BasedAPIState<TData>
>(
  actions: BasedAPIActions,
  initialState: TState,
) =>
  createReducer(initialState, {
    [actions.request]: (prevState: TState) => ({
      ...prevState,
      data: undefined,
      loading: true,
      error: undefined,
    }),
    [actions.success]: (prevState: TState, action: PayloadAction<TData>) => ({
      ...prevState,
      data: action.payload,
      loading: false,
      error: undefined,
    }),
    [actions.error]: (
      prevState: TState,
      { payload: { message } }: PayloadAction<Error>,
    ) => ({
      ...prevState,
      data: undefined,
      loading: false,
      error: message,
    }),
  });

export type Actions<T extends keyof any = string> = Record<T, Action>;
export type CaseReducer<TState = any, TAction extends Action = AnyAction> = (
  state: TState,
  action: TAction,
) => TState;

export type CaseReducers<TState, TActions extends Actions> = {
  [T in keyof TActions]: CaseReducer<TState, TActions[T]>;
};

export interface BasedAPIState<TData = any> {
  data?: TData;
  loading: boolean;
  error?: string;
}

export interface BasedAPIActions {
  request: string;
  success: string;
  error: string;
}
