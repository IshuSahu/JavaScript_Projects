const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); // this are inside becoz we want to get at the time of Sumbit nor when it assigns
  const weight = parseInt(document.querySelector('#weight').value);
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
      results.innerHTML = `you bmi value <span>${bmi}</span>  is under weight`;
    }
    else if(24.9 <= bmi >=18.6){
      results.innerHTML = `you bmi value <span>${bmi}</span>  is in normal range`;
    }else{
      results.innerHTML = `you bmi value <span>${bmi}</span>  is in Over weight`;
    }
  }
});
