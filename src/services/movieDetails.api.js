const getMovieDetails = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=266157219c2ca2bbd4c696ade208eded&language=en-US`)
        .then(response => response.json());
}

export {getMovieDetails};