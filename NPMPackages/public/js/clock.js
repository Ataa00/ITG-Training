let hh = document.getElementById("hours").value;
let mm = document.getElementById("minutes").value;
let ss = document.getElementById("seconds").value;
const clock = document.getElementById("clock");

setInterval(currentTime, 1000);

function currentTime() {

  let time = hh + ":" + mm + ":" + ss;
  
  incrementClock();

  clock.innerText = time; 
};

function incrementClock(){
  ss++;
  if(ss === 60){
    mm++;
    ss = 0;
  }
  if(mm === 60){
    hh++;
    mm = 0;
  }
  if(hh === 24){
    hh=0;
  }
  return;
};