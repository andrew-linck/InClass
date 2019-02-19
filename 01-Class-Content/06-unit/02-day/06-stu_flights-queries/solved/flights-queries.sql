SELECT 
  airlines.airline, 
  flight_no, 
  name
FROM flights 
  LEFT JOIN airlines on flights.airline = airlines.id
  LEFT JOIN airports on flights.source_airport = airports.code
WHERE airlines.airline = 'Delta Airlines';


SELECT 
  airlines.airline, 
  flight_no, 
  name
FROM flights 
  LEFT JOIN airlines on flights.airline = airlines.id
  LEFT JOIN airports on flights.dest_airport = airports.code
WHERE source_airport = 'AKK';


-- CHALLENGE --

SELECT 
  airlines.airline, 
  flight_no,
  source_airport,
  dest_airport,
  a1.name AS source,
  a2.name AS dest
FROM flights 
  LEFT JOIN airlines ON flights.airline = airlines.id 
  LEFT JOIN airports AS a1 ON flights.source_airport = a1.code
  LEFT JOIN airports AS a2 ON flights.dest_airport = a2.code
ORDER BY flight_no;