const daysEl = document.getElementById('days');
      hoursEl = document.getElementById('hours');
      minsEl = document.getElementById('mins');
      secondsEl = document.getElementById('seconds');

const newMatch = '08 August 2022';

function countdown(){
    const newMatchDate = new Date(newMatch);
          currentDate = new Date();

    const totalSeconds = (newMatchDate - currentDate) / 1000,
          days = Math.floor(totalSeconds / 3600 / 24),
          hours = Math.floor(totalSeconds / 3600) % 24,
          mins = Math.floor(totalSeconds / 60) % 60,
          seconds = Math.floor(totalSeconds % 60);

          daysEl.innerHTML = days;
          hoursEl.innerHTML = formatTime(hours);
          minsEl.innerHTML = formatTime(mins);
          secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

