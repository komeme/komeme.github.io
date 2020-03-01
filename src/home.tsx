import React from 'react';
import {Link} from "react-router-dom";

export const Home: React.FC = () => (
    <div>
        <p>HOME</p>
        <Link to="/contact">contact</Link>
        <Link to="/portfolio">portfolio</Link>
    </div>
); 