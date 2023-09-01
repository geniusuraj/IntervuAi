import React from 'react';
import logo from './logo.svg';
import './App.css';
import All_Routes from './Components/All_Routes';
import Category from './Pages/Category';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      <Header/>
           <All_Routes/>
           
       
    </div>
  );
}

export default App;
