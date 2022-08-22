import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {newPage, searchValue} from "../../redux";

import '../../styles/headerStyles.css'

function Header() {

    const [searchKey, setSearchKey] = useState('');

    const dispatch = useDispatch();

    const firstPage = () => {
        dispatch(newPage());
        setSearchKey('');
    };

    const onChange = (e) => {
        setSearchKey(e.target.value);
        dispatch(newPage());
    };

    useEffect(() => {
        dispatch(searchValue(searchKey, firstPage));
    }, [dispatch, searchKey]);

    return (
        <div className="header">
            <div className="header_wrapper">
                <Link to={'/'}>
                    <div onClick={firstPage} className="header_logo">
                    </div>
                </Link>
                <div className="header_items">
                    <nav className="header_menu">
                        <ul className="header_list">

                            <li onClick={firstPage} className="header_list_item">
                                <Link className="header_list_link" to={'/movies/popular'}>Popular</Link>
                            </li>

                            <li onClick={firstPage} className="header_list_item">
                                <Link className="header_list_link" to={'/movies/top_rated'}>Top Rated</Link>
                            </li>

                            <li onClick={firstPage} className="header_list_item">
                                <Link className="header_list_link" to={'/movies/upcoming'}>Upcoming</Link>
                            </li>

                        </ul>
                    </nav>
                    <div className={'search_container'}>
                        <input type="search"
                               className="header_search"
                               placeholder="search..."
                               onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export {Header}