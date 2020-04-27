import * as actionTypes from './globalActionTypes'
import * as utility from '../utilities'

export const APIfailure = () => ({
    type: actionTypes.API_FAILURE,
    newState: {
        errorMessage: 'Uh Oh! We could not reach the server at this moment. Please ensure the API server is running.',
        apiError: true,
    }
})

export const updateSearchResults = (searchResults: any) => ({
    type: actionTypes.TRIGGER_SEARCH,
    newState: {
        movieSummaries: searchResults.movieSummaries,
        currentPage: 0,
        searchTerm: searchResults.searchTerm,
        searchResultsTotal: searchResults.searchResultsTotal,

    }
})

export const updateCurrentPage = (searchResults: any) => ({
    type: actionTypes.TRIGGER_SEARCH,
    newState: {
        movieSummaries: searchResults.movieSummaries,
        currentPage: searchResults.currentPage,
    }
})

export const updateRowsPerPage = (searchResults: any) => ({
    type: actionTypes.TRIGGER_SEARCH,
    newState: {
        movieSummaries: searchResults.movieSummaries,
        currentPage: 0,
        rowsPerPage: searchResults.rowsPerPage
    }
})

export const updateResultsOrder = (searchResults: any) => ({
    type: actionTypes.TRIGGER_SEARCH,
    newState: {
        movieSummaries: searchResults.movieSummaries,
        currentPage: 0,
        orderBy: searchResults.orderBy
    }
})

export const showMovie = (movie: any) => ({
    type: actionTypes.TRIGGER_MOVIE,
    newState: {
        movieId: movie.id,
        title: movie.title,
        genres: movie.genres,
        year: movie.year,
        runtime: movie.runtime,
        rating: movie.rating,
        votes: movie.votes,
        directors: movie.directors,
        writers: movie.writers,
        crew: movie.crew
    }
})

export const showCrew = (crew: any) => ({
    type: actionTypes.TRIGGER_CREW,
    newState: {
        crewId: crew.crewId,
        name: crew.name,
        movies: crew.movies,
    }
})

export const addToMovieSummaries = (movie: any) => ({
    type: actionTypes.CREATE_CREW_MOVIES,
    newState: {
        newMovie: movie
    }
})

export const resetState = () => ({
    type: actionTypes.RESET_STATE,
    newState: {}

})

// **********************************
// ASYNC Functions
// **********************************

export const searchMovies = (searchTerm: string) => (dispatch: any, getState: any) => {
    fetch(`/movies?offset=0&size=10&query=${searchTerm}&sort=rating&order=desc`)
        .then((response) => response.json())
        .then(apiResponse => {
            const allMovies = apiResponse.items
            const movieSummaries = allMovies.map((m: any) => utility.extractMovieSummaries(m))
            dispatch(updateSearchResults({
                movieSummaries: movieSummaries,
                searchResultsTotal: apiResponse.total,
                searchTerm: searchTerm
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

export const changePage = (event: any, newPage: number) => (dispatch: any, getState: any) => {
    let {searchTerm, rowsPerPage, orderBy} = getState()
    const offset = newPage * rowsPerPage
    let orderType = orderBy['active']

    fetch(`/movies?offset=${offset}&size=${rowsPerPage}&query=${searchTerm}&sort=${orderBy['active']}&order=${orderBy[orderType].sort}`)
        .then((response) => response.json())
        .then(apiResponse => {
            const allMovies = apiResponse.items
            const movieSummaries = allMovies.map((m: any) => utility.extractMovieSummaries(m))
            dispatch(updateCurrentPage({
                movieSummaries: movieSummaries,
                currentPage: newPage,
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

export const changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => (dispatch: any, getState: any) => {
    const {searchTerm} = getState()
    const rows = parseInt(event.target.value, 10)

    fetch(`/movies?offset=0&size=${rows}&query=${searchTerm}&sort=rating&order=desc`)
        .then((response) => response.json())
        .then(apiResponse => {
            const allMovies = apiResponse.items
            const movieSummaries = allMovies.map((m: any) => utility.extractMovieSummaries(m))
            dispatch(updateRowsPerPage({
                movieSummaries: movieSummaries,
                rowsPerPage: rows
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

export const sortByTitleOrRating = (event: any, property: any) => (dispatch: any, getState: any) => {
    const {searchTerm, rowsPerPage, orderBy} = getState()
    orderBy[property].sort = orderBy[property].sort === 'asc' ? 'desc' : 'asc'
    orderBy['active'] = property

    fetch(`/movies?offset=0&size=${rowsPerPage}&query=${searchTerm}&sort=${property}&order=${orderBy[property].sort}`)
        .then((response) => response.json())
        .then(apiResponse => {
            const allMovies = apiResponse.items
            const movieSummaries = allMovies.map((m: any) => utility.extractMovieSummaries(m))
            dispatch(updateResultsOrder({
                movieSummaries: movieSummaries,
                orderBy: orderBy
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

export const findMovie = (movie: string) => (dispatch: any, getState: any) => {
    fetch(`/movies/${movie}`)
        .then((response) => response.json())
        .then(apiResponse => {

                const directors = apiResponse.directors.map(({id, name, movies}: any) => ({
                    memberId: id,
                    name,
                    movies,
                    roles: ['director']
                }))
                const writers = apiResponse.writers.map(({id, name, movies}: any) => ({
                    memberId: id,
                    name,
                    movies,
                    roles: ['writer']
                }))

                let crew: any = {}
                for (let d of directors) {
                    crew[d.memberId] = {name: d.name, movies: d.movies, roles: ['director']}
                }

                for (let w of writers) {
                    if (crew[w.memberId]) {
                        crew[w.memberId].roles.push('writer')
                    } else {
                        crew[w.memberId] = {name: w.name, movies: w.movies, roles: ['writer']}
                    }

                }

                dispatch(showMovie({
                    movieId: apiResponse.id,
                    title: apiResponse.title,
                    genres: apiResponse.genres,
                    year: apiResponse.year,
                    runtime: apiResponse.runtime,
                    rating: apiResponse.rating,
                    votes: apiResponse.votes,
                    directors: directors,
                    writers: writers,
                    crew: crew
                }));
            }
        )
        .catch(ex => dispatch(APIfailure()))
}

export const findCrew = (crew: string) => (dispatch: any, getState: any) => {
    fetch(`/crew/${crew}`)
        .then((response) => response.json())
        .then(apiResponse => {
            const movieIds = apiResponse.movies.map(({id}: any) => (id))
            movieIds.map((id: any) => dispatch(findCrewMovie(id)))
            dispatch(showCrew({
                crewId: apiResponse.id,
                name: apiResponse.name,
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

export const findCrewMovie = (movieId: any) => (dispatch: any, getState: any) => {
    fetch(`/movies/${movieId}`)
        .then((response) => response.json())
        .then(apiResponse => {
            dispatch(addToMovieSummaries({
                movieId: apiResponse.id,
                title: apiResponse.title,
                rating: apiResponse.rating,
                runtime: apiResponse.runtime
            }));
        })
        .catch(ex => dispatch(APIfailure()))
}

