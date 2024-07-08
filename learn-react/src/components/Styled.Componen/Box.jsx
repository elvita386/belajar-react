import styled from "styled-components";
import { Navbar ,List } from "./Box.styled";
export function Box(){
    return(
        <Navbar>
            
                <List  $bg={"first"} href="#">Home</List>
                <List $bg={"second"} href="#">About</List>
                <List  $bg={"third"}href="#">Contact</List>
            
        </Navbar>
    );
}