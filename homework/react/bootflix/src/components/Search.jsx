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