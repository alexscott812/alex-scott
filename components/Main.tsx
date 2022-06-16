import { ReactNode } from "react"
import { Container } from 'theme-ui'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Container pt={6}>
      {children}
    </Container>
  );
};

export default Main;