import { ReactNode } from 'react';
import { Heading } from 'theme-ui';

const PageHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading mb={4} sx={{ fontSize: 4 }}>
      {children}
    </Heading>
  );
};

export default PageHeading;