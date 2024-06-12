import { ReactNode, useLayoutEffect,  } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';
import Slider from "~/pages/MainPage/components/Slider/Slider";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex justify-center my-5 container">
        <div className="w-[80%] desktop-sm:w-[80%] desktop-lg:w-1/2 desktop-lg:p-0 laptop:w-11/12">
        <Slider />  
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
