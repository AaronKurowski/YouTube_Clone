import React, {useState}  from 'react';
import yt_logo_rgb_light from '../Images/yt_logo_rgb_light.png';
import './searchBar.css';


const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();

        // need to fill out rest of logic here to handle searchterm
    }


    return(
        <div className="mx auto">
            <div className="row">
                <div className="col-sm-2 logo-div">
                    <img className="yt-logo" src={yt_logo_rgb_light} alt="yt-logo"></img>
                </div>
                <div className="col-sm-8">
                    <div className="searchBarDiv">
                        <form onSubmit={handleSubmit}>
                            <input className="search-input" type="text"></input>
                            <button className="search-button" type="submit" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}>Search</button>
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