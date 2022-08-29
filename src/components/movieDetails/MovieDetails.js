import {useState} from "react";
import YouTube from "react-youtube";

import {baseImgURL} from "../../constants";

import '../../styles/movieDetailsStyles.css';


function MovieDetails({movie, videoKey}) {

    const [hidden, setHidden] = useState(false);

    const video = videoKey;

    hidden ? videoKey = video : videoKey = '';

    return (

        <div className={'movie_details_wrapper'}>


            <div className={hidden ? 'trailer_container' : 'trailer_container hidden'}>

                <div onClick={() => {
                    setHidden(false)
                }} className="background">

                </div>
                <div className="trailer">

                    {videoKey ? <YouTube videoId={videoKey}/> :
                        <div className={'trailer_error'}>Trailer is not available :/</div>}
                </div>
            </div>


            <div className="movie_details" /*onClick={() => setHidden(false)}*/>


               {/* <div className={hidden ? 'trailer_container' : 'trailer_container hidden'}>

                    <div onClick={() => {
                        setHidden(false)
                    }} className="background">

                    </div>
                    <div className="trailer">

                        {videoKey ? <YouTube videoId={videoKey}/> :
                            <div className={'trailer_error'}>Trailer is not available :/</div>}
                    </div>
                </div>*/}


                <div className="movie_details_img">
                    <img src={baseImgURL + movie.poster_path} alt={movie.original_title}/>
                    <div onClick={() => {
                        setHidden(true)
                    }} className="trailer_btn">Watch trailer
                    </div>
                </div>
                <div className="movie_description">

                    <div className={'movie_title'}>
                        <h2>{movie.original_title}</h2>
                    </div>

                    <div className={'movie_date'}>
                        <p>Date of release - {movie.release_date}</p>
                    </div>

                    <div className={'movie_time'}>
                        <p>Time: {movie.runtime}m</p>
                    </div>

                    <div className={'movie_overview'}>
                        <p>{movie.overview}</p>
                    </div>

                    <div className="genres_container">
                        {movie.genres && movie.genres.map((genre) => <span className="genres"
                                                                           key={genre.id}>{genre.name} </span>)}
                    </div>
                </div>

                {/* <div className={hidden ? 'trailer_container' : 'trailer_container hidden'}>

                <div onClick={() => {
                    setHidden(false)
                }} className="background">

                </div>
                <div className="trailer">

                    {videoKey ? <YouTube videoId={videoKey}/> :
                        <div className={'trailer_error'}>Trailer is not available :/</div>}
                </div>
            </div>*/}
            </div>
        </div>
    );

}

export {MovieDetails};