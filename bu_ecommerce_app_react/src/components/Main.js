import React, { useState, useEffect } from "react";
import { Container, Paper, Box, } from "@material-ui/core";
import { makeStyles, } from '@material-ui/core/styles';

// import { publishableKeyGet } from '../constants/functions'
import CartShowPage from "./CartShowPage";

const useStyles = makeStyles(theme => ({
    boxWrapper: {
        marginBottom: "55px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "-95px",
        marginBottom: "45px",
    }
}));

const Main = (props) => {
    const classes = useStyles();

    
    return (
        <CartShowPage user={props.user} remove={props.remove} cart={props.cart} removeAll={props.removeAll} history={props.history}/>
    )
                      
                  

}

export default Main;