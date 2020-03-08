import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

type HeaderProps = {
    onClickMenuIcon: () => void
}

export const Header: React.FC<HeaderProps> = props => (
    <AppBar position="absolute">
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
            >
                <MenuIcon onClick={props.onClickMenuIcon}/>
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
                Masahiro Komeda
            </Typography>
        </Toolbar>
    </AppBar>
);