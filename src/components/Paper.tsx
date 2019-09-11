import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShipBar from './ShipBar';
import NameBar from './NameBar';
import Board from './Board';
import PlayersScorte from './PlayersScore';

export default class PaperGame extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={2}
                >
                    <NameBar/>
                </Grid>
                
                <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                >
                    <Grid item xs={5}>
                        <div style={{padding: '10%'}}>
                            <PlayersScorte/>
                            <ShipBar/>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <Board/>
                    </Grid>
                    </Grid>
            </div>
        )
    }
}
