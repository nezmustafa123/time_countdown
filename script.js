//Time Countdown

let time = 10; // Time in minutes

let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
   if(promoTime <= 0) {
  clearInterval(promoTimer); //clear interval
  counting.innerHTML = 'Promo has ended';
} else {
   promoTime = promoTime - 1;
   const days = Math.floor(promoTime / 3600 / 24); //3600 seconds in an hour
   const hours = Math.floor(promoTime / 3600) % 24; //what's left after getting number of days
   const min = Math.floor(promoTime / 60) % 60; //get minutes divide by 60
   const sec = Math.floor(promoTime % 60);
   counting.innerHTML = `TIME: ${hours}hr: ${min}min :${sec}`;
   }
  }. 1000)
}

