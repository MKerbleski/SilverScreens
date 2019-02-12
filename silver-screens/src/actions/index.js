import axios from 'axios'

export const ERROR = 'ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LIST_RECIEVED = 'LIST_RECIEVED';
export const CHANGE_CATAGORY = 'CHANGE_CATAGORY';
export const LIST_REQUESTED = 'LIST_REQUESTED';

export const changePage = (catagory, pageNum=1) => {
    return function(dispatch){
        dispatch({type: CHANGE_PAGE, pageNum: pageNum});
        dispatch(fetchList(catagory, pageNum))
    }
}

export const changeCatagory = (catagory) => {
    return function(dispatch){
        dispatch({type: CHANGE_CATAGORY, catagory: catagory});
        dispatch(fetchList(catagory))
    }
}

export const fetchList = (catagory, pageNum=1) => {
    return function(dispatch){
        dispatch({type: LIST_REQUESTED})
        switch(catagory){
            case 'Now Playing':
                dispatch(fetchNowPlaying(pageNum));
                break;
            case 'Popular':
                dispatch(fetchPopular(pageNum));
                break;
            default:
                dispatch(fetchNowPlaying(pageNum));
                break;
        }
    }
}

export const fetchNowPlaying = (pageNum=1) => {
    return function(dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eb78932ad7ebfc9390234541280b7c84&language=en-US&page=${pageNum}`).then(res => {
            dispatch({type: LIST_RECIEVED, payload: res})
        }).catch(error => {
            console.log(error)
            dispatch({type: ERROR, payload: error})
        })
    }
}

export const fetchPopular = (pageNum=1) => {
    return function(dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb78932ad7ebfc9390234541280b7c84&language=en-US&page=${pageNum}`).then(res => {
            dispatch({type: LIST_RECIEVED, payload: res})
        }).catch(error => {
            console.log(error)
            dispatch({type: ERROR, payload: error})
        })
    }
}


