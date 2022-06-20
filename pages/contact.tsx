import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Card, Text, Button, Container } from 'theme-ui';
import PageHeading from '../components/PageHeading';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container py={4}>
        <PageHeading>📬 Contact</PageHeading>
        <Card variant="sunken" p={[3,4,5]}>
          <Heading mb={2}>Get in touch</Heading>
          <Text as="p" mb={3}>Want to get in touch? Send me an email!</Text>
          <Button>Contact</Button>
        </Card>
      </Container>
   </>
  );
};

export default Contact;
