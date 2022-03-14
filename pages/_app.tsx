import "../styles/globals.css";
import "../styles/prism-lucario.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navbar/navbar";
import Meta from "../components/meta/meta";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
