import React from "react"

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <img src={process.env.PUBLIC_URL + "/logo.png"} width="200" className="App-logo" alt="Logo" />

                <div style={{ textAlign: "center" }}>
                    <h1>SpotGrab</h1>
                    <h2>Grabs Spotify's metadata for any track you'd like!</h2>
                </div>

                <div style={{ textAlign: "left" }} className="about-text">
                    <span>
                        <u><h3>What is this?</h3></u>
                        <p>This is a small little webapp that grabs Spotify's metadata about any track on its platform. Metadata is data about other data. Track metadata can include artists, what album the track appeared on, and the qualitative feel of the track. If you are ever curious about what Spotify thinks of a particular track and about what it uses to feed its recommendation algorithms, this is for you!</p>
                    </span>
                    <br />
                    <span>
                        <u><h3>How do I use this?</h3></u>
                        <p>To use this webapp, you simply have to type in the name and/or artist of the song that you wish to look up in the search bar, and click on it in the search results! If you are confused about any terms that are used on this site, try mousing over the term for a tooltip explaining what it is.</p>
                    </span>
                    <br />
                    <span>
                        <u><h3>How accurate is this?</h3></u>
                        <p>Spotify's metadata generally does accurately tell you track information. However, because their systems to derive this information are probably based around algorithms and machine, there are innaccuracies.</p>
                        <ul>
                            <li>Personally, I've been able to find tracks where the tempo is completely innaccurate</li>
                            <li>I've found tracks where the valence (happiness) score were very low for very happy songs</li>
                            <li>I've seen tracks that have a different overall genre than anything seen in the sections</li> 
                            <li>etc.</li>
                        </ul>
                        <p>Not to mention, the metadata that Spotify <i>does</i> return is not the most ideal.</p>
                        <ul>
                            <li>Genre is not stored under tracks nor albums, only artists, which is ridiculous because many artists are very diverse in their music, and treating all of their songs as the same set of genres is ridiculous (this is why you don't see genre on here!)</li>
                            <li>Time signature is only given as <i>one</i> integer. Based off the docs, I've simply made an assumption I know to be incorrect and just put all of the numbers over 4</li>
                            <li>Spotify is unclear as to what data is provided by the artist/distributor and what data is inferred via their automated systems.</li>
                        </ul>
                    </span>
                    <br />
                    <span>
                        <u><h3>How does this work?</h3></u>
                        <p>The backend is my own API written in Go. It queries the Spotify API and serves modified JSON of the results it gets. My API is available under the APGL v3.0 on my <a href="https://github.com/barkloaf/SpotGrabAPI" style={{ color: "#85BBFD" }}>GitHub repo</a>. The frontend is written sloppily with <a href="https://reactjs.org/" style={{ color: "#85BBFD" }}>ReactJS</a> (frontend <b>sucks.</b>), using some elements from <a href="https://getbootstrap.com/" style={{ color: "#85BBFD" }}>Bootstrap</a> and other projects. All the source code for this site is available under the GPL v3.0 on my <a href="https://github.com/barkloaf/SpotGrab" style={{ color: "#85BBFD" }}>GitHub repo</a>!</p>
                    </span>
                    <br /><br />
                    <span>
                        <h3>-barkloaf :3</h3>
                    </span>
                </div>
            </div>
        )
    }
}

export default About