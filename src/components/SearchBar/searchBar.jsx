import React, {useState}  from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './searchBar.css';


const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(searchTerm)
        setSearchTerm("")
    }

    return(
<<<<<<< HEAD
        <div className="header">
=======
        <div className="mx auto">
            <div className="row">
                <div className="col-sm-2 logo-div">
                    <a href="#">
                        <img className="yt-logo" src={yt_logo_rgb_light} alt="yt-logo"></img>
                    </a>
                </div>
                <div className="col-sm-8">
                    <div className="searchBarDiv">
                        <form onSubmit={(searchTerm) => handleSubmit(searchTerm)}>
                            <input className="search-input" type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}></input>
                            <button className="search-button" type="submit">Search</button>
                        </form>
                    </div>
                </div>
>>>>>>> d33181b0e967f2aadd50ad7dafd47c21449f81b5

            <div className="header-left">
                <MenuIcon />
                <img className="yt-header-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="yt-logo"></img>
            </div>

            <div className="header-input">
                <input placeholder="Search" type="text" />
                <button className="srch-btn"><SearchIcon className="header-search-btn"/></button>
            </div>

            <div className="header-right">
                <VideoCallIcon className="header-icon"/>
                <AppsIcon className="header-icon"/>
                <NotificationsIcon className="header-icon"/>
                <Avatar alt="avatar" src="https://iconape.com/wp-content/files/gf/155577/svg/155577.svg"/>
            </div>

        </div>
    );
}

export default Search;