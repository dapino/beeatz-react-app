import React, { Fragment } from 'react';
import Playlist from "../../components/Playlists";

const Search = () => (
    <Fragment>
        <div className="searchForm">
            <h1>Search</h1>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="searchResults">
            <h2>Results</h2>
            <Playlist/>
        </div>
    </Fragment>

);

export default Search;
