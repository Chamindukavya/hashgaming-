"use client";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import Layout from "./components/scroll";
import {Button} from "@nextui-org/react";

export default function Home() {
  const fullWelcomeText = "WELCOME TO CHAN'S WARDROBE!";
  const fullIntroText = "EAT-DRESS-SLEEP-REPEAT";
  const [textWelcome, setTextWelcome] = useState("");
  const [textIntro, setTextIntro] = useState("");


  const travel = () => {
    window.location.href = "/test";
  }

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    function delay(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function welcomeTextLoop(text: string) {
      for (let i = 0; i < text.length; i++) {
        const timer = setTimeout(() => {
          if (text === fullWelcomeText) {
            setTextWelcome((prevTextWelcome) => prevTextWelcome + text[i]);
          } else {
            setTextIntro((prevTextIntro) => prevTextIntro + text[i]);
          }
        }, i * 100); // Delay each character by 100ms
        timers.push(timer);
      }
    }

    async function start() {
      await welcomeTextLoop(fullWelcomeText);
      await delay(3000);
      await welcomeTextLoop(fullIntroText);
    }

    start();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [fullWelcomeText, fullIntroText]);

  return (
    <div>
    <div className="relative">
        <Layout>
      <div data-aos="zoom-in" className="relative flex justify-between mr-10">
        <div>
          <Image
            isBlurred
            alt="NextUI Album Cover"
            className="mt-5 mr-0 ml-10"
            src="https://assets.promptbase.com/DALLE_IMAGES%2FiqOVRG1Hm4f0sRzXe39qMA8oI5o1%2Fresized%2F1700556226901g_1000x1000.webp?alt=media&token=0689c5eb-06ab-454d-aa1e-1bef0552e0d5"
            width={700}
            height={600}
          />
          
        </div>
        <div>
          <Image
            isBlurred
            alt="NextUI Album Cover"
            className="mt-5 ml-0"
            src="https://fashinza.com/textile/wp-content/uploads/2023/01/Barbara-Palvin--1024x683.jpg"
            width={700}
            height={600}
          />
          
        </div>
        </div>  
        <div className="z-10 absolute inset-0 mt-60">
          <div className="flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-800 text-center bg-blue-100 bg-opacity-50 bg- p-4 rounded-2xl">
                {textWelcome}
              </div>
            </div>
          <div className="flex items-center justify-center">
              <div className="text-3xl font-bold text-blue-700 text-center bg-blue-300 bg-opacity-50 p-4 rounded-2xl mt-2">
                {textIntro}
              </div>
          </div>



        </div>
        <br />  
        <br />  
       <div className="ml-9 mr-10 mb-10 mt-5 border-5 border-black rounded-xl shadow-xl shadow-blue-900">
        <div data-aos="fade-up" className=" mt-6 text-3xl text-center text-black font-bold">
      Your ultimate destination for modern, stylish, and affordable fashion!
      </div>  
      <div data-aos="fade-up" className="mb-6 text-3xl text-center text-black font-bold">
      Discover a curated collection of clothing that celebrates individuality and timeless trends.
       </div>
      

      </div>  
      <div  className="flex justify-between mr-10 mt-20 ">
      <div data-aos="fade-up" className="ml-10 shadow-xl shadow-blue-900  border-5 border-blue-500 rounded-xl " >
          <Image
            isBlurred isZoomed
            alt="NextUI Album Cover"
            className="mt-5 ml-0"
            src="https://thumbs.dreamstime.com/b/beautiful-girl-bow-her-head-fashion-stylish-blond-hair-woman-vector-illustration-219637457.jpg"
            width={300}
            height={400}
          />
          
        </div>
        <div data-aos="fade-up" className="ml-10 shadow-xl shadow-blue-900  border-5 border-blue-500 rounded-xl">
          <Image
            isBlurred isZoomed
            alt="NextUI Album Cover"
            className="mt-5 ml-0"
            src="https://thumbs.dreamstime.com/b/beautiful-girl-bow-her-head-fashion-stylish-blond-hair-woman-vector-illustration-219637457.jpg"
            width={300}
            height={400}
          />
          
        </div>
        <div data-aos="fade-up" className="ml-10 shadow-xl shadow-blue-900  border-5 border-blue-500 rounded-xl">
          <Image
            isBlurred isZoomed
            alt="NextUI Album Cover"
            className="mt-5 ml-0"
            src="https://thumbs.dreamstime.com/b/beautiful-girl-bow-her-head-fashion-stylish-blond-hair-woman-vector-illustration-219637457.jpg"
            width={300}
            height={400}
          />
          
        </div>
        <div data-aos="fade-up" className="ml-10 shadow-xl shadow-blue-900  border-5 border-blue-500 rounded-xl">
          <Image
            isBlurred isZoomed
            alt="NextUI Album Cover"
            className="mt-5 ml-0"
            src="https://thumbs.dreamstime.com/b/beautiful-girl-bow-her-head-fashion-stylish-blond-hair-woman-vector-illustration-219637457.jpg"
            width={300}
            height={400}
          />
          
        </div>


      </div >
      <div>
      <br />
       
      
    </div>
    </Layout>

    </div>
    <br />
    <br />
    <div className="flex justify-center">
   
    <button 
        onClick={travel}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-black  rounded-lg">
        Explore More Items
      </button>
  </div>                              


       
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />  
    </div>
   
  );
}
