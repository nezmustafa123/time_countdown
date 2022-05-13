//Time Countdown

let time = 10; // Time in minutes

let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTime <= 0) {
      clearInterval(promoTimer); //clear interval
      counting.innerHTML = "Promo has ended";
    } else {
      promoTime--;
      const days = Math.floor(promoTime / 3600 / 24); //3600 seconds in an hour
      const hours = Math.floor(promoTime / 3600) % 24; //what's left after getting number of days
      const min = Math.floor(promoTime / 60) % 60; //get minutes divide by 60
      const sec = Math.floor(promoTime % 60);
      counting.innerHTML = `TIME: ${hours} hr: ${format(min)} min :${format(
        sec
      )}`;
    }
  }, 1000);
}

function format(t) {
  return t < 10 ? `0${t}` : t;
}
startCountdown();
