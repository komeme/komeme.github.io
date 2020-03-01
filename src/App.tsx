import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import {Home} from "./home";
import {Portfolio} from "./portfolio";
import {Contact} from "./contact";

function App() {
    return (
        <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="">
                    <Home/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
