const getSearch = (value, page) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?&api_key=266157219c2ca2bbd4c696ade208eded&query=${value}&page=${page}`);
}

export {getSearch};