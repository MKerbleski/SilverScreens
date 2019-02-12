import axios from 'axios'

export const ERROR = 'ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LIST_RECIEVED = 'LIST_RECIEVED';

export const changePage = (pageNum) => {
    return function(dispatch){
        dispatch({type: CHANGE_PAGE, pageNum: pageNum});
        dispatch(fetchNowPlaying(pageNum))
    }
}

export const fetchNowPlaying = (pageNum) => {
    return function(dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eb78932ad7ebfc9390234541280b7c84&language=en-US&page=${pageNum}`).then(res => {
            dispatch({type: LIST_RECIEVED, payload: res})
        }).catch(error => {
            console.log(error)
            dispatch({type: ERROR, payload: error})
        })
    }
}


