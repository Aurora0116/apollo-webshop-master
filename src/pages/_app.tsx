import "../styles/styles.scss";
import type { AppProps } from "next/app";

function ApolloApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ApolloApp;
