SELECT flight_no, source_airport, dest_airport from flights WHERE airline = 2;

SELECT * from flights WHERE flight_no = 28;

SELECT * FROM flights WHERE id BETWEEN 10 AND 20;

SELECT * FROM flights WHERE id <= 20 ORDER BY source_airport;

/* CHALLENGE */

SELECT source_airport FROM flights GROUP BY source_airport HAVING count(*) > 1;

SELECT flight_no, source_airport FROM flights WHERE source_airport LIKE 'C%';

SELECT count(*) As Count, dest_airport FROM flights GROUP BY dest_airport ORDER BY Count DESC LIMIT 20;
