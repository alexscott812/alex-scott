import type { AppProps } from 'next/app'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 lowercase">
      <Header />
      <MainContainer>
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </div>
  );
};

export default MyApp;
