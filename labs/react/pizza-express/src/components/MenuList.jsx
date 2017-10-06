import React, { Component } from 'react'
import MenuItem from './MenuItem'
import pizzaData from '../pizzaData'

class MenuList extends Component {
    render () {

        const menuComponents = pizzaData.map((pizzaData, index) => {
            return <MenuItem
                name={pizzaData.name}
                price={pizzaData.price}
                description={pizzaData.description}
                image={pizzaData.image}
                key={index}
                index={index} />
        })

        return(
            <div id="menu" className="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                    { menuComponents }
                </div>
            </div>
        )
    }
}

export default MenuList