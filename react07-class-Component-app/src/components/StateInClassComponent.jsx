import React, { Component } from 'react'

class StateInClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
                count : 0,
            }
    }
    render() {

      return (
        
      <React.Fragment>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
      </React.Fragment>
    )
  }
}

export default StateInClassComponent;
