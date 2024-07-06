import { useEffect, useState } from "react";
import { List, Wrapper } from "./ApiPokemon.styled";

export default function Pokemon (){
    const [Pokemon,setPokemon] = useState([]);
    
    const getPokemon =async () => {
        try{
            const get = await fetch("https://pokeapi.co/api/v2/pokemon/")
            const getData = await get.json();
            console.log();
            setPokemon(getData.results);
        }catch (error){
            console.log(error);
        } 
    }

    useEffect(() => {
        getPokemon();
    },[]);
    return(
        <div>
            
    <ul>
        <Wrapper>
        {Pokemon.map((items, indexPoke) => {
            console.log(Pokemon)
            return(
         <List key={indexPoke}>
         {items.name}
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${indexPoke +1}.png `} alt="" />
         </List>
            )
        }
    )}
    </Wrapper>

    </ul>
            
        </div> 
    )
};

