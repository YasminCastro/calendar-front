import type { AppProps } from "next/app";
import { CalendarProvider } from "../providers/calendarProvider";
import GlobalStyles from "../styles/GlobalStyles";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <CalendarProvider>
        <Component {...pageProps} />{" "}
      </CalendarProvider>
      </LocalizationProvider>
    </>
  );
}

export default MyApp;
