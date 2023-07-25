import { ReactNode } from 'react';

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 container mx-auto max-w-2xl py-14">
      {children}
    </div>
  );
};

export default PageContainer;