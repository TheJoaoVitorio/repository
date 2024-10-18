import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
// import MainContent from './components/Main';
// import CardSection from './components/CardSection';
// import CardMain from './components/CardMain';
// import SectionAboutMe from './components/SectionAboutMe';
// import VerticalStepper from './components/Stepper';
import Home from './pages/Home';


// function App() {
//   return (
//       <div className="App">
//         <Header></Header>
//       </div>

//   );
// }

 function App() {
   return (
     <Router>
       <div className="App">
         <Header></Header>
       </div>

          <Routes>
            <Route path='/' element={<Home />} ></Route>            
          </Routes>
     </Router>
   );
 }

export default App;
