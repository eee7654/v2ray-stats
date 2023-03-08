import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import { useEffect } from "react";
import("../styles/stats.css");
import NextNProgress from "nextjs-progressbar";
//import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <>
      <NextNProgress color="#18B2DE" options={{showSpinner:false}}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
