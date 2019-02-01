const drinkList = [
  'Coffee: $5',
  'Espresso: $7',
  'Cappuccino: $6',
  'Latte: $4',
  'Tea: $3',
  'Ice Coffee: $6',
  'Ice Espresso: $8',
  'Ice Latte: $6',
  'Ice Tea: $4'
];
// Using JavaScript programmatically append each drinkList item to the 'drink-options' div

for (let i = 0; i < drinkList.length; i++) {
  const newDiv = $('<div>');
  newDiv.text(`${drinkList[i]}`);
  $('#drink-options').append(newDiv);
};

// Challenge Solution

// drinkList.forEach(function(element) { 
//   const newDiv = $('<div>').text(element);
//   $('#drink-options').append(newDiv);
// });
