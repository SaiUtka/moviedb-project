import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {InCinemaNow, MovieCard, Pagination} from "../components";
import {getHomePageMovies, getSearchMovies} from "../redux";


function HomePage() {

    const dispatch = useDispatch();

    const page = useSelector(state => state.toolsReducer.page.toString());

    const value = useSelector(state => state.toolsReducer.value);

    let homePageMovies = useSelector(state => state.homePageReducer.movies.results);

    const searchMovies = useSelector(state => state.searchMovieReducer.movies.results);

    const isLoading = useSelector(state => state.homePageReducer.isLoading)

    useEffect(() => {
        dispatch(getHomePageMovies({page}));
    }, [page, dispatch]);

    useEffect(() => {
        dispatch(getSearchMovies({value, page}));
    }, [dispatch, page, value]);

    return (
        <div>
            <div className={'movie_card_wrapper'}>
                {
                    isLoading ? <h1>Loading...</h1> :
                    value ? searchMovies && searchMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                        : homePageMovies && homePageMovies.map(movie => <InCinemaNow key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination/>
        </div>
    );

}

export {HomePage};