window.addEventListener('DOMContentLoaded', function(event) {

  function showTime(){

    let clock = document.getElementById('clock');
    let dog = document.getElementById('dog');

    function time() {
      let time = new Date();
      let parseTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour24: true });

      clock.innerHTML = parseTime;

      if (parseTime.includes('AM')) {
        dog.innerHTML = "<img width='400' src='waking.jpeg' />"
      } else {
        dog.innerHTML = "<img width='400' src='sleeping.jpg' />"
      }
    }

    setInterval(time, 1000);

  }


  showTime();


});
