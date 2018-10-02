import movieDB, { key } from '../api.js';
import searchMovies from '../../scripts/movies/movie';

export default query => {
  const movieContainer = document.querySelector('[data-container="movies"]');

  movieDB
    .get(`search/movie?api_key=${key}&language=pt-BR&query=${query}`)
    .then(response => response.data)
    .then(data => {
      const instance = new searchMovies(data, movieContainer);
      instance.init();
    })
    .catch(error => console.log(error));
};
