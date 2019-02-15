import axios from 'axios'

export const ERROR = 'ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LIST_RECIEVED = 'LIST_RECIEVED';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const CHANGE_CATAGORY = 'CHANGE_CATAGORY';
export const LIST_REQUESTED = 'LIST_REQUESTED';
export const MOVIE_DETAILS = 'MOVIE_DETAILS';
export const CLEAR_DETAILS = 'CLEAR_DETAILS';
export const REQUIRE_UPDATE = 'REQUIRE_UPDATE';

export const changePage = (catagory, pageNum=1) => {
    return function(dispatch){
        dispatch({type: CHANGE_PAGE, pageNum: pageNum});
        dispatch(fetchList(catagory, pageNum))
    }
}

export const changeCatagory = (catagory) => {
    return function(dispatch){
        dispatch({type: CHANGE_CATAGORY, catagory: catagory});
        dispatch(fetchList(catagory, 1))
    }
}

export const fetchList = (catagory, pageNum=1, searchInput=null) => {
    return function(dispatch){
        dispatch({type: LIST_REQUESTED})
        console.log(catagory)
        switch(catagory){
            // case 'Now_playing':
            //     catagory = 'now_playing'
            //     break;
            // case 'Popular':
            //     catagory = 'popular'
            //     break;
            // case 'Top Rated':
            //     catagory = 'top_rated'
            //     break;
            case 'search':
                if(searchInput===''){
                    catagory = 'now_playing'
                } else {
                    catagory = 'search'
                    searchInput = `&include_adult=false&query=${searchInput}`
                }
                break;
            default:
                dispatch({type: ERROR, payload: "unknown catagory"});
                break;
        }
        if (catagory === 'search'){
            //This section of code was done to get around a CORS issue, still research why axios will not work in this situation
            var data = "{}";
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    let res = JSON.parse(this.responseText)
                    dispatch({type: LIST_RECIEVED, payload: res})
                }
            });

            xhr.open("GET", `https://api.themoviedb.org/3/search/movie?&page=${pageNum}&language=en-US&api_key=${process.env.REACT_APP_MOVIE_DB_KEY}${searchInput}`);

            xhr.send(data);

        } else {
            axios.get(`https://api.themoviedb.org/3/movie/${catagory}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${pageNum}`).then(res => {
                dispatch({type: LIST_RECIEVED, payload: res.data})
            }).catch(error => {
                console.log(error)
                dispatch({type: ERROR, payload: error})
            })
        }
        
    }
}

export const selectMovie = (movieId) => {
    return function(dispatch){
        dispatch({type: SELECT_MOVIE, payload: movieId})
    }
}

export const getMovieDetails = (movieId) => {
    return function(dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`).then(res => {
            dispatch({type: MOVIE_DETAILS, payload: res})
            // console.log(res)
        }).catch(error => {
            dispatch({type: ERROR, payload: error})
            console.log(error)
        })
    }
}

export const clearMovieDetails = () => {
    return function(dispatch){
        dispatch({type: CLEAR_DETAILS})
    }
}

export const requireUpdate = () => {
    return function(dispatch){
        dispatch({type: REQUIRE_UPDATE})
    }
}