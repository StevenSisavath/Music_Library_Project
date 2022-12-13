import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";
import CreateNewSong from "./Components/CreateNewSong/CreateNewSong";

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

  return (
    <div>
      <MusicTable parentSongs = {songs}/>
      <CreateNewSong addNewSongProperty = {addNewSong}/>
    </div>
  );
}

export default App;
