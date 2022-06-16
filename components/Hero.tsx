/** @jsxImportSource theme-ui */
import { Box, Heading, Text } from 'theme-ui';
import { Keyframes, keyframes } from '@emotion/react';

const wave: Keyframes = keyframes`
  0% { transform: rotate(0.0deg); }
  10% { transform: rotate(14.0deg); }
  20% { transform: rotate(-8.0deg); }
  30% { transform: rotate(14.0deg); }
  40% { transform: rotate(-4.0deg); }
  50% { transform: rotate(10.0deg); }
  60% { transform: rotate(0.0deg); }
  100% { transform: rotate(0.0deg); }
`;

const HeroCard = () => {
  return (
    <Box mb={6}>
      {/* <Card
        variant="sunken"
        p={[3,4,5]}
        // sx={{
        //   backgroundImage: t => `linear-gradient(to bottom right, ${t.colors?.primary}, ${t.colors?.secondary})`
        // }}
      > */}
        <Heading sx={{ fontSize: [5,6], mb: 2 }}>
          Hi, I'm&nbsp;
          <span sx={{ color: 'primary' }}>
            Alex
          </span>
          .&nbsp;
          <span sx={{ display: 'inline-block', animation: `${wave} 3s linear infinite` }}>
            👋
          </span>
        </Heading>
        <Text as="p">
          I'm a front end developer currently based in Brooklyn, NY. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      {/* </Card> */}
    </Box>
  );
};

export default HeroCard;