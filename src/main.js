function updateClock() {
  var now = new Date();
  var hour = String(now.getHours()).padStart(2, "0");
  var minute = String(now.getMinutes()).padStart(2, "0");
  var second = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("hour").textContent = hour;
  document.getElementById("minute").textContent = minute;
  document.getElementById("second").textContent = second;
}

document.addEventListener("DOMContentLoaded", function () {
  updateClock();

  setInterval(updateClock, 1000);
});
