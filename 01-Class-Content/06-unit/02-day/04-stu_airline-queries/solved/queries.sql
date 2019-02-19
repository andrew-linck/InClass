
SELECT airlines.airline, flight_no, source_airport, dest_airport FROM flights LEFT JOIN airlines ON flights.airline = airlines.id WHERE airlines.airline = 'JetBlue Airways';

SELECT airlines.airline, dest_airport FROM flights LEFT JOIN airlines ON flights.airline = airlines.id WHERE source_airport = 'ABY';

SELECT airlines.airline, dest_airport, Count(*) As Count FROM flights LEFT JOIN airlines ON flights.airline = airlines.id GROUP BY airlines.airline, dest_airport ORDER BY airlines.airline, Count DESC;
