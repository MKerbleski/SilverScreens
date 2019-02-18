import {
    ERROR,
    CHANGE_PAGE,
    LIST_RECIEVED,
    CHANGE_CATAGORY,
    LIST_REQUESTED,
    SELECT_MOVIE,
    MOVIE_DETAILS,
    CLEAR_DETAILS,
    REQUIRE_UPDATE
} from '../actions';

const initialState =  {
    pageNum: 1,
    // catagory: 'Now Playing',
    update: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE: 
            return Object.assign({}, state, {
                pageNum: action.pageNum,
                update: false
            })
        case REQUIRE_UPDATE: 
            return Object.assign({}, state, {
                update: true
            })
        case MOVIE_DETAILS: 
            return Object.assign({}, state, {
                movieDetails: action.payload.data,
                update: false,
            })
        case CLEAR_DETAILS: 
            return Object.assign({}, state, {
                movieDetails: null,
                update: false,
            })
        case SELECT_MOVIE: 
            return Object.assign({}, state, {
                selectedMovie: action.payload,
                update: false,
            })
        case LIST_REQUESTED: 
            return Object.assign({}, state, {
                listRequested: true,
                catagory: action.payload,
                update: false
            })
        case CHANGE_CATAGORY: 
            return Object.assign({}, state, {
                catagory: action.catagory,
                update: false,
            })
        case LIST_RECIEVED: 
        console.log(action.payload)
            return Object.assign({}, state, {
                listRequested: false,
                movieList: action.payload.results,
                pageNum: action.payload.page,
                totalPages: action.payload.total_pages,
                update: false,
            })
        case ERROR: 
            return Object.assign({}, state, {
                error: action.payload,
                update: false,
            })
        default:
            return state;
    }
}