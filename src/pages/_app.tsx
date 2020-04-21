import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';

import { AppContext } from 'next/app';
import { Provider } from 'react-redux';
import makeStore from 'states/makeStore';
import { RootState } from 'states/reducer';
import MainLayout from 'layouts/Main';

function App({ Component, pageProps, store }: ReduxWrapperAppProps<RootState>) {
  return (
    <Provider store={store}>
      <MainLayout>
        <>
          <h1>Hello NextJS</h1>
          <h2>Component Name: {Component.displayName || Component.name}</h2>
          <Component {...pageProps} />
        </>
      </MainLayout>
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
