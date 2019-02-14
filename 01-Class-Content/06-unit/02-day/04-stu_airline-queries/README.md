# Two Tables

## Instructions:

Your assignment is to take these two data sets, `flights` and `airlines`, and come up with methods to join them together based on the scenarios below.

HINT: Remember that MySQL has the ability to combine two or more tables together so long as they share equivalent data. What data is similar between the two lists?

Once you have managed to successfully bring the two datasets together, start making queries like those you made earlier to this new table as well.

**Scenarios**

1. A client is requesting that you create a query that will return the flight number, source airport, and destination airport for a specific named airline, e.g. `JetBlue Airways`. Create the query to test that it actually works as intended.

2. You are creating an application where users can search for a specific source airport in the `flights` table that returns the airline name and the destination airport. Write the query that will be able to accomplish this.

## Challenge:

3. Tanner's Travels, an international travel agency, is interested in contracting you to help them with their most popular destinations list per airline. Construct a query that returns the airline name, destination airport, and the count of the number of flights to that airport, sorted first by the airline, then by the number of flights in descending order.