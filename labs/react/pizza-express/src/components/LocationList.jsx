import React, { Component } from 'react'
import Location from './Location'
import locationData from '../locationData'

class LocationList extends Component {
    render () {

        const locationComponents = locationData.map((locationData, index) => {
            return <Location
                name={locationData.name}
                address={locationData.address}
                phoneNum={locationData.phone}
                key={index}
                index={index} />
        })

        return (
            <div id="locations">
                <h1>Locations :</h1>
                <div className="locations">
                    { locationComponents }
                </div>
            </div>
        )
    }
}

export default LocationList