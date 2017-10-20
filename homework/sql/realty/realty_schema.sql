DROP TABLE if exists apartments;
DROP TABLE if exists offices;
DROP TABLE if exists storefronts;

CREATE TABLE apartments(
    id serial primary key,
    apt_num integer references apartments,
    bed_num integer,
    bath_num integer,
    address varchar(255) NOT NULL,
    tenant varchar(255),
    vacant boolean,
    sq_foot integer,
    price integer
);

CREATE TABLE offices(
    id serial primary key,
    off_num integer references offices,
    floor_num integer,
    sq_foot integer,
    cub_num integer,
    bath_num integer,
    address varchar(255) NOT NULL,
    company_name varchar(255),
    vacant boolean,
    price integer
);

CREATE TABLE storefronts(
    id serial primary key,
    address varchar(255),
    vacant boolean,
    price integer,
    kitchen boolean,
    sq_foot integer,
    owner varchar(255),
    patio false
);
