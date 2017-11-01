<<<<<<< HEAD
import React, { Component } from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {

  state = {
    clientTitle: '',
    clientID: ''
  }

  handleSubmitTitle = (event) => {
    event.preventDefault()
    
    const clientTitle = event.target.value

    this.setState({
      clientTitle: clientTitle
    })

  }

  handleSubmitI = (event) => {
    event.preventDefault()
    
  }
  
render() {
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form onSubmit={handleSubmitTitle} id="title-search-form" method="get">
          <input type="text" name="title" placeholder="Enter movie title" value={this.state.clientTitle} />
          <input type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form onSubmit={handleSubmitID} id="id-search-form" method="get">
          <input type="text" name="id" placeholder="Enter omdb movie ID" value={this.state.clientID}/>
          <input type="submit" value="Search by ID" />
        </form>
      </div>

    </section>
  )
}
};

export default Search;
=======
import React, { Component } from 'react'

class Search extends Component {
  // Update the forms to utilize methods being passed down from App.js,
  // along with the Handle Change Functions to update state
  state = {
    title: "",
    id: ""
  }

    // Use this function to update the state as a user types in the "title" input
  handleTitleChange = (event) => {
    event.preventDefault()

  }


    // Use this function to update the state as a user types in the "id" input
  handleIdChange = (event) => {
    event.preventDefault()

  }
  render () {
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
          <form id="title-search-form" method="get">
            /* Use "Value" to make the Title input update as state updates*/
            <input type="text" name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>

        <div className="search">
          <form id="id-search-form" method="get">
            /* Use "Value" to make the ID input update as state updates*/
            <input type="text" name="id" placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>

      </section>
    );
  }
}

export default Search;
>>>>>>> c569e4649a1376002a16d79743c367fd0e7e438f
