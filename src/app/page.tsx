"use client";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

export default function Home() {
  const fullText = "WELCOME TO HASH GAMING!";
  const [text, setText] = useState("");

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    const welcomeTextLoop = () => {
      for (let i = 0; i < fullText.length; i++) {
        const timer = setTimeout(() => {
          setText((prevText) => prevText + fullText[i]);
        }, i * 100); // Delay each character by 100ms
        timers.push(timer);
      }
    };

    let i = 0;
    let x;
    const startTimer = setTimeout(() => {
      if (i===0) {
        let x = 10;
      }else{
        let x = 3000;
      }  
      welcomeTextLoop();
    }, x);
    timers.push(startTimer);


    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [fullText]); 

  return (
    <div className="text-2xl font-bold text-center mt-10">
      {text}
    </div>
  );
}
