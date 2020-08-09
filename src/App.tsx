import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import {HomePage} from "./components/pages/home-page";
import {PortfolioPage} from "./components/pages/portfolio-page";
import {ContactPage} from "./components/pages/contact-page";

function App() {
    return (
        <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>
                <Route path="/portfolio">
                    <PortfolioPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="">
                    <HomePage/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
