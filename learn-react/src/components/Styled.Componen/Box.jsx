import styled from "styled-components";
import { Navbar ,List } from "./Box.styled";
export function Box(){
    return(
        <Navbar>
            
                <List href="#">Home</List>
                <List href="#">About</List>
                <List href="#">Contact</List>
            
        </Navbar>
    );
}