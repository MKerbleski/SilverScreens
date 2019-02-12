import {
    ERROR,
    CHANGE_PAGE,
    LIST_RECIEVED,
    CHANGE_CATAGORY,
} from '../actions';

const initialState =  {
    pageNum: 1,
    catagory: 'Now Playing',
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_PAGE: 
            if(action.pageNum >= 0){
                return Object.assign({}, state, {
                    pageNum: action.pageNum
                })
            } else {
                return Object.assign({}, state, {
                    pageNum: 0
                })
            }
        case CHANGE_CATAGORY: 
            return Object.assign({}, state, {
                catagory: action.catagory
            })
        case LIST_RECIEVED: 
            return Object.assign({}, state, {
                movieList: action.payload.data
            })
        case ERROR: 
            return Object.assign({}, state, {
                error: action.payload
            })
        default:
            return state;
    }
}