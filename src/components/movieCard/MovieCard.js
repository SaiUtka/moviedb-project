import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {deleteValue} from "../../redux";
import {baseImgURL} from "../../constants";

import '../../styles/movieCardStyles.css';


function MovieCard({movie}) {

    const dispatch = useDispatch();

    const setRate = (rate) => {
        if (rate >= 8) {
            return 'green';
        } else if (rate >= 5) {
            return 'orange';
        } else if (rate > 0) {
            return 'red';
        }
    };

    return (

        <div onClick={() => dispatch(deleteValue())} className={'card'}>
            <Link to={`/movie/${movie.id}`} className={'card_link'}>
                <div className="movie_card">
                    <img src={baseImgURL + movie.poster_path} alt={movie.title}/>
                    <div className='movie_card_desc'>
                        <h4>{movie.original_title}</h4>
                        <span className={`tag ${setRate(movie.vote_average)}`}>{movie.vote_average}</span>
                    </div>

                </div>
            </Link>
        </div>

    );

}

export {MovieCard};