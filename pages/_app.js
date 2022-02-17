import "../styles/globals.css";

// 광역적용
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
