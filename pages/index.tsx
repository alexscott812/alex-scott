import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Button from '../components/Button';
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
        <PageHeading>
          Hi, I&apos;m&nbsp;
          <span className="underline underline-offset-4 decoration-violet-600 dark:decoration-violet-500 decoration-4">
            Alex Scott
          </span>
          .
        </PageHeading>
        <p className="pb-4 text-gray-600 dark:text-gray-400">
          I&apos;m a full stack developer currently based in Brooklyn, NY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* <Link href="/projects">
          <button className="rounded-lg bg-violet-600 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-400 px-4 py-2 font-semibold text-white text-white mr-2 focus:outline-none focus:ring-4 focus:ring-violet-300">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="rounded-lg bg-gray-100 dark:bg-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 px-4 py-2 font-semibold text-black">
            Contact
          </button>
        </Link> */}
        <Link href="/projects" passHref legacyBehavior>
          <Button color="primary" className="mr-2">View Projects</Button>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <Button color="secondary">Contact</Button>
        </Link>
      </PageContainer>
    </>
  );
};

export default Home
