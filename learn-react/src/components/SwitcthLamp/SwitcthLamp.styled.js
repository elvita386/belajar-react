import styled from "styled-components";


 export const Lamp = styled.div`
 height: 100px;
 width:100px;
 border-radius: 100%;
 background-color:${(props)=>
    props.$background === true? "yellow":"gray"};
margin-bottom:40px;
`;
export const  SwitchButton = styled.button`
background-color:${(props)=>
    props.$background === true? "green":"red"};
    color: white;
    `