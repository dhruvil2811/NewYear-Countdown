const newyear = "1 jan 2022";

function countdown() {
  const ny = new Date(newyear);
  const today = new Date();
  const total_seconds = (ny - today) / 1000;

  let day = Math.floor(total_seconds / 3600 / 24);
  let hour = Math.floor(total_seconds / 3600) % 24;
  let minute = Math.floor(total_seconds / 60) % 60;
  let seconds = Math.floor(total_seconds) % 60;

  console.log(day, hour, minute, seconds);

  document.getElementById("days").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);
