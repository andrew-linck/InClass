const getAQ = function(countryCode){
  const queryURL = `https://api.openaq.org/v1/latest?country=${countryCode}`;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    for (let i = 0; i < response.results.length; i++){
      let measurementList = response.results[i].measurements;
      for (let i = 0; i < measurementList.length; i++){
        if(measurementList[i].parameter === 'pm10'){
          console.log(measurementList[i].value);
        }
      }
      
    }
    
  })
}