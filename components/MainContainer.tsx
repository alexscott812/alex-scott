import { ReactNode } from "react"

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-14">
      {children}
    </div>
  );
};

export default MainContainer;