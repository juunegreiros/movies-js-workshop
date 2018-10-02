import getImageUrl from '../../services/images';

export default class {
  constructor(data, container) {
    this.results = data.results;
    this.container = container;
  }

  init() {
    this.clear();
    this.handleResults();
  }

  clear() {
    this.container.innerHTML = '';
  }

  handleResults() {
    this.results.forEach(result => {
      this.setItems(result);
    });
  }

  setItems(result) {
    this.container.innerHTML =
      this.container.innerHTML +
      `<li class="movie-item">   
        <img class="movie-item__image" src="${getImageUrl(
          'w342',
          result.poster_path
        )}">

        <div class="movie-item__info">
          <h3 class="movie-item__title">${result.original_title}</h3>
      
          <div class="movie-item__icons">
            <span class="movie-item__note">${result.vote_average}</span>
          </div>
        
          <p class="movie-item__overview">${result.overview}</p>
        </div>
      </li>`;
  }
}
