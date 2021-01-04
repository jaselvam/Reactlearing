import React, { Component } from 'react'
import MovieList from './MovieList'

export class Indexlab3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movieName:'saaga',
             TicketPrice:'200'
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(newName,newPrice)
    {
        this.setState({movieName:newName})
        this.setState({TicketPrice:newPrice})
    }
    render() {
        return (
            <div>
                <MovieList movieName={this.state.movieName} TicketPrice={this.state.TicketPrice} onChange={this.onChange}/>
            </div>
        )
    }
}

export default Indexlab3
