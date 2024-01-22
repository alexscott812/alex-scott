import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button';
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
        <div className="rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
          <h3 className="pb-2 text-xl font-semibold">Get in touch</h3>
          <p className="pb-4">Want to get in touch? Send me an email!</p>
          <Button color="primary" href="mailto:alexscott812@gmail.com">
            Contact
          </Button>
        </div>
        
      </PageContainer>
   </>
  );
};

export default Contact;
