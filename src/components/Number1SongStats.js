import React from 'react';
import "../style/Number1SongStats.css"

const Number1SongStats = () => {
    return (
        <div className="card mb-4">
            {/* this displayes the stats of the Number1 song  */}
            <a href="/stats">Stats</a>
            {/* displays Rank of the Song */}
            <h3 className='Rank'>6</h3>
            {/* Basically News related to the song or the artist */}
            <a href="/news">News</a>
            {/* Display number weeks the song has been on Number 1  */}
            <h2>11</h2>
            <small>Weeks on number 1</small>
            {/* share the song on all social media platforms  display social links*/}
            <a href="/social">Social</a>
        </div>
    );
};

export default Number1SongStats;
