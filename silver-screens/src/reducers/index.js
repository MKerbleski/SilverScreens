import {
    ERROR,
    CHANGE_PAGE,
    LIST_RECIEVED,
    CHANGE_CATAGORY,
    LIST_REQUESTED
} from '../actions';

const initialState =  {
    pageNum: 1,
    catagory: 'Now Playing',
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE: 
            return Object.assign({}, state, {
                pageNum: action.pageNum
            })
        case LIST_REQUESTED: 
            return Object.assign({}, state, {
                listRequested: true
            })
        case CHANGE_CATAGORY: 
            return Object.assign({}, state, {
                catagory: action.catagory
            })
        case LIST_RECIEVED: 
            return Object.assign({}, state, {
                listRequested: false,
                movieList: action.payload.results,
                pageNum: action.payload.page,
                totalPages: action.payload.total_pages
            })
        case ERROR: 
            return Object.assign({}, state, {
                error: action.payload
            })
        default:
            return state;
    }
}