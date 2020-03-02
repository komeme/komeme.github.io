import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Typography,
} from "@material-ui/core"

export const Home: React.FC = () => (
    <div>
        <AppBar position="absolute">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuItem/>
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap>
                    Masahiro Komeda
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
);

