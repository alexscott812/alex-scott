import { ReactNode } from 'react';

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <div className="container mx-auto max-w-2xl pt-14">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;