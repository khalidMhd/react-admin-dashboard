import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
 
  return (
    <BrowserRouter>
    <div className="containerMain">
      <Sidebar />
      <Route path='/' component={Main} />
    </div>
    </BrowserRouter>
  );
};

export default App;
