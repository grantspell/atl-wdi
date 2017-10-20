DROP TABLE if exists players;
DROP TABLE if exists teams;

CREATE TABLE teams(
    id serial primary key,
    name varchar(255) NOT NULL,
    stadium varchar(255),
    division varchar(255),
    conference varchar(255),
    head_coach varchar(255),
    active boolean
);

CREATE TABLE players(
    id serial primary key,
    name varchar(255) NOT NULL,
    position varchar(255),
    salary integer,
    team_id integer references teams
);
