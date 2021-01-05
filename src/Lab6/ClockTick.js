import React, { Component } from 'react'

export class ClockTick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             seconds:0,
             name: 'IGATE'
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
          this.setState(({ seconds }) => ({
            seconds: seconds + 1
          }))
          this.setState({name:'Capgemini'})
        }, 1000)
      }
    render() {
        return (
            <div>
                <h3>Clock tick : {this.state.seconds}</h3>
                <h3>Name:{this.state.name}</h3>
            </div>
        )
    }
}

export default ClockTick
