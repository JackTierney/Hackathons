CREATE TABLE providers (
	provider_id SERIAL PRIMARY KEY,
	provider_name VARCHAR(20)
);
CREATE TABLE branches (
	branch_id SERIAL PRIMARY KEY,
	branch_name VARCHAR(40),
	provider_id integer REFERENCES providers
);
CREATE TABLE branch_services (
	branch_id integer REFERENCES branches ,
	last_updated timestamp,
	serving_food boolean,
	beds integer,
	PRIMARY KEY (branch_id)
);
CREATE TABLE contacts (
	contact_id SERIAL PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	email VARCHAR(30),
	phone bigint,
	branch_id integer REFERENCES branches
);
CREATE TABLE branch_info (
	branch_id integer REFERENCES branches (branch_id),
	address VARCHAR(200),
	opening_hours VARCHAR(20),
	email VARCHAR(30),
	phone bigint,
  postcode VARCHAR(10),
	latitude DECIMAL,
	longitude DECIMAL,
	PRIMARY KEY (branch_id)
);
CREATE TABLE categories (
	category_id SERIAL PRIMARY KEY,
	category_type VARCHAR(30)
);
CREATE TABLE branch_category (
	branch_category_id SERIAL PRIMARY KEY,
	branch_id integer REFERENCES branches,
	category_id integer REFERENCES categories,
	CONSTRAINT u_con UNIQUE (branch_id, category_id )
);
