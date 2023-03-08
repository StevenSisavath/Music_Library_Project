import './MusicTable.css'

const MusicTable = (props) => {

    return ( 
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release datee</th>
                    <th>genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((song, index) => {
                    return (
                    <tr key={song.id}>
                        <td>{index+1}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
 
export default MusicTable;