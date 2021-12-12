import styled from "styled-components";

// Define name of styled component and say what it is
// say styled.(what you want the tag to be)
export const Column1 = styled.div`
height: 100%;
width: calc(100% / 3);
background-color: hsl(31, 77%, 52%);
transition: 0.2s all;
  
button {
  color: hsl(31, 77%, 52%);
}


  &:hover {
    background-color: lightblue ;
  }

`