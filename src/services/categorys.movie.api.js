const getCategoryMovies = (page, category) => {
    return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=266157219c2ca2bbd4c696ade208eded&page=${page}`)
}

export {getCategoryMovies};