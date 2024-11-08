import "@/styles/globals.css";
import theme from "@/src/theme/theme";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import cache from "@/src/theme/emotionCache";
import Navbar from "@/src/components/Navbar/Navbar";
import { CacheProvider, ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
