const getAQ = function(countryCode){
  const queryURL = `https://api.openaq.org/v1/latest?country=${countryCode}`;
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < response.results.length; i++){
      let measurementList = response.results[i].measurements;
      for (let i = 0; i < measurementList.length; i++){
        if(measurementList[i].parameter === 'pm10'){
          sum += measurementList[i].value;
          count++;
        }
      }
      
    }

    let average = sum / count;
    render(countryCode, average); 
  })
}