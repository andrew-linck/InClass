    // Prompt the user for some information
    const name = prompt('What is your name?');
    const color = prompt('What is your favorite color?');
    const season = prompt('What is your favorite season?');
    let interests = prompt('What are you interested in?\nSeperate interests with a comma.\ne.g. hiking, fishing golf, etc.');

    // Split is a built-in method that turns a string into an array of smaller strings, splitting them by a specified seperator (', in this case')

    interests = interests.split(',');

    // Getting references to the DOM elements we'll need
    let nameSpan = document.querySelector('#name');
    let colorSpan = document.querySelector('#color');
    let seasonSpan = document.querySelector('#season')
    let interestUL = document.querySelector('#interests');

    // Setting the innerText of the name, color and season span elements
    nameSpan.innerText = name;
    colorSpan.innerText = color;
    seasonSpan.innerText = season;

    // Creating a string to hold the HTML we'll insert into the list
    let interestHTML = '';

    // Loop over the array of interests, add an li element containing the interest to the interestHTML string
    for (let i = 0; i < interests.length; i++) {
      const interest = interests[i];
      interestHTML += `<li>${interest}</li>`;
    }

    // Set the inner HTML of the interestUL to the interestHTML string
    interestUL.innerHTML = interestHTML;
