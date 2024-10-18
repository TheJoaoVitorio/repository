// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Main';
import CardSection from './components/CardSection';
import CardMain from './components/CardMain';
import SectionAboutMe from './components/SectionAboutMe';
import VerticalStepper from './components/Stepper';


function App() {
  return (
    //<Router>
      <div className="App">
        <Header></Header>
        <MainContent></MainContent>
        <CardMain></CardMain>
        <CardSection></CardSection>
        <SectionAboutMe></SectionAboutMe>
        <VerticalStepper />
{/* 
        <Routes>
          <Route path="/wln"  />
        </Routes> */}
      </div>
    //</Router>
  );
}

export default App;
