import getPopularMovies from './services/movies/popular';
import getSearchedMovies from './services/movies/search';
const formSearch = document.querySelector('[data-form="search"]');

getPopularMovies();

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  getSearchedMovies(formData.get('query'));
});
