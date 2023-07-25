import { ReactNode } from 'react';

const PageIcon = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="pb-8 text-6xl">
      {children}
    </h1>
  );
};

export default PageIcon;