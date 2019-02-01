# Mini Project II

## Instructions:

Given the project requirements below, flowchart out the project. Focus on high-level details. Think about how the APIs need to interact and what data needs to be rendered.

1. Users can input a country.
2. The application will retrieve data on air pollution in that country.
3. The data will be visually represented using colors (blue means low pollution, purple means medium, red means high pollution).

The API calls used will look similar to the API calls below:

`https://restcountries.eu/rest/v2/name/mexico` - from this API, you can get the alpha-2 code for a country by supplying the country name.

`https://api.openaq.org/v1/latest?country=MX` - from this API, you can get information about air quality for a country by supplying the alpha-2 code. We are interested in the average `pm10` reading of all the locations in a country.  

**Hint:**

Consider starting by putting the above URLs in your browser and checking out the returned data if you haven't already.
