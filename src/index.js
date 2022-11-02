import { fetchWithTimeout, fetchBooks, fetchMovies, asyncFetchBooks, asyncFetchMovies } from './services';
const movies = require('./data/movies.json');

const getBooksAndMovies = () => {
    return Promise.all([fetchBooks(), fetchMovies()]).then((
        [books, movies]
    ) => ({
        books,
        movies
    })).catch(error => console.log("Error fetching books and movies", error));
};

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => {
    console.log('getBooksAndMoviesPromise', results);
});

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()]).then(
        results => results)
    .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();

async function getBooksAndMoviesAsync() {
    try {
        await Promise.all([asyncFetchBooks(), asyncFetchMovies()])
    } catch (error) {
        console.log("Error fetching books and movies ", error);
    }
}

getBooksOrMoviesPromise.then(results => {
    console.log('getBooksOrMoviesPromise', results);
});

