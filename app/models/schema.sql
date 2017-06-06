DROP DATABASE IF EXISTS resoltzapi;
CREATE DATABASE resoltzapi;

DROP TABLE IF EXISTS user_details;
CREATE TABLE IF NOT EXISTS user_details(
  UserId SERIAL PRIMARY KEY,
  Gender VARCHAR(140),
  DOB DATE,
  CurrentWeight REAL,
  GoalWeight REAL,
  HeightFeet INTEGER,
  HeightInches INTEGER,
  Goal SMALLINT,
  Intensity SMALLINT,
  Referrer VARCHAR(140),
  ProfileImageUri VARCHAR(300),
  FavoriteActivities VARCHAR(300)
);

DROP TABLE IF EXISTS user_school_details;
CREATE TABLE IF NOT EXISTS user_school_details(
  UserId SERIAL PRIMARY KEY,
  SchoolName VARCHAR(300),
  ClassYear INTEGER,
  ResidentialCollege VARCHAR(300),
  Dorm VARCHAR(300),
  Major VARCHAR(140),
  CampusGroup VARCHAR(140),
  SportsTeam VARCHAR(140),
  Role VARCHAR(140)
);

DROP TABLE IF EXISTS measurements;
CREATE TABLE IF NOT EXISTS measurements(
 AgendaSlotId SERIAL PRIMARY KEY,
 UserId INTEGER,
 Chest DECIMAL,
 Waist DECIMAL,
 Hips DECIMAL,
 Weight DECIMAL,
 Calories INTEGER,
 AvgHeartRate INTEGER,
 MaxHeartRate INTEGER
);

COPY user_details from '/Users/baahmac/Documents/LearnersGuild/LgProjects/Resoltz-api/app/models/dummyData/dummyUserDetails.csv' DELIMITER ',' CSV HEADER;

COPY user_school_details from '/Users/baahmac/Documents/LearnersGuild/LgProjects/Resoltz-api/app/models/dummyData/dummySchoolDetails.csv' DELIMITER ',' CSV HEADER;

COPY measurements from '/Users/baahmac/Documents/LearnersGuild/LgProjects/Resoltz-api/app/models/dummyData/dummyMeasurements.csv' DELIMITER ',' CSV HEADER;
