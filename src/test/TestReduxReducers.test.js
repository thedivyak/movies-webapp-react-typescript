import React from 'react'
import {initialState, mainReducer} from "../store/mainReducer";
import {UnfoldMore} from "@material-ui/icons";

/*REDUCERS*/

describe('Initial State', () => {
    it('is correct', () => {
        expect(mainReducer(undefined, {type: 'unexpected'})).toEqual(initialState)
    })
})

describe('State change on Next Page', () => {
    it('returns the correct state', () => {
        const newState = {
            movieSummaries: [{id:"id", title:"title", rating: 5.5 , runtime: 143 }],
                currentPage: 1,
        }
        const action = { type: "TRIGGER_SEARCH", newState: newState}

        const expectedState = {
                searchTerm: '',
                movieSummaries: [{id:"id", title:"title", rating: 5.5 , runtime: 143 }],
                searchResultsTotal: 0,
                currentPage: 1,
                rowsPerPage: 10,
                orderBy: {'rating': {sort:'desc', icon:UnfoldMore}, 'title': {sort:'asc', icon:UnfoldMore}},
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
                crew: {}
            }

        expect(mainReducer(undefined, action)).toEqual(expectedState)
    })
})