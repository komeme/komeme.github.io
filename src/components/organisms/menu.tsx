import {Divider, Drawer, IconButton, List, ListItem, ListItemText} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {Link} from "react-router-dom";
import React from "react";

type MenuProps = {
    onClose: () => void
}

export const Menu: React.FC<MenuProps> = props => (
    <Drawer
        variant="permanent"
        open
    >
        <div>
            <IconButton onClick={props.onClose}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button>
                <Link to="/home">
                    <ListItemText primary="HomePage" />
                </Link>
            </ListItem>
            <ListItem button>
                <Link to="/portfolio">
                    <ListItemText primary="PortfolioPage" />
                </Link>
            </ListItem>
            <ListItem button>
                <Link to="/contact">
                    <ListItemText primary="contact" />
                </Link>
            </ListItem>
        </List>
    </Drawer>
);