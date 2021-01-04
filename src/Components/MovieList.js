import React from 'react'

function MovieList(props) {
    return (
        <div>
            <h4>Movie name:{props.movieName}</h4>
            <h4>Ticket price:{props.TicketPrice}</h4>
            <button onClick={()=>props.onChange('Avengers','180')}>click me!</button>
        </div>
    )
}

export default MovieList

