import type { AppProps } from 'next/app'
/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header';
import Main from '../components/Main';
import theme from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
};

export default MyApp;
