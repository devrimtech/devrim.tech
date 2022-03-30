import "../styles/globals.css";
import "../styles/prism-lucario.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navbar/navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
