import React from 'react'

function Menu({dish}) {
    if(dish =='rooti')
    {
        throw new Error('Not avaliable')
    }
    return (
        <div>
            {dish}
        </div>
    )
}

export default Menu
