import { useEffect } from "react";

export default function UseComponent(){
    const getData = async () =>{
      try{
        const data = await fecth ("https://jsonplaceholder.typicode.com/");
        console.log(data);
      } catch (error){
        console.log(error);
      }
    }
   useEffect(() => {
   },[])
}