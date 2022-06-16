import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Heading, Card, Text, Button } from 'theme-ui';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box mb={6}>
          {/* 📬📩 */}
          <Heading mb={4} sx={{ fontSize: 4 }}>📬 Contact</Heading>
          <Card variant="sunken" p={[3,4,5]}>
            <Heading mb={2}>Get in touch</Heading>
            <Text as="p" mb={3}>Want to get in touch? Send me an email!</Text>
            <Button>Contact</Button>
          </Card>
        </Box>
      </main>
   </>
  );
};

export default Contact;
