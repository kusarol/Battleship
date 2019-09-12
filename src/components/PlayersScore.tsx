import React from 'react';
import { Card, CardContent, Typography, CardActions, Grid } from '@material-ui/core';

export default class ShipBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(){
        return(
            <div>
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Grid item xs={5}>
                        <Card >
                            <CardContent>
                                <Typography align="center" variant="h1">
                                    00
                                </Typography>
                                <Typography variant="h6">
                                    <hr />
                                </Typography>
                                <Typography align="center">
                                    Player 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card >
                            <CardContent>
                                <Typography align="center" variant="h1">
                                    00
                                </Typography>
                                <Typography variant="h6">
                                    <hr />
                                </Typography>
                                <Typography align="center">
                                    Player 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}