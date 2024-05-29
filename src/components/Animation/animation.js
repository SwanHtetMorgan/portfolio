import { useEffect, useState } from "react"
import jsonData from "./Data.json"
import { json } from "react-router-dom";

export default function Animation(){
   const [words, setWords] = useState([]);
   const [displayWords,setDisplayWords] = useState([]);

   useEffect(
      setWords(jsonData.introduction.split(''))
      ,[]
   )
   useEffect(() => {
      if (words.length > 0) {
         const Interval = setInterval(() => {
            setDisplayWords(prev =>{
               if(prev.length < words.length){
                  return [...prev, words[prev.length]]
               }else{
                  clearInterval(Interval);
                  return prev; 
               }
            })
         }, 500);
         return () => clearInterval(Interval);
      }
    }, [words]);

   return (
      <> 
      {{displayWords}}
      </>
   )
}