const axios = require('axios');
var sizeOf = require('image-size');
var dimensions = sizeOf('/Users/andrew/Course Work/InClass/01-Class-Content/01-unit/00-homework/01-portfolio_homework/images/portfolio-about-me.png');

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = await getBreeds()

  if (breeds.data.message) {
    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
  }
}

countBreeds()
console.log(dimensions.width, dimensions.height);