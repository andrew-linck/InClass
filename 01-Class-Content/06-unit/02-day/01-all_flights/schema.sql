DROP DATABASE IF EXISTS flightsDB;
CREATE DATABASE flightsDB;

USE flightsDB;

CREATE TABLE flights (
    id INTEGER AUTO_INCREMENT NOT NULL,
    flight_no INTEGER NOT NULL,
    source_airport VARCHAR(3) NOT NULL,
    dest_airport VARCHAR(3) NOT NULL,
    airline INTEGER NOT NULL,
    PRIMARY KEY (id)
);
