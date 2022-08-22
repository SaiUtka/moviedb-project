import {useDispatch, useSelector} from "react-redux";

import {next, prev} from "../../redux";

import '../../styles/paginationStyles.css';


function Pagination() {

    const dispatch = useDispatch();

    const page = useSelector(state => state.toolsReducer.page.toString());

    const categoryMovieQty = useSelector(state => state.movieReducer.movies.total_pages);

    const searchMovieQty = useSelector(state => state.searchMovieReducer.movies.total_pages);

    const nextPage = () => dispatch(next());

    const prevPage = () => dispatch(prev());

    let pageQty;

    useSelector(state => state.toolsReducer.value) ? pageQty = searchMovieQty : pageQty = categoryMovieQty;

    return (
        <div className={'pagination_btn'}>
            <button disabled={+page <= 1} onClick={prevPage}>&#8592;</button>
            <button disabled={+page >= pageQty} onClick={nextPage}>&#8594;</button>
        </div>
    );

}

export {Pagination};