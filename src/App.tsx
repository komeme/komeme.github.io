import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Home} from "./home";
import {Portfolio} from "./portfolio";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
