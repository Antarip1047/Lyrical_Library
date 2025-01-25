// Select elements
const songListScreen = document.getElementById("song-list-screen");
const lyricsScreen = document.getElementById("lyrics-screen");
const songListItems = document.querySelectorAll("#song-list li");
const songTitleElement = document.getElementById("song-title");
const songLyricsElement = document.getElementById("song-lyrics");
const goBackButton = document.getElementById("go-back");
const searchBar = document.getElementById("search-bar");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Display lyrics for a selected song
function displayLyrics(songElement) {
  const songName = songElement.textContent;
  const songLyrics = songElement.getAttribute("data-lyrics");

  songTitleElement.textContent = songName;
  songLyricsElement.textContent = songLyrics;

  lyricsScreen.classList.remove("hidden");
  songListScreen.classList.add("hidden");
}

// Go back to the song list
goBackButton.addEventListener("click", () => {
  lyricsScreen.classList.add("hidden");
  songListScreen.classList.remove("hidden");
});

// Add event listeners to song list items
songListItems.forEach(songItem => {
  songItem.addEventListener("click", () => displayLyrics(songItem));
});

// Filter songs in the list based on search input
searchBar.addEventListener("input", (e) => {
  const filter = e.target.value.toLowerCase();

  songListItems.forEach(songItem => {
    const songName = songItem.textContent.toLowerCase();
    songItem.style.display = songName.includes(filter) ? "block" : "none";
  });
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
