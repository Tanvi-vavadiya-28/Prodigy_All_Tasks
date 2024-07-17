let timer;
let startTime;
let running = false;
let elapsedTime = 0; // Variable to track the elapsed time

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function startTimer() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function updateDisplay() {
  const elapsed = new Date(Date.now() - startTime);
  const hours = elapsed.getUTCHours().toString().padStart(2, '0');
  const minutes = elapsed.getUTCMinutes().toString().padStart(2, '0');
  const seconds = elapsed.getUTCSeconds().toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function pauseTimer() {
  if (running) {
    clearInterval(timer);
    running = false;
    elapsedTime = Date.now() - startTime; // Update elapsed time
  }
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0; // Reset elapsed time
  display.textContent = '00:00:00';
  lapsList.innerHTML = '';
}

function lapTimer() {
  if (running) {
    const elapsed = new Date(Date.now() - startTime);
    const lapTime = `${elapsed.getUTCHours().toString().padStart(2, '0')}:${elapsed.getUTCMinutes().toString().padStart(2, '0')}:${elapsed.getUTCSeconds().toString().padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
