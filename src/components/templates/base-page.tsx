import React from 'react';
import {Header} from "../organisms/header";

export const BasePage: React.FC = ({children}) => {
    return (<div>
        <Header/>
        {children}
    </div>)
};