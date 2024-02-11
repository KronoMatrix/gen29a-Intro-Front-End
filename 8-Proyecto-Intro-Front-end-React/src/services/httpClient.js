const API = 'https://api.themoviedb.org/3/movie/11?api_key=API_KEY'

export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:
            'Bearer ACCESS_TOKEN'
        }
    })
}