const video = document.getElementById('video-player');
const playPauseBtn = document.getElementById('play-pause');
const volumeInput = document.getElementById('volume');
const volumeLabel = document.getElementById('volume-label');
const fullscreenBtn = document.getElementById('fullscreen');

// Воспроизведение/пауза
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '? Пауза';
  } else {
    video.pause();
    playPauseBtn.textContent = '? Воспроизвести';
  }
});

// Громкость
volumeInput.addEventListener('input', (e) => {
  video.volume = parseFloat(e.target.value);
  const percent = Math.round(video.volume * 100);
  volumeLabel.textContent = `${percent}%`;
});

// Полноэкранный режим
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.parentElement.requestFullscreen().catch((err) => {
      alert(`Ошибка при переходе в полноэкранный режим: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});
