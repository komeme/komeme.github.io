import React, {useState} from 'react';
import {Header} from "./header";
import {Menu} from "./menu";

export const BasePage: React.FC = ({children}) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (<div>
        <Header onClickMenuIcon={() => setIsMenuOpen(true)}/>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)}/>}
        <div>
            {children}
        </div>
    </div>)
};