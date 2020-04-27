import * as actionTypes from './actions/globalActionTypes'

export const initialState = {
    searchTerm: '',
    movieSummaries: [],
    searchResultsTotal: 0,
    currentPage: 0,
    rowsPerPage: 10,
    orderBy: {'rating': {sort:'desc'}, 'title': {sort:'asc'}, 'active': 'rating'},
    movieId: '',
    title: '',
    genres: [],
    year: 0,
    runtime: 0,
    rating: 0,
    votes: 0,
    directors: [],
    writers: [],
    crewId:'',
    name: '',
    crewMovies: [],
    crew: {},
    errorMessage: 'Sorry, no matching movies found.',
    apiError: false,
}

const updateObject = (oldObject: any, updatedValues: any) => ({
    ...oldObject,
    ...updatedValues
})

export const mainReducer = (state = initialState, action: { type: any; newState: any; }) => {
    switch(action.type) {
        case actionTypes.TRIGGER_SEARCH:
            return updateObject(state, action.newState)
        case actionTypes.TRIGGER_MOVIE:
            return updateObject(state, action.newState)
        case actionTypes.TRIGGER_CREW:
            return updateObject(state, action.newState)
        case actionTypes.RESET_STATE:
            return updateObject(state, initialState)
        case actionTypes.API_FAILURE:
            return updateObject(state, action.newState)
        case actionTypes.CREATE_CREW_MOVIES:
            return {
                ...state,
                movieSummaries: [...state.movieSummaries, action.newState.newMovie]
            }
        default:
            return state
    }
}

export default mainReducer