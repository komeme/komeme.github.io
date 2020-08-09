import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from 'react-router-dom'
import {HomePage} from "./components/pages/home-page";
import {PortfolioPage} from "./components/pages/portfolio-page";
import {ContactPage} from "./components/pages/contact-page";
import {NotFoundPage} from "./components/pages/not-found-page";

function App() {
    return (
        <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/" component={HomePage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </HashRouter>
    );
}

export default App;
