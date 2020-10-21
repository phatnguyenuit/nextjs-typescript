import { useEffect, ComponentType } from 'react';

import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { AppContext } from 'next/app';

import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { compose } from 'recompose';

import configureStore from 'states/configureStore';
import { RootState } from 'states/rootReducer';
import MainLayout from 'layouts/Main';
import theme from 'theme';

function App({ Component, pageProps, store }: ReduxWrapperAppProps<RootState>) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <>
            <h1>Hello NextJS</h1>
            <h2>Component Name: {Component.displayName || Component.name}</h2>
            <Component {...pageProps} />
          </>
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default compose(
  withRedux(configureStore),
  withReduxSaga,
)(App as ComponentType<any>);

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
