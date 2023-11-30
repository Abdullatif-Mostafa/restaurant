import './Global.css'
import React from "react";
import Header from './component/01-header/Header';
import Services from './component/02-Services/Services';
import PopularFoot from './component/03-PoupulaFoot/PopularFoot';
import Registration from './component/04-Registration/Registration';
import Master from './component/05-MasterChief/Master';
import Testmonial from './component/06-testmonial/Testmonial';
import Footer from './component/07-Footer/Footer';
import { BrowserRouter,Route,Routes,link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <PopularFoot/>
      <Registration/> 
       <Testmonial/>
       <Footer/>
    </div>
 
  );
}
export default App;
