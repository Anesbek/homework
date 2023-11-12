import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/StyledBtn';
import { SuperBtn } from './components/StyledBtn';
import { Styleh1 } from './components/main';
import { Styledh3 } from './components/main';
import photo from "../src/imges/0cbd17e4381497547009ce81acc4eee3.jpg"


function App() {
  return (
    <div className="App">
      Hello 
     
     <Photo>

        <img src={ require('./imges/0cbd17e4381497547009ce81acc4eee3.jpg')} alt="" />
     </Photo>
      d
        
      <Styleh1>Headliner</Styleh1>
      <Styledh3>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Styledh3>

      <Box>
        <StyledBtn>See more</StyledBtn>
        <SuperBtn>Save</SuperBtn>
      </Box>
    </div>
  );
}

export default App;


const Photo = styled.image`
  border-radius: 10px;
  background-color: black;
  width: 20px;
  height: 20px;
  padding-top: 10px;
  margin-top: 10px;
  padding-right: 50px;
`



const Box = styled.div`
display: flex;

  gap: 10px;

`