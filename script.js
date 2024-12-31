// Countdown Timer
const countdown = () => {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = newYear - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  };
  
  setInterval(countdown, 1000);
  
  // Fireworks Effect
  const startFireworks = document.getElementById('startFireworks');
  startFireworks.addEventListener('click', () => {
    alert('🎆 Fireworks Animation Coming Soon 🎆');
  });
  
  // Background Music Play
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.play();
// Fireworks Animation
const startFireworks = document.getElementById('startFireworks');
startFireworks.addEventListener('click', () => {
  generateFireworks();
});

function generateFireworks() {
  const container = document.getElementById('fireworks-container');
  
  // Number of fireworks
  for (let i = 0; i < 5; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.backgroundColor = getRandomColor();
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;

    container.appendChild(firework);

    // Remove firework after animation is done
    setTimeout(() => {
      firework.remove();
    }, 2000);  // Matches the animation time
  }
}

function getRandomColor() {
  const colors = ['#ff5c5c', '#fffc00', '#00ff00', '#00aaff', '#ff8c00'];
  return colors[Math.floor(Math.random() * colors.length)];
}
  