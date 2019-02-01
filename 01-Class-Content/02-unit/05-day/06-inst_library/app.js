const getVal = function(event){
  event.preventDefault();
  console.log($('#name').val());
}

$('#search').on('click', getVal);