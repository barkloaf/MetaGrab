<p align="center">
  <a href="https://spotgrab.barkloaf.com">
    <img src="https://spotgrab.barkloaf.com/logo.png" width="300" height="300" />
  </a>
</p>

# <p align="center">SpotGrab</p>
<p align="center">A webapp that grabs Spotify's metadata for any track you'd like!</p>
<p align="center"><img src="https://img.shields.io/website?down_color=lightgrey&down_message=offline&style=flat-square&up_color=%2318d860&up_message=online&url=https%3A%2F%2Fspotgrab.barkloaf.com" /></p>

## What is this?
This is a small little webapp that grabs Spotify's metadata about any track on its platform. Metadata is data about other data. Track metadata can include artists, what album the track appeared on, and the qualitative feel of the track. If you are ever curious about what Spotify thinks of a particular track and about what it uses to feed its recommendation algorithms, this is for you!

## How do I use this?
To use [this webapp](https://spotgrab.barkloaf.com), you simply have to type in the name and/or artist of the song that you wish to look up in the search bar, and click on it in the search results! If you are confused about any terms that are used on this site, try mousing over the term for a tooltip explaining what it is.

## How accurate is this?
Spotify's metadata generally does accurately tell you track information. However, because their systems to derive this information are probably based around algorithms and machine, there are innaccuracies.
  * Personally, I've been able to find tracks where the tempo is completely innaccurate
  * I've found tracks where the valence (happiness) score were very low for very happy songs
  * I've seen tracks that have a different overall genre than anything seen in the sections
  * etc.
  
Not to mention, the metadata that Spotify _does_ return is not the most ideal.
  * Genre is not stored under tracks nor albums, only artists, which is ridiculous because many artists are very diverse in their music, and treating all of their songs as the same set of genres is ridiculous (this is why you don't see genre on here!)
  * Time signature is only given as _one_ integer. Based off the docs, I've simply made an assumption I know to be incorrect and just put all of the numbers over 4
  * Spotify is unclear as to what data is provided by the artist/distributor and what data is inferred via their automated systems.
  
## How does this work?
The backend is my own API written in Go. It queries the Spotify API and serves modified JSON of the results it gets. My API is available under the APGL v3.0 on my [GitHub repo](https://github.com/barkloaf/SpotGrabAPI). This frontend is written sloppily with [ReactJS](https://reactjs.org) (frontend sucks.), using some elements from [Bootstrap](https://getbootstrap.com) and [other projects](https://github.com/barkloaf/SpotGrab/network/dependencies).
