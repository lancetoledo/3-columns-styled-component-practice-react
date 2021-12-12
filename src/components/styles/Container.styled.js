import styled from "styled-components";

// Define name of styled component and say what it is
// say styled.(what you want the tag to be)
export const Container = styled.div`
width: 920px;
height: 500px;
display: flex;
align-items: center;
border-radius: 10px;
overflow: hidden;

img {
    width: 50px;
    margin-top: -45px;
    width: 80px;
  }

  h2 {
    color: hsl(0, 0%, 95%);
    font-family: 'Big Shoulders Display', cursive;
    font-size: 40px;
    margin-top: -35px;
  }

p {
  font-family: "Lexend Deca", sans-serif;
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 16px;
  margin-top: -40px;
  padding-bottom: 10px;
  line-height: 1.5;
}

button {
  background-color: none;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 30px;
  border: none;
  text-align: center;
  font-family: "Lexend Deca", sans-serif;
  font-size: 16px;
  padding: 10px;
  margin-right: 70px;
}

#content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin: 0px 2px;
}

.column1 button {
  color: hsl(31, 77%, 52%);
}

.column2 button {
  color: hsl(184, 100%, 22%);
}

.column3 button {
  color: hsl(179, 100%, 13%);
}

`