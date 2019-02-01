const render = function(htmlStr){
  $('#content').html(htmlStr);
}

const getMovies = function(){
  let htmlString = '';
  const movies = response.data.movies;
  for( let i = 0; i < movies.length; i++ ) {
    htmlString += `<p>${movies[i]}</p>`
  }

  render(htmlString);
}

setTimeout(getMovies, 1000);
