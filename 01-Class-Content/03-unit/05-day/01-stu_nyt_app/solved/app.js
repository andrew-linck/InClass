const render = function (NYTData) {

    // Get from the form the number of results to display
    // API doesn't have a 'limit' parameter, so we have to do this ourselves
    const numArticles = $('#article-count').val();

    //This line shortens the array to the length specified by the user. 
    //checkout slice on w3schools to learn more.
    const articles = NYTData.response.docs.slice(0, numArticles);

      for (let i = 0; i < articles.length; i++){
        // Append the article
        $('#article-section').append(buildArticle(articles[i]));
      }

  }

  const buildArticle = function(article) {

    const articleLink = $('<a>')
    .attr('href', article.web_url)
    .attr('target', '_blank');
    

    // If the article has a headline, append to articleLink
    const headline = article.headline;

    if (headline && headline.main) {
      articleLink.append($('<h3>').text(headline.main));
    }

    // If the article has a byline, log and append to articleLink
    const byline = article.byline;

    if (byline && byline.original) {
      articleLink.append($('<h5>').text(byline.original));
    }

    // Log section, and append to document if exists
    const section = article.section_name;

    if (section) {
      articleLink.append($('<h5>').text(`Section: ${section}`));
    }

    // Log published date, and append to document if exists
    const pubDate = article.pub_date;

    if (pubDate) {
      articleLink.append($('<p>').text(formatDate(article.pub_date)));
    }


    const articleListItem = $('<li>')
    articleListItem.append(articleLink)

    return articleListItem;
  }

  const formatDate = function(date) {

    // Create a new JavaScript Date object from the passed in date
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDay()
    const year = dateObj.getFullYear()

    // return the date as a string in format 'Month DD, YYYY'
    return `${month}-${day}-${year}`
  }

  const search = function (event) {

    // Prevents the page from reloading on form submit.
    event.preventDefault();

    // Empty the region associated with the articles
    clear();

    // Build the query URL for the ajax request to the NYT API
    const queryURL = buildQueryURL();

    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the render function
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(render);
  }

  const buildQueryURL = function () {

    const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    const apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'
    
    //Get the user's search term
    const userInput = $('#search-term').val().trim();
  
    // queryURL is the url we'll use to query the API
    let queryURL = `${baseURL}?q=${userInput}&api-key=${apiKey}`;

    // If the user provides a startYear, include it in the queryParams object
    const startYear = $('#start-year').val().trim();

    if (parseInt(startYear)) {
      queryURL += `&begin_date=${startYear}0101`;
    }

    // If the user provides an endYear, include it in the queryParams object
    const endYear = $('#end-year').val().trim();

    if (parseInt(endYear)) {
      queryURL += `&end_date=${endYear}0101`;
    }

    //Return the URL 
    return queryURL;
  }

  // Function to empty out the articles
  const clear = function () {
    $('#article-section').empty();
  }

  // CLICK HANDLERS
  // ==========================================================

  // .on('click') function associated with the Search Button
  $('#run-search').on('click', search);

  //  .on('click') function associated with the clear button
  $('#clear-all').on('click', clear);
