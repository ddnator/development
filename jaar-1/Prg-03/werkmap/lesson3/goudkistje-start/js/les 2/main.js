let artist = "Starset";
let album = "Silos";
let specialEdition = true;
let songs = ["DYSTOPIA", "AD ASTRA", "TOKSIK", "HEAD OVER HEELS", "DARK THINGS"];
let duration = 96;

console.log(artist);
console.log(album);
console.log(specialEdition);
console.log(songs);
console.log(duration);

//if (specialEdition) {
//    alert("This album is a special edition");
//}

if (duration <= 30) {
    console.log("Zeer kort album");
} else if (duration <= 60) {
    console.log("Gemiddeld album");
} else if (duration <= 90) {
    console.log("Waar voor je geld");
} else {
    console.log("Hmm, dat is best extreem");
}

console.log(`Er staan ${songs.length} nummers op dit album`);

songs.push("Sway");

console.log(songs);

songs[1] = "at his altar"
console.log(songs);

for (const song of songs) {
    console.log(song);
}

function newSong(song) {
    songs.push(song);
}

newSong("requiem of the order");
newSong("the antihero's journey");

console.log(songs);

//reverse a string
function reverse(string) {
    let reversedString = string.split('').reverse().join('');
    console.log(reversedString);
}

reverse(artist);

function isTheAnswerToLife(array) {
    let answer = false;
    let totalScore = 0;
    for (const number of array) {
        totalScore += number;
        if (number === 42) {
            answer = true;
        }
    }
    if (totalScore === 42) {
        answer = true;
    }
    if (answer) {
        console.log("you've found the answer to life");
    } else {
        console.log("you still need to find the answer to life");
    }
}

let ger = [5, 5, 5, 5, 5, 5, 5, 5]

isTheAnswerToLife(ger);

let objectAlbum = {
    name: "A",
    songs: [],
    addSong: function (song) {
        this.songs.push(song);
    }
}

objectAlbum.addSong("song1");
objectAlbum.addSong("song2");


console.log(objectAlbum);