import React, { Component } from 'react'

export class FruitType extends Component {
    render() {
        return (
            <div>
                <h2>Fruits:</h2> 
                <ul> 
                 <li>Apples</li> 
                 <li>Blueberries</li> 
                 <li>Strawberries</li> 
                 <li>Bananas</li> 
                </ul>
                <h2>Fruits using numbered list:</h2> 
                <ol> 
                 <li>Apples</li> 
                 <li>Blueberries</li> 
                 <li>Strawberries</li> 
                 <li>Bananas</li> 
                </ol> 
            </div>
        )
    }
}

export default FruitType
