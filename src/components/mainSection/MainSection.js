

import {Route, Routes} from "react-router-dom";

import {HomePage, MovieDetailsPage, MoviePage} from "../../pages";

import '../../styles/movieCardStyles.css';

function MainSection() {


    return (
        <div className={'main_section'}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/movies/:category'} element={<MoviePage/>}/>
                <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
            </Routes>
        </div>
    );

}

export {MainSection};