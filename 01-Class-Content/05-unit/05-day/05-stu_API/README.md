# Front-end Implementation of GET and POST

## Instructions

This API has three end-points that you'll need to use: GET `/api/tables` which returns all the reserved tables, GET `/api/waitinglist` which returns the waitlisted customers, and POST `/api/tables` which adds a new table to our data collection.

Using the images in the `images` folder, create a `home.html` that has all of the elements of `images/home.png`. Although it should have all of the same elements (buttons, links) the design of the page is up to you!

Create a `tables.html` page in the `public` directory. This is the page where you will render the information received from the API. Feel free to use `images/tables.png` as a style guide.

Create a `reservations.html` page in the `public` directory. This is the page where you will enter and submit a new table to the data collection. For this form, you will need to use the following names for your data: `customerName`, `customerEmail`, `customerID`, and `phoneNumber`. Feel free to use `images/reservation.png` as a style guide.

Create the scripts necessary for each of these pages and save them in the `public/js` directory. Link the scripts on the appropriate pages.

The script for the `tables.html` page should make an AJAX GET request to the server to retrieve the reserved tables and the waitlist, and render this information to the DOM.

The script for the `reservations.html` page should submit the data entered in the form you created to the server via a AJAX POST request.

_Note:_ This may seem like a lot, but you can do this!  Break the tasks up between your team and divide and conquer.

