import React, { Component } from 'react'

export class HoverCounter extends Component {
    render() {
        return (
        <React.Fragment>
            <button onMouseOver={this.incrementCount}>click {this.state.count} times</button>
        </React.Fragment>
        )
    }
}

export default HoverCounter
