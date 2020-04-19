import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>Hello NextJS</h1>
      <h2>Component Name: {Component.displayName || Component.name}</h2>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
