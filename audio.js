document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");
  audio.volume = 0.5; // Set the volume to 50%

  function playAudio() {
    // Check if audio is already playing
    if (localStorage.getItem("audioPlaying") === "true") {
      audio.currentTime = localStorage.getItem("audioCurrentTime");
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }

    audio.addEventListener("play", function () {
      localStorage.setItem("audioPlaying", "true");
    });

    audio.addEventListener("pause", function () {
      localStorage.setItem("audioPlaying", "false");
    });

    audio.addEventListener("timeupdate", function () {
      localStorage.setItem("audioCurrentTime", audio.currentTime);
    });

    // Play audio if not already playing
    if (localStorage.getItem("audioPlaying") !== "true") {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }

  // Add event listener for user interaction
  document.addEventListener('click', function() {
    playAudio();
  }, { once: true }); // Ensure the event listener is only triggered once
});