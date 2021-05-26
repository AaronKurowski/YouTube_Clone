import React, {useState}  from 'react';
import yt_logo_rgb_light from '../Images/yt_logo_rgb_light.png';
import './searchBar.css';


const Search = (props) => {
    return(
        <div className="mx auto">
            <div className="row">
                <div className="col-sm-2 logo-div">
                    <a href="#">
                        <img className="yt-logo" src={yt_logo_rgb_light} alt="yt-logo"></img>
                    </a>
                </div>
                <div className="col-sm-8">
                    <div className="searchBarDiv">
                        <form onSubmit={(searchTerm) => props.handleSubmit(searchTerm)}>
                            <input className="search-input" type="text" value={props.searchTerm}></input>
                            <button className="search-button" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                <div className="col-sm-2">
                    <span>YT-Clone by AK&NJ</span>

                </div>
            </div>

        </div>
    );
}

export default Search;