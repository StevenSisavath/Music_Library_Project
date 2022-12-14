import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import CreateNewSong from "./Components/CreateNewSong/CreateNewSong";
import SearchBar from "./Components/SearchBar/SearchBar";
import NavBar from "./Components/NavigationBar/NavigationBar";

function App() {
  const [songs, setSongs] = useState([]);
  

  useEffect(() => {
    fetchSongs();
  }, []);
  
  const fetchSongs = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/songs/")
    console.log(response.data)
    setSongs(response.data)
  };

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await fetchSongs();
    }
  };

  function search(searchTerm){
    console.log(songs.filter(song => song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.release_date.includes(searchTerm) || song.genre.includes(searchTerm)))
    const filtered = (songs.filter(song => song.title.toLowerCase().includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.release_date.includes(searchTerm) || song.genre.includes(searchTerm)))
    setSongs(filtered)
  };

  return (
    <div>
      <NavBar/>
      <MusicTable parentSongs = {songs}/>
      <CreateNewSong addNewSongProperty = {addNewSong}/>
      <SearchBar search={search}/>
    </div>
  );
}

export default App;
