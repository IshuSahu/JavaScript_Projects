const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () { /// int will change at eah interval
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

