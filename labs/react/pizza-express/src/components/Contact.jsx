import React, { Component } from 'react'

class Contact extends Component {
    render () {
        return (
            <div id="contact" className="contact">
                <h1>Store Hours</h1>
                <p>
                    <strong>Sunday-Thursday: </strong>
                    11:00am to 12:00am |<span> </span>
{/*                     Didn't think the <span> above would actually work, but
                    I used it to create whitespace */}
                    <strong>Sunday-Thursday: </strong>
                    11:00am to 1:00am
                </p>
                <div>
                    <p>
                        <strong>Phone: </strong>
                        404-555-1234
                    </p>
                    <p>
                        <strong>Email: </strong>
                        pizzaheaven@yes.please
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact