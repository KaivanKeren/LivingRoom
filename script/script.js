function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "345",
    width: "613",
    videoId: "gt61WFQ-Uu0",
    playerVars: {
      autoplay: 0,
      controls: 0,
      fs: 0,
      loop: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  const player = event.target;
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });
}

function onPlayerStateChange(event) {
  const blackScreen = document.getElementById("black-screen");
  const player = event.target;

  if (player.getPlayerState() === YT.PlayerState.PAUSED) {
    blackScreen.style.zIndex = "1";
  } else {
    blackScreen.style.zIndex = "-1";
  }
}

volumeDownButton.addEventListener("click", function () {
  const currentVolume = player.getVolume();
  if (currentVolume >= 10) {
    player.setVolume(currentVolume - 10);
  }
});

volumeUpButton.addEventListener("click", function () {
  const currentVolume = player.getVolume();
  if (currentVolume <= 90) {
    player.setVolume(currentVolume + 10);
  }
});
