import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    title: {
        textAlign: "left",
        flexGrow: 1
    },
}));

function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className="Nav-Bar">
                <Toolbar className="Tool-Bar">
                    <Typography variant="h6" className={classes.title}>
                    <Link className="navlink-item home-btn" to="/">Home</Link>
                    </Typography>
                    <Link className="navlink-item" to="/products"><Button className="nav-buttons" color="inherit"><AppsIcon/>Products</Button></Link>
                    <Link className="navlink-item" to="/cart"><Button className="nav-buttons" color="inherit"><ShoppingCartIcon/>Cart</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
