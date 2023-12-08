function updateClock() {
    var now = new Date();
    var hours = now.getHours() % 12 || 12; // Convert 0 to 12
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    document.getElementById('clock').textContent = timeString;
  
    setTimeout(updateClock, 1000); // Update every 1000 milliseconds (1 second)
  }
  
  updateClock(); // Initial call to display the time

function updateClock1() {
    var now = new Date();
    var hours = now.getHours() % 12 || 12; // Convert 0 to 12
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    document.getElementById('clock1').textContent = timeString;
  
    setTimeout(updateClock1, 1000); // Update every 1000 milliseconds (1 second)
  }
  
  updateClock1(); // Initial call to display the time
