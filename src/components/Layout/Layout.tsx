import { ReactNode, useLayoutEffect,  } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex justify-center my-5 container">
        <div className="">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
