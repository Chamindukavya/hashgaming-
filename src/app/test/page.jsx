"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/scroll";

export default function Home() {

  return (
    
    <div>
      <Layout>
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 data-aos="fade-up" className="text-4xl font-bold">Welcome to AOS Animations</h1>
      </div>
      <div className="h-screen bg-blue-300 flex items-center justify-center">
        <h1 data-aos="fade-right" className="text-4xl font-bold">Scroll Down to See More</h1>
      </div>
      <div className="h-screen bg-green-300 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-4xl font-bold">Amazing Animations!</h1>
      </div>
      </Layout>

      <button 
onClick={() => alert("Hello World!")}
className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-black">
Click Me
</button>

    </div>

    


  );
}
