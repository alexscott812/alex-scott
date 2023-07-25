import { ReactNode } from 'react';

const PageHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="pb-4 text-3xl font-bold">
      {children}
    </h1>
  );
};

export default PageHeading;