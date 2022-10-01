import type { AppProps } from "next/app";
import { CalendarProvider } from "../providers/calendarProvider";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CalendarProvider>
        <Component {...pageProps} />{" "}
      </CalendarProvider>
    </>
  );
}

export default MyApp;
