import { ReactNode } from "react"
import { Container } from 'theme-ui'

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container as="main" p={0} pt={5}>
      {children}
    </Container>
  );
};

export default MainContainer;