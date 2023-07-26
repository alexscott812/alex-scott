import type { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '../components/PageContainer';
import PageHeading from '../components/PageHeading';
import PageIcon from '../components/PageIcon';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageIcon>👤</PageIcon>
        <PageHeading>About</PageHeading>
        <ul className="space-y-2">
          <li>👤 I&apos;m Alex Scott</li>
          <li>📍 Currently living in Brooklyn, NY</li>
          <li>👨‍💻 Working at&nbsp;
            <a
              className="text-violet-600 hover:underline"
              href="https://www.outfront.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              OUTFRONT Media
            </a>
          </li>
          <li>📓 Studied Computer Science at Fordham University</li>
          <li>🎸 Music enthusiast</li>
          <li>🚴‍♂️ Avid cyclist</li>
        </ul>
      </PageContainer>
   </>
  );
};

export default About;