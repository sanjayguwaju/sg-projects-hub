function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Pad single digit minutes and seconds with a leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Format the clock string
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Set the text of the clock div to the current time
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock
  updateClock();