import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';


 function App() {
   return (
     <Router>
       <div className="App">
         <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} ></Route> 
            <Route path="/projetos/:id" element={<ProjectDetails />} />           
          </Routes>
          <Footer></Footer> 
       </div>

          
     </Router>
     
   );
 }

export default App;
