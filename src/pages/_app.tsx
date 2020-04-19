import withRedux, { MakeStore, ReduxWrapperAppProps } from 'next-redux-wrapper';

import { AppContext } from 'next/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PayloadAction } from 'states/types';
import makeStore from 'states/makeStore';
import { RootState } from 'states/reducer';

function App({ Component, pageProps, store }: ReduxWrapperAppProps<RootState>) {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello NextJS</h1>
        <h2>Component Name: {Component.displayName || Component.name}</h2>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default withRedux(makeStore)(App);

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};