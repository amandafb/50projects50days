const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6c052a608f188956aa273bc9d264f67a&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=6c052a608f188956aa273bc9d264f67a&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// get initical movies
getMovies(API_URL);

// async function getMovies(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data.results);
//   showMovies(data.results);
// }

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((dataAPI) => {
      const data = dataAPI.results;
      showMovies(data);
    });
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    // destructuring
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')

    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h2>${title}</h2>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
