import React from 'react';
import Box from '../pic/Box';

export default class Board extends React.Component {
  addBox = () => {
    let array = Array.from(Array(10), (d, i) => i)
        return array.map((i) => {
            return(
              <div>
              <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
              </div>
            )
        }
    )
  }
    render() {
    
    return (
      <div>
        {this.addBox()}
      </div>
    );
  }
}