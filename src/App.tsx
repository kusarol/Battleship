import React from 'react';
import Paper from './components/Paper'

class App extends React.Component {
    //classes = useStyles();
    render() {
      return (
        <div className="App">
            <div className={"root"}>
                <Paper />
            </div>
        </div>
    );}
}

export default App;
