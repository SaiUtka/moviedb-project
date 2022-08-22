// const getHome = (page) => {
//     return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=266157219c2ca2bbd4c696ade208eded&page=${page}`)
//         .then(response => response.json());
// }
//
// export {getHome};

const getHome = (page) => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=266157219c2ca2bbd4c696ade208eded&page=${page}`)
        .then(response => response.json())
}

export {getHome};