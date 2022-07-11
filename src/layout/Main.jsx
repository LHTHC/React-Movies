import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  loadMovies = (str, type) => {
    fetch(
      `http://www.omdbapi.com/?apikey=b29532b6&s=${str}${type !== 'all' ? `&type=${type}` : ''}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search });
      });
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=b29532b6&s=harry`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search load={this.loadMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
