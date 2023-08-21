export const SEARCH_BY_KEYWORD = 'SEARCH_BY_KEYWORD';
export const searchMovie = (keyword) => ({
    type: SEARCH_BY_KEYWORD,
    keyword
});

export const START_SEARCH_MOVIE = 'START_SEARCH_MOVIE';
export const startSearchMovie = loading => ({
    type: START_SEARCH_MOVIE,
    loading
});
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const searchMovieSuccess = movies => ({
    type: SEARCH_MOVIE_SUCCESS,
    movies
});
export const SEARCH_MOVIE_FAIL = 'SEARCH_MOVIE_FAIL';
export const searchMovieFail = errors => ({
    type: SEARCH_MOVIE_FAIL,
    errors
});