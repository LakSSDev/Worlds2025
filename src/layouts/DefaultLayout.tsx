

import type { ReactNode } from "react";


interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
 
      <main className="flex-1">{children}</main>
 
    </div>
  );
};

export default DefaultLayout;
