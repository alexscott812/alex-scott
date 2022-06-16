import type { NextPage } from 'next'
import Head from 'next/head'
import HeroCard from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroCard />
      </main>
    </>
  );
};

export default Home
