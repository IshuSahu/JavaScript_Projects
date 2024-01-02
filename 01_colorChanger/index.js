const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log(body);
// console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // using Switch
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'red';
        break;
    }
  });
});
