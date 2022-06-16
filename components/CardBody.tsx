import { ReactNode } from "react";
import { Box } from 'theme-ui';

type CardBodyProps = {
  children?: ReactNode
}

const CardBody = ({ children }: CardBodyProps) => {
  return (
    <Box p={3}>{children}</Box>
  );
}

export default CardBody;