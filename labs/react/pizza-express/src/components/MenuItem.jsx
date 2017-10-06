import React, { Component } from 'react'

class MenuItem extends Component {
    render () {
        return(
            <div className="menu-item">
                {/*<div>Key: {this.props.index}</div> */}
                <img src={this.props.image} alt={`${this.props.name} ICON`} />
                <div className="menu-description">
                    <div className="menu-item-name">{this.props.name}</div>
                    <div>
                        <strong>Price:</strong> {this.props.price}
                    </div>
                    <div>{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default MenuItem