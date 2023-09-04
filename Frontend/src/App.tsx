
import React from 'react';
import logo from './logo.svg';
import './App.css';
import All_Routes from './Components/All_Routes';
import Category from './Pages/Category';
import Header from './Components/Header';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div className="App">


      <Navbar/>

           <All_Routes/>
           
       

  
    </div>
  );
}

export default App;
