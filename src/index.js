import fetchWithTimeOut from '../src/services';
import * as movies from '../src/data/movies.json';

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeOut(1000).then(resolveFunction);
}

var moviePromise = fetchMovies();
moviePromise.then();