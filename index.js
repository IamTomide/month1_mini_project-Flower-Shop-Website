document.querySelectorAll('.today').forEach(el => {
  el.textContent = new Date().toLocaleDateString('en-NG', {
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });
});

const countdownDate = new Date("Oct 7, 2025 23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "🎉 Time's up!";
  }
}, 1000);