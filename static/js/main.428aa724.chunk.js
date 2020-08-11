(this.webpackJsonpspotgrab=this.webpackJsonpspotgrab||[]).push([[0],{55:function(e,t,a){e.exports=a(81)},60:function(e,t,a){},76:function(e){e.exports=JSON.parse('{"apiURL":"http://localhost:6969"}')},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),c=(a(60),a(10)),o=a(11),u=a(15),i=a(14),m=a(38),h=a.n(m),d=a(45),E=a(46),p=a.n(E),b=a(47),f=a.n(b),g=a(48),v=a.n(g),y=a(91),k=a(86),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a,{key:this.props.pos||"top",placement:this.props.pos||"top",overlay:r.a.createElement(k.a,null,this.props.text)},r.a.createElement("span",null,this.props.children))}}]),a}(r.a.Component),x=a(87),S=a(93),T=a(88),A=a(52),I=a(89),N=function(e){switch(e){case 0:return"C";case 1:return"C\u266f/D\u266d";case 2:return"D";case 3:return"D\u266f/E\u266d";case 4:return"E";case 5:return"F";case 6:return"F\u266f/G\u266d";case 7:return"G";case 8:return"G\u266f/A\u266d";case 9:return"A";case 10:return"A\u266f/B\u266d";case 11:return"B";default:return"None"}},M=function(e){switch(e){case 0:return"Minor";case 1:return"Major";default:return"None"}},F="This number represents how confident Spotify is in the calculation.",j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.json;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(S.a,{bg:"dark",text:"white",style:{width:"18rem"}},r.a.createElement("div",{class:"embed-responsive embed-responsive-4by3"},r.a.createElement("iframe",{class:"embed-responsive-item",src:"https://open.spotify.com/embed/track/"+e.Info.id,allow:"encrypted-media",allowTransparency:"true",frameBorder:"-10",title:"Track Preview"})),r.a.createElement(S.a.Header,null,r.a.createElement("b",null,"Album Info:")),r.a.createElement(T.a,{className:"list-group-flush",variant:"dark"},r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The name of the album."},"Name:"),r.a.createElement("br",null),r.a.createElement("b",null,e.Album.name)),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The record label for the album."},"Label:"),r.a.createElement("br",null),r.a.createElement("b",null,e.Album.label)),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The date the album was first released."},"Date:"),r.a.createElement("br",null),r.a.createElement("b",null,e.Album.release_date))),r.a.createElement(S.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.Album.uri))),r.a.createElement(S.a,{bg:"dark",text:"white",style:{width:"18rem"}},r.a.createElement(S.a.Header,null,r.a.createElement("b",null,"Track Info:")),r.a.createElement(T.a,{className:"list-group-flush",variant:"dark"},r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The name of the track."},"Name:"),r.a.createElement("br",null),r.a.createElement("b",null,e.Info.name)),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The artists who performed the track."},"Artists:"),r.a.createElement("br",null),r.a.createElement("b",null,function(e){var t="";return e.forEach((function(e){t=t+e.name+", "})),t.slice(0,-2)}(e.Info.artists))),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The track length."},"Duration:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.floor(e.Features.duration_ms/1e3/60)+" min "+Math.floor(e.Features.duration_ms/1e3)%60+" sec")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Whether or not the track has explicit lyrics."},"Explicit:"),r.a.createElement("br",null),r.a.createElement("b",null,function(e){switch(e){case!0:return"Yes";default:return"No"}}(e.Info.explicit))),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The popularity of the track. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are."},"Popularity:"),r.a.createElement("br",null),r.a.createElement("b",null,e.Info.popularity,"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"The number of the track. If an album has several discs, the track number is the number on the specified disc."},"Track # on album"),r.a.createElement("br",null),"#",r.a.createElement("b",null,e.Info.track_number))),r.a.createElement(S.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.Info.uri))),r.a.createElement(S.a,{bg:"dark",text:"white",style:{width:"18rem"}},r.a.createElement(S.a.Header,null,r.a.createElement("b",null,"Track Features:")),r.a.createElement(T.a,{className:"list-group-flush",variant:"dark"},r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Acousticness is a measure of whether the track is acoustic."},"Acousticness:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.acousticness),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity."},"Danceability:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.danceability),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Energy is a measure that represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."},"Energy:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.energy),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Instrumentalness predicts whether a track contains no vocals. \u201cOoh\u201d and \u201caah\u201d sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \u201cvocal\u201d."},"Instrumentalness:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.instrumentalness),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Liveness detects the presence of an audience in the recording."},"Liveness:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.liveness),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry)."},"Speechiness:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.speechiness),"%")),r.a.createElement(A.a,{variant:"dark"},r.a.createElement(w,{text:"Valence is a measure describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."},"Valence:"),r.a.createElement("br",null),r.a.createElement("b",null,Math.round(100*e.Features.valence),"%"))))),r.a.createElement(I.a,{responsive:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"Sections are defined by large variations in rhythm or timbre (e.g. chorus, verse, bridge, guitar solo, etc)."},"Section")))),r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"The estimated overall key of the section."},"Key")))),r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"Indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived."},"Mode")))),r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"The overall estimated tempo (speed or pace of a given piece) of the section. This derives directly from the average beat duration."},"Tempo")))),r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"An estimated overall time signature of a track. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure)."},"Time Signature")))),r.a.createElement("th",null,r.a.createElement("u",null,r.a.createElement("b",null,r.a.createElement(w,{text:"The overall loudness of the section."},"Loudness")))))),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Overall")),r.a.createElement("td",null,r.a.createElement("b",null,N(e.Features.key))),r.a.createElement("td",null,r.a.createElement("b",null,M(e.Features.mode))),r.a.createElement("td",null,r.a.createElement("b",null,Math.round(e.Features.tempo)," bpm")),r.a.createElement("td",null,r.a.createElement("b",null,e.Features.time_signature,"/4")),r.a.createElement("td",null,r.a.createElement("b",null,Math.round(e.Features.loudness)," dB")))),r.a.createElement("tbody",null,function(e){var t=[];return e.forEach((function(e,a){return t.push(r.a.createElement("tr",null,r.a.createElement("td",null,"Section ",a," (",Math.round(Math.floor(e.start/60))+" min "+Math.round(e.start%60)+" sec"," - ",Math.round(Math.floor((e.start+e.duration)/60))+" min "+Math.round((e.start+e.duration)%60)+" sec",") ",r.a.createElement(w,{text:F},r.a.createElement("small",{className:"text-muted"},Math.round(100*e.confidence),"%"))),r.a.createElement("td",null,N(e.key)," ",r.a.createElement(w,{text:F},r.a.createElement("small",{className:"text-muted"},Math.round(100*e.key_confidence),"%"))),r.a.createElement("td",null,M(e.mode)," ",r.a.createElement(w,{text:F},r.a.createElement("small",{className:"text-muted"},Math.round(100*e.mode_confidence),"%"))),r.a.createElement("td",null,Math.round(e.tempo)," bpm ",r.a.createElement(w,{text:F},r.a.createElement("small",{className:"text-muted"},Math.round(100*e.tempo_confidence),"%"))),r.a.createElement("td",null,e.time_signature,"/4 ",r.a.createElement(w,{text:F},r.a.createElement("small",{className:"text-muted"},Math.round(100*e.time_signature_confidence),"%"))),r.a.createElement("td",null,Math.round(e.loudness)," dB")))})),t}(e.Analysis.sections))))}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:"/logo.png",width:"200",className:"App-logo",alt:"Logo"}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"SpotGrab"),r.a.createElement("h2",null,"Grabs Spotify's metadata for any track you'd like!")),r.a.createElement("div",{style:{textAlign:"left"},className:"about-text"},r.a.createElement("span",null,r.a.createElement("u",null,r.a.createElement("h3",null,"What is this?")),r.a.createElement("p",null,"This is a small little webapp that grabs Spotify's metadata about any track on its platform. Metadata is data about other data. Track metadata can include artists, what album the track appeared on, and the qualitative feel of the track. If you are ever curious about what Spotify thinks of a particular track and about what it uses to feed its recommendation algorithms, this is for you!")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("u",null,r.a.createElement("h3",null,"How do I use this?")),r.a.createElement("p",null,"To use this webapp, you simply have to type in the name and/or artist of the song that you wish to look up in the search bar, and click on it in the search results! If you are confused about any terms that are used on this site, try mousing over the term for a tooltip explaining what it is.")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("u",null,r.a.createElement("h3",null,"How accurate is this?")),r.a.createElement("p",null,"Spotify's metadata generally does accurately tell you track information. However, because their systems to derive this information are probably based around algorithms and machine, there are innaccuracies."),r.a.createElement("ul",null,r.a.createElement("li",null,"Personally, I've been able to find tracks where the tempo is completely innaccurate"),r.a.createElement("li",null,"I've found tracks where the valence (happiness) score were very low for very happy songs"),r.a.createElement("li",null,"I've seen tracks that have a different overall genre than anything seen in the sections"),r.a.createElement("li",null,"etc.")),r.a.createElement("p",null,"Not to mention, the metadata that Spotify ",r.a.createElement("i",null,"does")," return is not the most ideal."),r.a.createElement("ul",null,r.a.createElement("li",null,"Genre is not stored under tracks nor albums, only artists, which is ridiculous because many artists are very diverse in their music, and treating all of their songs as the same set of genres is ridiculous (this is why you don't see genre on here!)"),r.a.createElement("li",null,"Time signature is only given as ",r.a.createElement("i",null,"one")," integer. Based off the docs, I've simply made an assumption I know to be incorrect and just put all of the numbers over 4"),r.a.createElement("li",null,"Spotify is unclear as to what data is provided by the artist/distributor and what data is inferred via their automated systems."))),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("u",null,r.a.createElement("h3",null,"How does this work?")),r.a.createElement("p",null,"The backend is my own API written in Go, queries the Spotify API, and serves modified JSON of the results it gets. My API is available under the APGL v3.0 on my ",r.a.createElement("a",{href:"https://github.com/barkloaf/SpotGrabAPI",style:{color:"#85BBFD"}},"GitHub repo"),". The frontend is written sloppily with ",r.a.createElement("a",{href:"https://reactjs.org/",style:{color:"#85BBFD"}},"ReactJS")," (frontend ",r.a.createElement("b",null,"sucks."),"), using some elements from ",r.a.createElement("a",{href:"https://getbootstrap.com/",style:{color:"#85BBFD"}},"Bootstrap")," and other projects. All the source code for this site is available under the GPL v3.0 on my ",r.a.createElement("a",{href:"https://github.com/barkloaf/SpotGrab",style:{color:"#85BBFD"}},"GitHub repo"),"!")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("h3",null,"-barkloaf :3"))))}}]),a}(r.a.Component),L=a(92),B=a(94),C=a(90),R=a(95),G=a(76),D=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(new URL("/search?"+encodeURIComponent(t),G.apiURL)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e,t){var a=t.query,n="".concat(e.artists[0].name," - ").concat(e.name),l=f()(n,a),s=v()(n,l);return r.a.createElement("span",{className:"suggestion-content"},r.a.createElement("img",{src:e.album.images[0].url,width:"100",alt:"Album Art"}),r.a.createElement("span",{className:"name"},s.map((function(e,t){var a=e.highlight?"highlight":null;return r.a.createElement("span",{className:a,key:t},e.text)}))))},H=function(e){return e.name},P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e,t){var a=t.newValue;n.setState({value:String(a)})},n.onSuggestionsFetchRequested=function(e){var t=e.value;D(t).then((function(e){return n.setState({suggestions:e.tracks.items,sIsLoaded:!0})}))},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[],sIsLoaded:!1})},n.onSuggestionSelected=function(e,t){var a=t.suggestion;t.suggestionValue,t.suggestionIndex,t.sectionIndex,t.method;n.setState({isLoaded:!1,about:!1,value:""}),fetch(new URL("/track?id="+a.id,G.apiURL)).then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,result:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.aboutButton=function(){n.setState((function(e){return{about:!e.about}}))},n.state={items:[],result:{},value:"",suggestions:[],error:null,isLoaded:!1,about:!0},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.result,l=e.value,s=e.suggestions,c=e.about,o={placeholder:"Search Spotify...",value:l,onChange:this.onChange},u=r.a.createElement("header",{className:"App-header"},r.a.createElement(L.a,{bg:"0f0f0f",variant:"dark"},r.a.createElement(p.a,{suggestions:s,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:H,renderSuggestion:_,inputProps:o,onSuggestionSelected:this.onSuggestionSelected}),r.a.createElement(B.a,{className:"mr-auto"}),r.a.createElement(w,{text:"About / Help",pos:"bottom"},r.a.createElement(C.a,{toggle:!0,className:"mb-2"},r.a.createElement(R.a,{type:"checkbox",variant:"secondary",checked:c,value:"1",onChange:this.aboutButton,size:"lg"},"?")))));return r.a.createElement("div",{className:"App"},u,r.a.createElement("body",{className:"App-body"},t?r.a.createElement("span",{className:"about-text"},"Error: ",t.message):c?r.a.createElement(O,null):a?r.a.createElement(j,{json:n}):r.a.createElement("div",null)))}}]),a}(r.a.Component),q=(a(79),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"Loading..."))}),U=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(q,null)},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.428aa724.chunk.js.map