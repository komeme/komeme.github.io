import {AppBar, Toolbar, Typography,  Link} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom'
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        link: {
            color: '#FFF',
            textDecoration: 'none',
            margin: theme.spacing(1, 1.5),
        }
    }),
);

export const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6" className={classes.title} >
                    Comeme's Official Website
                </Typography>

                <Typography>
                    <nav>
                        <Link  component={RouterLink} to="/portfolio" color="inherit" className={classes.link}>
                            Portfolio
                        </Link>

                        <Link component={RouterLink} to="/contact" color="inherit" className={classes.link}>
                            Contact
                        </Link>
                    </nav>
                </Typography>

            </Toolbar>
        </AppBar>
    );
}