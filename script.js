// Set your YouTube API Key
const apiKey = 'AIzaSyCSaVwvthRWkgKfbnr5t7AK8sDv7ia_jm8'; // Your YouTube API Key

// Load the YouTube Iframe API
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'RzrqQlcHfCk', // Replace with the ID of the YouTube video you want to play
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        },
    });
}

function onPlayerReady(event) {
    // Play/Pause Button functionality
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.addEventListener('click', togglePlayPause);

    // Mute/Unmute Button functionality
    const muteBtn = document.getElementById('muteBtn');
    muteBtn.addEventListener('click', toggleMute);

    // Fullscreen Button functionality
    const fullScreenBtn = document.getElementById('fullScreenBtn');
    fullScreenBtn.addEventListener('click', toggleFullscreen);
}

// Play/Pause functionality
function togglePlayPause() {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

// Mute/Unmute functionality
function toggleMute() {
    if (player.isMuted()) {
        player.unMute();
    } else {
        player.mute();
    }
}

// Fullscreen functionality
function toggleFullscreen() {
    const iframe = document.getElementById('player');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}

// This event is fired when the player's state changes (e.g., paused, playing)
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        console.log("Video has ended.");
    }
}