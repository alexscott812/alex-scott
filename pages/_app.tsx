import type { AppProps } from 'next/app'
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
        <Header />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </div>
  );
};

export default MyApp;
