import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Toolbar, IconButton, MenuItem, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
        {/*<Drawer*/}
        {/*    variant="permanent">*/}
        {/*    <div>*/}
        {/*        <IconButton>*/}
        {/*            <ChevronLeftIcon/>*/}
        {/*        </IconButton>*/}
        {/*    </div>*/}

        {/*    <Divider/>*/}

        {/*    <List>*/}

        {/*        <ListItem button>*/}
        {/*            <ListItemIcon>*/}
        {/*                <PeopleIcon/>*/}
        {/*            </ListItemIcon>*/}
        {/*            <ListItemText primary="Contact" />*/}
        {/*        </ListItem>*/}

        {/*        <ListItem button>*/}
        {/*            <ListItemIcon>*/}
        {/*                <DashboardIcon />*/}
        {/*            </ListItemIcon>*/}
        {/*            <ListItemText primary="Portfolio" />*/}
        {/*        </ListItem>*/}

        {/*    </List>*/}
        {/*</Drawer>*/}
    </div>
);

