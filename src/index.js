import { fetchWithTimeOut } from './services';
const movies = require('./data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeOut(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then(results => {
    console.log(results);
});