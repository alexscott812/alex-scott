import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import PageContainer from '../components/PageContainer';
import PageHeading from '../components/PageHeading';
import PageIcon from '../components/PageIcon';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageIcon>
          <span className="inline-block animate-wave">👋</span>
        </PageIcon>
        <PageHeading>Hi, I'm Alex.</PageHeading>
        <p className="pb-4">
          {"I'm a full stack developer currently based in Brooklyn, NY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
        <Link href="/projects">
          <button className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:from-violet-700 hover:to-indigo-700 mr-2">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="rounded-lg bg-stone-100 px-4 py-2 font-semibold text-black transition hover:bg-stone-200">
            Contact
          </button>
        </Link>
      </PageContainer>
    </>
  );
};

export default Home
