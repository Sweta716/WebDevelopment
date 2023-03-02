$(document).ready(() => {
  let isRunning = false;
  let startTime = null;
  let stopTime = null;
  let stopDuration = 0;

  $("#start-stop").on("click", start);
  $("#reset").on("click", reset);

  function start() {
    if (isRunning) {
      clearInterval(intervalSetup);
      stopTime = new Date();
      isRunning = false;
      $("#start-stop").text("START");
    } else {
      if (stopTime === null) {
        startTime = new Date();
      } else {
        stopDuration += new Date() - stopTime;
      }
      intervalSetup = setInterval(() => {
        const elapsedTime = new Date(new Date() - startTime - stopDuration);
        const hr = handleZeros(elapsedTime.getUTCHours(), 2);
        const min = handleZeros(elapsedTime.getUTCMinutes(), 2);
        const sec = handleZeros(elapsedTime.getUTCSeconds(), 2);
        const ms = handleZeros(elapsedTime.getUTCMilliseconds(), 3);
        $("#stopwatch").text(`${hr}:${min}:${sec}`);
        console.log(ms);
      }, 10);
      isRunning = true;
      $("#start-stop").text("STOP");
    }
  }

  function reset() {
    clearInterval(intervalSetup);
    stopDuration = 0;
    startTime = null;
    stopTime = null;
    isRunning = false;
    $("#stopwatch").text("00:00:00");
    $("#start-stop").text("START");
  }

  function handleZeros(value, digit) {
    let zero = "";
    for (let i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + value).slice(-digit);
  }
});
