import React, {useState} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import News from "./pages/News/News";
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog/Catalog";
import Electronics from "./pages/Electronics/Electronics";
import Computers from "./pages/Computers/Computers";
import Appliances from "./pages/Appliances/Appliances";
import House from "./pages/House/House";
import Repair from "./pages/Repair/Repair";
import Auto from "./pages/Auto/Auto";
import Beauty from "./pages/Beauty/Beauty";
import Kids from "./pages/Kids/Kids";
import Office from "./pages/Office/Office";
import Food from "./pages/Food/Food";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Placement from "./pages/Placement/Placement";
import Vacancies from "./pages/Vacancies/Vacancies";
import Manifesto from "./pages/Manifesto/Manifesto";
import Support from "./pages/Support/Support";
import Success from "./pages/Success/Success";
import Services from "./pages/Services/Services";
import Houses from "./pages/Houses/Houses";
import Rental from "./pages/Rental/Rental";
import PLQ from "./pages/PLQ/PLQ";

function App() {
  const [show, setShow] = useState(true)
  const [placement, setPlacement] = useState(false)

  const showToggle = () => {
    setShow(!show)
  }

  const placementToggle = () => {
    setPlacement(!placement)
  }

  return (
    <div className={placement ? null : "bgc"}>
      <div className={placement ? null : "container"}>
        {show ? <Header setShow={showToggle}/> : null}

        <Route exact path={"/"} component={News}/>
        <Route exact path={"/catalog"} component={Catalog}/>
        <Route exact path={"/electronics"} component={Electronics}/>
        <Route exact path={"/computers"} component={Computers}/>
        <Route exact path={"/appliances"} component={Appliances}/>
        <Route exact path={"/house"} component={House}/>
        <Route exact path={"/repair"} component={Repair}/>
        <Route exact path={"/auto"} component={Auto}/>
        <Route exact path={"/beauty"} component={Beauty}/>
        <Route exact path={"/kids"} component={Kids}/>

        <Route exact path={"/office"} component={Office}/>
        <Route exact path={"/food"} component={Food}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/contacts"} component={Contacts}/>
        <Route exact path={"/vacancies"} component={Vacancies}/>
        <Route exact path={"/manifesto"} component={Manifesto}/>
        <Route exact path={"/login"} render={() => <Login setShow={showToggle}/>}/>
        <Route exact path={"/support"} render={() => <Support setShow={showToggle}/>}/>
        <Route exact path={"/success"} render={() => <Success setShow={showToggle}/>}/>
        <Route exact path={"/placement"} render={() => <Placement setShow={showToggle} setPlacement={placementToggle}/>}/>

        <Route exact path={"/services"} component={Services}/>
        <Route exact path={"/houses"} component={Houses}/>
        <Route exact path={"/rental"} component={Rental}/>
        <Route exact path={"/pl.quarantine"} component={PLQ}/>

        {show ? <Footer setShow={showToggle} setPlacement={placementToggle}/> : null}
      </div>
    </div>
  );
}

export default App;
