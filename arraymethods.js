

// arrays
const songs = ["Whole Wide World", "What Is Life", "Come and Get Your Love", "Sea of Love", "LOYALTY", "God Only Knows", "She's A Rainbow", "Blackbird", "All We Got", "Redbone"];
const artists = ["Cage The Elephant", "George Harrison", "Redbone", "Cat Power", "Kendrick Lamar", "The Beach Boys", "The Rolling Stones", "The Beatles", "Chance The Rapper", "Childish Gambino"];
const albums = ["Unpeeled", "All Things Must Pass", "Wovoka", "Moon Pix", "DAMN.", "Pet Sounds", "Their Satanic Majesties Request", "The Beatles", "Coloring Book", "Awaken, My Love!"];

// dom grabbing
const songID = document.getElementById("songID");
const artistID = document.getElementById("artistID");
const albumID = document.getElementById("albumID");

const songIDTwo = document.getElementById("songIDTwo");
const artistIDTwo = document.getElementById("artistIDTwo");
const albumIDTwo = document.getElementById("albumIDTwo");

const songDiv = document.getElementById("songs");
const artistDiv = document.getElementById("artists");
const albumDiv = document.getElementById("albums");

const songsR = document.getElementById("songsR");
const artistsR = document.getElementById("artistsR");
const albumsR = document.getElementById("albumsR");

const vDecendingAlphaSongs = document.getElementById("songsVDA");
const vDecendingAlphaArtists = document.getElementById("artistsVDA");
const vDecendingAlphaAlbums = document.getElementById("albumsVDA");

const vAscendingAlphaSongs = document.getElementById("songsVAA");
const vAscendingAlphaArtists = document.getElementById("artistsVAA");
const vAscendingAlphaAlbums = document.getElementById("albumsVAA");

const hDecendingAlphaSongs = document.getElementById("songsHDA");
const hDecendingAlphaArtists = document.getElementById("artistsHDA");
const hDecendingAlphaAlbums = document.getElementById("albumsHDA");

const hAscendingAlphaSongs = document.getElementById("songsHAA");
const hAscendingAlphaArtists = document.getElementById("artistsHAA");
const hAscendingAlphaAlbums = document.getElementById("albumsHAA");

const hsongDiv = document.getElementById("songDivH");
const hartistDiv = document.getElementById("artistDivH");
const halbumDiv = document.getElementById("albumDivH");

const hisongDiv = document.getElementById("songDivHI");
const hiartistDiv = document.getElementById("artistDivHI");
const hialbumDiv = document.getElementById("albumDivHI");

// functions
var newSong = function () {
    songs.push(songID.value);
    songs.push(songIDTwo.value);
    artists.unshift(artistID.value);
    artists.unshift(artistIDTwo.value);
    albums.push(albumID.value);
    albums.push(albumIDTwo.value);
    build();
    
    console.log("songs", songs);
    console.log("artists", artists);
    console.log("albums", albums);
};

// set DOM
var build = function(){

    songDiv.innerHTML = songs.join('<br>');
    artistDiv.innerHTML = artists.join('<br>');
    albumDiv.innerHTML = albums.join('<br>');

    hsongDiv.innerHTML = songs.join(' : ');
    hartistDiv.innerHTML = artists.join(' : ');
    halbumDiv.innerHTML = albums.join(' : ');

    songsR.innerHTML = songs.reverse().join('<br>');
    artistsR.innerHTML = artists.reverse().join('<br>');
    albumsR.innerHTML = albums.reverse().join('<br>');

    hisongDiv.innerHTML = songs.join(' | ');
    hiartistDiv.innerHTML = artists.join(' | ');
    hialbumDiv.innerHTML = albums.join(' | ');

    vDecendingAlphaSongs.innerHTML = songs.sort().reverse().join('<br>');
    vDecendingAlphaArtists.innerHTML = artists.sort().reverse().join('<br>');
    vDecendingAlphaAlbums.innerHTML = albums.sort().reverse().join('<br>');

    vAscendingAlphaSongs.innerHTML = songs.sort().join('<br>');
    vAscendingAlphaArtists.innerHTML = artists.sort().join('<br>');
    vAscendingAlphaAlbums.innerHTML = albums.sort().join('<br>');

    hDecendingAlphaSongs.innerHTML = songs.sort().reverse().join(', ');
    hDecendingAlphaArtists.innerHTML = artists.sort().reverse().join(', ');
    hDecendingAlphaAlbums.innerHTML = albums.sort().reverse().join(', ');

    hAscendingAlphaSongs.innerHTML = songs.sort().join(' >> ');
    hAscendingAlphaArtists.innerHTML = artists.sort().join(' >> ');
    hAscendingAlphaAlbums.innerHTML = albums.sort().join(' >> ');

    // songs.reverse();
    // albums.reverse();
    // artists.reverse();
}

build();

// event listeners
// on click function
document.getElementById("add-new-song").addEventListener("click", newSong);