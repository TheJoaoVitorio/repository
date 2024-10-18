import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';


 function App() {
   return (
     <Router>
       <div className="App">
         <Header></Header>
       </div>

          <Routes>
            <Route path='/' element={<Home />} ></Route> 
            <Route path="/projetos/:id" element={<ProjectDetails />} />           
          </Routes>
     </Router>
   );
 }

export default App;
