import   React, { useState,useEffect } from "react";
const Info  = ()=> {
    const phrases = ['I am good at Data Structures', 'I have projects in MERN Stack', 'I know Machine Learning'];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
   const [anime, setanime] = useState("typewriter-text")
   
    useEffect(() => {
      const interval = setInterval(() => {

        setCurrentPhraseIndex((prevIndex) =>
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          
        );
       
      },8000); 
  
      return () => clearInterval(interval);
    }, [phrases]);
  
    return (
      <>
      <h1 className="text-white w-full m-2 ">My name is Anurag</h1>
        <div className="flex" >
          
           
          <span className="text-white text-4xl text-center">{"{"}</span> <h1 key = {currentPhraseIndex} className={`typewriter-text text-cyan-400 text-4xl m-auto text-center  `}>
         {` ${phrases[currentPhraseIndex]} `}
      
       
      </h1> <span className="text-white text-4xl text-center">{"}"}</span>
        </div>
        </>
   
    );
  };
  export default Info;
