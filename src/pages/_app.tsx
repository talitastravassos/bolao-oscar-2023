import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bolão Oscar 2023</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="a simple project starter to work wity Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
