import type { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '../components/PageContainer';
import PageHeading from '../components/PageHeading';
import PageIcon from '../components/PageIcon';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageIcon>📬</PageIcon>
        <PageHeading>Contact</PageHeading>
        <div className="rounded-xl bg-stone-100 p-4">
          <h3 className="pb-2 text-xl font-semibold">Get in touch</h3>
          <p className="pb-4">Want to get in touch? Send me an email!</p>
          <button className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white transition hover:bg-violet-700">Contact</button>
        </div>
        
      </PageContainer>
   </>
  );
};

export default Contact;
