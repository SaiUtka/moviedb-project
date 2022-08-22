import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getMovieDetails, getTrailer} from "../services";
import {MovieDetails, MovieCard, Pagination} from "../components";
import {getSearchMovies} from "../redux";

import '../styles/movieCardStyles.css'


function MovieDetailsPage() {

    const {id} = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovieDetails(id).then(value => setMovie(value));
    }, [id]);

    const dispatch = useDispatch();

    const page = useSelector(state => state.toolsReducer.page.toString());

    const value = useSelector(state => state.toolsReducer.value);

    const searchMovies = useSelector(state => state.searchMovieReducer.movies.results);

    const [videos, setVideos] = useState([]);

    const videoKeys = [];

    useEffect(() => {
        getTrailer(id).then(value => setVideos(value.results));
    }, [id]);

    videos.map(video => {
        if (video.site === 'YouTube') {
            videoKeys.push(video.key);
        }
    });

    useEffect(() => {
        dispatch(getSearchMovies({value, page}))
    }, [dispatch, page, value])


    return (
        <div className={'movie_card_wrapper'}>
            {
                useSelector(state => state.toolsReducer.value) ?
                    searchMovies && searchMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                    : <MovieDetails key={movie.id} movie={movie} videoKey={videoKeys[0]}/>
            }
            {
                useSelector(state => state.toolsReducer.value) ? <Pagination/> : ''
            }
        </div>
    );
}

export {MovieDetailsPage};