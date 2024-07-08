import styled from "styled-components";
 
export const Navbar =styled.nav`
background-color: pink;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 10px;
padding: 0 20px;
`;
export const List = styled.a`
padding: 10px 15px ;
color: white;
text-decoration: none;
&:hover {
    color: white;
    background-color: ${(props)=>props.$bg ==="first"?"red" :props.$bg ==="second"?"green":"blue"};
}
`;