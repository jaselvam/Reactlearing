import React, { Component } from 'react'

export class HOCDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevStste=>{
            return {count:prevStste.count+1}
        })
    }
    render() {
        
        return (
            <React.Fragment>
                <button onClick={this.incrementCount}>click {this.state.count} times</button>
            </React.Fragment>
        )
    }
}

export default HOCDemo
