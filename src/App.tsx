import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from "./home";
import {Portfolio} from "./portfolio";
import {Contact} from "./contact";

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
