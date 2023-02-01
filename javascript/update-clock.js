function updateClock() {
  var now = new Date(),
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  time = now.getHours() + ':' + ("0" + now.getMinutes()).slice(-2),

  date = [months[now.getMonth() + 1],
          now.getDate(), 
          now.getFullYear()].join(' ');

  document.querySelector('.time').innerHTML = [date, time].join(' / ');

  setTimeout(updateClock, 1000);
}