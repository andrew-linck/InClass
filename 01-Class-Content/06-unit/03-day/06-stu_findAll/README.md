# Sequelize findAll Activity

## Instructions:

This activity is all about getting familiar with Sequelize [documentation](http://docs.sequelizejs.com/). Do your best to read the documentation before googling or asking for help. 

Seed your database with the following information:

```sql
INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Roger', '444-666-3333', 'test@test.com', NOW(), NOW());

INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Lillian', '444-666-3377', 'sample@test.com', NOW(), NOW());

INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Lillian', '555-555-5555', 'random@test.com', NOW(), NOW());

INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Jaylin', '444-666-3377', 'another@test.com', NOW(), NOW());

INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Jay', '777-777-7777', 'thisone@test.com', NOW(), NOW());

INSERT INTO Reservations (`name`, `phoneNumber`, `email`, `createdAt`, `updatedAt`) VALUES ('Phil', '999-999-9999', 'foo@test.com', NOW(), NOW());
```

Using the starter code provided, and the Sequelize documentation, print the results to the following queries:

1. Select all reservations that have an email of foo@test.com. 

2. Select all reservations that have a phone number of 444-666-3377. 

3. Select one reservation that has a phone number of 444-666-3377. (You just want one reservation returned from your query not all).

**Challenge:**

4. Insert a new reservation into the database using JavaScript and Sequelize
