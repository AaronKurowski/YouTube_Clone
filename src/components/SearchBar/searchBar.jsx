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
        <div className="header">
<<<<<<< HEAD

=======
>>>>>>> f17de61d377a5ae1d90f75c0579ce1bfd48c7f1f
            <div className="header-left">
                <MenuIcon />
                <img className="yt-header-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="yt-logo"></img>
            </div>

            <div className="header-input">
                <form>
                    <input className="" placeholder="Search" type="text" />
                    <button className="srch-btn"><SearchIcon className="header-search-btn"/></button>
                </form>
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