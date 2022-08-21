function clock() {
    var now = new Date();
    var hrs= now.getHours();
    console.log(hrs)
    var min = now.getMinutes();
    console.log(min)
    var sec = now.getSeconds();

    var session = document.getElementById('session');
    //12 format
  
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}


setInterval(clock, 10);