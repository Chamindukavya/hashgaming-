// components/Layout.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  return <div>{children}</div>;
};

export default Layout;
