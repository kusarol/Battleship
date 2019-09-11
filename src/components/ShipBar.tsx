import React from 'react';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import Aircraft from '../pic/Aircraft';
import Circle from '../pic/Circle';
import Battleship from '../pic/Battleship';
import Carrier from '../pic/Carrier';
import Cruiser from '../pic/Cruiser';
import Submarine from '../pic/Submarine';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

export default function ShipBar () {

    const addCircle = (num: number) => {
        let array = Array.from(Array(num), (d, i) => i)
        return array.map((arr) => {
            return(
            <Circle />
        )})
    };

    const classes = useStyles();

    return(
        <div className={classes.root} style={{padding: '15%'}}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <Aircraft />
            </Grid>
            <Grid item xs={6}>
                {addCircle(5)}  
            </Grid>
            <Grid item xs={6}>
                <Battleship />
            </Grid>
            <Grid item xs={6}>
                {addCircle(4)}
            </Grid>
            <Grid item xs={6}>
                <Cruiser/>
            </Grid>
            <Grid item xs={6}>
                {addCircle(3)}
            </Grid>
            <Grid item xs={6}>
                <Submarine/>
            </Grid>
            <Grid item xs={6}>
                {addCircle(3)}
            </Grid>
            <Grid item xs={6}>
                <Carrier />
            </Grid>
            <Grid item xs={6}>
                {addCircle(2)}
            </Grid>
            </Grid>   
        </div>
    )
}