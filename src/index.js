import { fetchWithTimeOut } from '../src/services';
const movies = require('../src/data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeOut(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then(results => {
    console.log(results);
});