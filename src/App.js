import './App.css';
import './APIKEY.js';
import SearchBar from './components/SearchBar/searchBar.jsx';

function App() {
  return (
    <div className="container-fluid">
      <SearchBar />
      {/* <h1>Welcome to our Youtube Clone!</h1> */}
      {/* <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/-w-58hQ9dLk?autoplay=1&origin=http://example.com"frameborder="0"></iframe>   */}
    </div>
  );
}

export default App;