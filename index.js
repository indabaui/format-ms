module.exports = function formatMs(ms) {
  if (!ms) return '0:00';
  var hours, minutes, seconds;
  hours = Math.floor(ms / (60 * 60 * 1000));
  minutes = Math.floor((ms / 60000) % 60);
  seconds = Math.floor((ms / 1000) % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};

