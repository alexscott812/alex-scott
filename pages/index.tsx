import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'theme-ui';
import HeroCard from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container py={4} sx={{ display: 'flex', minHeight: '100vh' }}>
        <HeroCard />
      </Container>
    </>
  );
};

export default Home
