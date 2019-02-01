const runSearch = function (e){
  e.preventDefault();
  const input = $('#country').val().trim();
  $('#country').val('');
  getCountryCode(input);
}

$('#search').on('click', runSearch)
