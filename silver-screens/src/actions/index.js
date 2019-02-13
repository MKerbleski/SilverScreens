import axios from 'axios'

export const ERROR = 'ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LIST_RECIEVED = 'LIST_RECIEVED';
export const LIST_RECIEVED_2 = 'LIST_RECIEVED_2';
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
        dispatch(fetchList(catagory, 1))
    }
}

export const fetchList = (catagory, pageNum=1, searchInput=null) => {
    console.log(searchInput)
    return function(dispatch){
        dispatch({type: LIST_REQUESTED})
        switch(catagory){
            case 'Now Playing':
                catagory = 'now_playing'
                break;
            case 'Popular':
                catagory = 'popular'
                break;
            case 'Top Rated':
                catagory = 'top_rated'
                break;
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
        let url;
        if (catagory === 'search'){
            // url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${pageNum}${searchInput}`
            // let config = {
            //     headers: {
            //         'withCredentials': false,
            //     }
            //   }
            // axios.get(url, config).then(res => {
            //     dispatch({type: LIST_RECIEVED, payload: res})
            // }).catch(error => {
            //     // console.log(error)
            //     dispatch({type: ERROR, payload: error})
            // })
            
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
            url = `https://api.themoviedb.org/3/movie/${catagory}?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${pageNum}`
            axios.get(url).then(res => {
                dispatch({type: LIST_RECIEVED, payload: res.data})
            }).catch(error => {
                console.log(error)
                dispatch({type: ERROR, payload: error})
            })
        }
        
    }
}

export const searchMovies = (searchInput, pageNum=1) => {
    return function(dispatch){
        dispatch({type: LIST_REQUESTED})
        axios.get(`https://api.themoviedb.org/3/search/movie?${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US&page=${pageNum}&include_adult=false&query=${searchInput}`)
    }
}