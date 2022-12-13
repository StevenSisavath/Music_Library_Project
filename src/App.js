import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicTable from "./Components/MusicTable/MusicTable";

function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetchSongs();
  }, []);
  
  const fetchSongs = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/songs/")
    console.log(response.data)
    setSongs(response.data)
  }


  return (
    <div>
      <MusicTable parentSongs={songs}/>
    </div>
  );
}

export default App;
