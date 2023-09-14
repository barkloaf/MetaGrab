import React from "react"
import Tooltipper from "./Tooltipper"
import {
    Card,
    CardGroup,
    ListGroup,
    ListGroupItem,
    Table
} from "react-bootstrap"

const key = (int) => {
    switch(int) {
      case 0: return "C";
      case 1: return "C♯/D♭";
      case 2: return "D";
      case 3: return "D♯/E♭";
      case 4: return "E";
      case 5: return "F";
      case 6: return "F♯/G♭";
      case 7: return "G";
      case 8: return "G♯/A♭";
      case 9: return "A";
      case 10: return "A♯/B♭";
      case 11: return "B";
      default: return "None";
    }
  }
  
const mode = (int) => {
    switch(int) {
        case 0: return "Minor";
        case 1: return "Major";
        default: return "None";
    }
}

const commaSep = (arr) => {
    var string = ""

    arr.forEach(element => {
        string = string + (element.name || element) + ", ";
    });

    return string.slice(0, -2);
}

const explicit = (expl) => {
    switch(expl) {
    case true:
        return "Yes";
    default:
        return "No";
    }
}

const confMessage = "This number represents how confident Spotify is in the calculation."

const sections = (sects) => {
    const arr = [];

    sects.forEach((section, index) => arr.push(
        <tr>
            <td>Section {index} ({Math.round(Math.floor(section.start / 60)) + " min " + Math.round((section.start % 60)) + " sec"} - {Math.round(Math.floor((section.start + section.duration) / 60)) + " min " + Math.round((section.start + section.duration) % 60) + " sec"}) <Tooltipper text={confMessage}><small className="text-muted">{Math.round(section.confidence * 100)}%</small></Tooltipper></td>
            <td>{key(section.key)} <Tooltipper text={confMessage}><small className="text-muted">{Math.round(section.key_confidence * 100)}%</small></Tooltipper></td>
            <td>{mode(section.mode)} <Tooltipper text={confMessage}><small className="text-muted">{Math.round(section.mode_confidence * 100)}%</small></Tooltipper></td>
            <td>{Math.round(section.tempo)} bpm <Tooltipper text={confMessage}><small className="text-muted">{Math.round(section.tempo_confidence * 100)}%</small></Tooltipper></td>
            <td>{section.time_signature}/4 <Tooltipper text={confMessage}><small className="text-muted">{Math.round(section.time_signature_confidence * 100)}%</small></Tooltipper></td>
            <td>{Math.round(section.loudness)} dB</td>
        </tr>
    ))

    return arr
}

class Results extends React.Component {
    componentDidMount() {
        window.history.pushState(null, '', "/" + this.props.json.Info.id)
    }
    
    render() {
        const result = this.props.json

        return (
            <>
                <CardGroup>
                    <Card
                        bg="dark"
                        text="white"
                        style={{
                            width: '100%'
                        }}
                    >
                    <div className="embed-responsive embed-responsive-4by3"><iframe className="embed-responsive-item" src={"https://open.spotify.com/embed/track/" + result.Info.id} allow="encrypted-media" allowTransparency="true" frameBorder="-10" title="Track Preview" /></div>
                    <Card.Header><b>Album Info:</b></Card.Header>

                    <ListGroup className="list-group-flush" variant="dark">
                        <ListGroupItem variant="dark"><Tooltipper text="The name of the album.">Name:</Tooltipper><br /><b>{result.Album.name}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text={"The type of the album: one of \"album\", \"single\", or \"compilation\"."}>Type:</Tooltipper><br /><b>{result.Album.album_type}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The record label for the album.">Label:</Tooltipper><br /><b>{result.Album.label}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The date the album was first released.">Date:</Tooltipper><br /><b>{result.Album.release_date}</b></ListGroupItem>
                    </ListGroup>

                    <Card.Footer>
                        <small><a href={new URL(result.Album.id, "https://open.spotify.com/album/")} className="text-muted">{result.Album.uri}</a></small>
                    </Card.Footer>
                    </Card>


                    <Card
                        bg="dark"
                        text="white"
                        style={{
                            width: '100%'
                        }}
                    >
                    <Card.Header><b>Track Info:</b></Card.Header>

                    <ListGroup className="list-group-flush" variant="dark">
                        <ListGroupItem variant="dark"><Tooltipper text="The name of the track.">Name:</Tooltipper><br /><b>{result.Info.name}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The artists who performed the track.">Artists:</Tooltipper><br /><b>{commaSep(result.Info.artists)}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The track length.">Duration:</Tooltipper><br /><b>{Math.floor((result.Features.duration_ms / 1000) / 60) + " min " + (Math.floor(result.Features.duration_ms / 1000) % 60) + " sec"}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Whether or not the track has explicit lyrics.">Explicit:</Tooltipper><br /><b>{explicit(result.Info.explicit)}</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The popularity of the track. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.">Popularity:</Tooltipper><br /><b>{result.Info.popularity}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="A list of the countries in which the track can be played, identified by their ISO 3166-1 alpha-2 code.">Available Markets:</Tooltipper><br /><Tooltipper text={commaSep(result.Info.available_markets)} pos="right"><b><u>{result.Info.available_markets.length}</u> countries</b></Tooltipper></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="The number of the track. If an album has several discs, the track number is the number on the specified disc.">Track # on album:</Tooltipper><br />#<b>{result.Info.track_number}</b></ListGroupItem>
                    </ListGroup>

                    <Card.Footer>
                        <small><a href={new URL(result.Info.id, "https://open.spotify.com/track/")} className="text-muted">{result.Info.uri}</a></small>
                    </Card.Footer>
                    </Card>


                    <Card
                        bg="dark"
                        text="white"
                        style={{
                            width: '100%'
                        }}
                    >
                    <Card.Header><b>Track Features:</b></Card.Header>

                    <ListGroup className="list-group-flush" variant="dark">
                        <ListGroupItem variant="dark"><Tooltipper text="Acousticness is a measure of whether the track is acoustic.">Acousticness:</Tooltipper><br /><b>{Math.round(result.Features.acousticness * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.">Danceability:</Tooltipper><br /><b>{Math.round(result.Features.danceability * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Energy is a measure that represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.">Energy:</Tooltipper><br /><b>{Math.round(result.Features.energy * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Instrumentalness predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”.">Instrumentalness:</Tooltipper><br /><b>{Math.round(result.Features.instrumentalness * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Liveness detects the presence of an audience in the recording.">Liveness:</Tooltipper><br /><b>{Math.round(result.Features.liveness * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry).">Speechiness:</Tooltipper><br /><b>{Math.round(result.Features.speechiness * 100)}%</b></ListGroupItem>
                        <ListGroupItem variant="dark"><Tooltipper text="Valence is a measure describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).">Valence:</Tooltipper><br /><b>{Math.round(result.Features.valence * 100)}%</b></ListGroupItem>
                    </ListGroup>

                    </Card>
                </CardGroup>
                
                <Table responsive variant="dark">
                    <thead>
                        <tr>
                            <th><u><b><Tooltipper text="Sections are defined by large variations in rhythm or timbre (e.g. chorus, verse, bridge, guitar solo, etc).">Section</Tooltipper></b></u></th>
                            <th><u><b><Tooltipper text="The estimated overall key of the section.">Key</Tooltipper></b></u></th>
                            <th><u><b><Tooltipper text="Indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived.">Mode</Tooltipper></b></u></th>
                            <th><u><b><Tooltipper text="The overall estimated tempo (speed or pace of a given piece) of the section. This derives directly from the average beat duration.">Tempo</Tooltipper></b></u></th>
                            <th><u><b><Tooltipper text="An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure).">Time Signature</Tooltipper></b></u></th>
                            <th><u><b><Tooltipper text="The overall loudness of the section.">Loudness</Tooltipper></b></u></th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <td><b>Overall</b></td>
                            <td><b>{key(result.Features.key)}</b></td>
                            <td><b>{mode(result.Features.mode)}</b></td>
                            <td><b>{Math.round(result.Features.tempo)} bpm</b></td>
                            <td><b>{result.Features.time_signature}/4</b></td>
                            <td><b>{Math.round(result.Features.loudness)} dB</b></td>
                        </tr>
                    </thead>

                    <tbody>
                        {sections(result.Analysis.sections)}
                    </tbody>
                </Table>

                <div style={{ textAlign: "center" }}>
                    <small className="text-muted">All metadata is made available by <a href="https://spotify.com" className="text-muted">Spotify</a>.</small>
                </div>
            </>
        )
    }
}

export default Results