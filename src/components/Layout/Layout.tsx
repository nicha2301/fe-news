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
      <div className="flex justify-center mb-5 mt-14 container">
        <div className="">
         <Slider />  
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
