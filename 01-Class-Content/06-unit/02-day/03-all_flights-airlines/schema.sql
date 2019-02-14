USE flightsDB;

CREATE TABLE airlines (
    id INTEGER AUTO_INCREMENT NOT NULL,
    airline VARCHAR(30) NOT NULL,
    abbreviation VARCHAR(15) NOT NULL,
    country VARCHAR(3) NOT NULL,
    PRIMARY KEY (id)
);