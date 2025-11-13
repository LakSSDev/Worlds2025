

import type { ReactNode } from "react";
import { Header } from "../components/header";


interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">{children}</main>
 
    </div>
  );
};

export default DefaultLayout;
