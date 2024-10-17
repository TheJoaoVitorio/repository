// import { ChakraProvider, Container } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import CardSection from './components/CardSection';
import CardMain from './components/CardMain';
import VerticalStepper from './components/Stepper';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <CardMain></CardMain>
      <CardSection></CardSection>
      <VerticalStepper />
    </div>
  );
}

export default App;
