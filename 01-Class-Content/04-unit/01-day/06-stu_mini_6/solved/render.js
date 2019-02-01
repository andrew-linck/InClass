const render = function (countryCode, avg){
  const newDiv = $('<div>');
  newDiv.addClass('box');
  newDiv.text(`${countryCode} : ${avg}`);
  $('#display').append(newDiv);
}

// **CHALLENGE Solution Below**

// const render = function (countryCode, avg){
//   const newDiv = $('<div>');
//   newDiv.addClass('box');
//   if (avg > 40){
//     newDiv.addClass('red');
//   } else if (avg > 20){
//     newDiv.addClass('purple');
//   } else {
//     newDiv.addClass('blue');
//   }
//   newDiv.text(`${countryCode} : ${avg}`);
//   $('#display').append(newDiv);
// }
