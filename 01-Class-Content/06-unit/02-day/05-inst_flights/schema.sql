DROP DATABASE IF EXISTS flightsDB;
CREATE DATABASE flightsDB;

USE flightsDB;

CREATE TABLE airlines (
    id INTEGER AUTO_INCREMENT NOT NULL,
    airline VARCHAR(30) NOT NULL,
    abbreviation VARCHAR(15) NOT NULL,
    country VARCHAR(3) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE airports (
    code VARCHAR(4) NOT NULL,
    city VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    country_abbr VARCHAR(3) NOT NULL,
    PRIMARY KEY (code)
);

CREATE TABLE flights (
    id INTEGER AUTO_INCREMENT NOT NULL,
    flight_no INTEGER NOT NULL,
    source_airport VARCHAR(3) NOT NULL,
    dest_airport VARCHAR(3) NOT NULL,
    airline INTEGER NOT NULL,
    FOREIGN KEY (airline) REFERENCES airlines (id),
    FOREIGN KEY (source_airport) REFERENCES airports (code),
    FOREIGN KEY (dest_airport) REFERENCES airports (code),
    PRIMARY KEY (id)
);