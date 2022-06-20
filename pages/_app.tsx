/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import theme from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  );
};

export default MyApp;
