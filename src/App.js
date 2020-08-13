import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SideBar from './components/sidebar'
import {Home} from "./pages/Home";
import {Images} from "./pages/Images";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/images'} exact component={Images}/>
            <Route path={'/about'} exact component={About}/>
            <Route path={'/contact'} exact component={Contact}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
