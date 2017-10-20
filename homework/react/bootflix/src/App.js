import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

class App extends Component {
    state = {
      titleSearchData: {
        type: String
      },
      idSearchData: {
        type: String
      },
      movieTitle: '',
      movieId: ''
    }
  

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = async () => {
    const title = this.state.movieTitle
    

    const res = await axios.get(`http://www.omdbapi.com/${this.params}=${title}`, { 
      params: "?apikey=d31f1a94&t" 
    })
      ((res) => {
        const data = res.data
        this.setState({
          titleSearchData: data
        });
      })
  }

  _searchById = async () => {
    const id = this.state.movieId

    const res = await axios.get(`http://www.omdbapi.com/${this.params}=${id}`, { 
      params: "?apikey=d31f1a94&i" 
    })
      ((res) => {
        const data = res.data
        this.setState({
          idSearchData: data
        });
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie />
      </div>
    );
  }
}

export default App;

// axios Request Method Aliases
/* 
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
 */
// axios Parameters
/* 
ID = parameter: i | default value: <empty> | description: A valid IMDB ID (e.g. tt1285016)
Title = parameter: t | default value: <empty> | description: Movie title to search for
Search = parameter: s | default value: <empty> | description: Movie title to search for
*/