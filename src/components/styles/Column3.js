import styled from "styled-components";

// Define name of styled component and say what it is
// say styled.(what you want the tag to be)
export const Column3 = styled.div`
height: 100%;
width: calc(100% / 3);
background-color: hsl(179, 100%, 13%);

&:hover {
    background-color: lightblue ;
  }
`