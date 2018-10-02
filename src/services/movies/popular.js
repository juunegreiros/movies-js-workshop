import movieDB, { key } from '../api.js';
import popularMovies from '../../scripts/movies/movie';

export default () => {
  const movieContainer = document.querySelector('[data-container="movies"]');

  movieDB
    .get(`/movie/popular?api_key=${key}&language=pt-BR`)
    .then(response => response.data)
    .then(data => {
      const instance = new popularMovies(data, movieContainer);
      instance.init();
    })
    .catch(error => console.log(error));
};
