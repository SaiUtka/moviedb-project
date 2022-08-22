import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieCard, Pagination} from "../components";
import {getMovies, getSearchMovies} from "../redux";

import '../styles/movieCardStyles.css'


function MoviePage() {

    const dispatch = useDispatch();

    const {category} = useParams();

    const page = useSelector(state => state.toolsReducer.page.toString());

    const value = useSelector(state => state.toolsReducer.value);

    const movies = useSelector(state => state.movieReducer.movies.results);

    const searchMovies = useSelector(state => state.searchMovieReducer.movies.results);

    useEffect(() => {
        dispatch(getSearchMovies({value, page}));
    }, [dispatch, page, value]);

    useEffect(() => {
        dispatch(getMovies({page, category}));
    }, [page, dispatch, category]);

    return (
        <div>
            <div className={'movie_card_wrapper'}>
                {
                    useSelector(state => state.toolsReducer.value) ?
                        searchMovies && searchMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                        : movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
            {
                <Pagination/>
            }
        </div>
    );
}

export {MoviePage};