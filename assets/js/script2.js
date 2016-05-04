function remainingTime(deadline) {
  var timeleft = Date.parse(deadline) - Date.parse(new Date());
  var sec = Math.floor( (timeleft/1000) % 60);
  var min = Math.floor( (timeleft/1000/60) % 60);
  var hr = Math.floor( (timeleft/(1000*60*60)) % 24);
  var days = Math.floor( timeleft/(1000*60*60*24) );
  return { 'timeleft': timeleft, 'days': days, 'hr': hr, 'min': min, 'sec': sec };
}

function initializeClock(id, deadline) {
  var clock = document.getElementById(id),
      daysEl = document.getElementById('days'),
      hrEl = document.getElementById('hours'),
      minEl = document.getElementById('minutes'),
      secEl = document.getElementById('seconds');

  function updateClock() {
    var timeleft = remainingTime(deadline);
    if (timeleft.timeleft <= 0) {
      clearInterval(timeinterval);
      daysEl.innerHTML = "<b> 00 </b>";
      hrEl.innerHTML =  "<b> 00 </b>";
      minEl.innerHTML =  "<b> 00 </b>";
      secEl.innerHTML =  "<b> 00 </b>";
    }
    
    daysEl.innerHTML = "<b>"+timeleft.days+"</b>";
    hrEl.innerHTML =  "<b>"+('0' + timeleft.hr).slice(-2)+"</b>";
    minEl.innerHTML =  "<b>"+('0' + timeleft.min).slice(-2)+"</b>";
    secEl.innerHTML =  "<b>"+('0' + timeleft.sec).slice(-2)+"</b>";
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

$(function(){ 

	var deadline = new Date(Date.UTC(2016,04,11,23,00,00));var myLocalDate = new Date(deadline);
	initializeClock('countdown', deadline);


});