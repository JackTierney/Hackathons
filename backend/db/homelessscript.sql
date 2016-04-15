--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.2
-- Dumped by pg_dump version 9.5.2

-- Started on 2016-04-15 15:57:40 BST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12393)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2209 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 192 (class 1259 OID 24651)
-- Name: branch_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE branch_category (
    branch_category_id integer NOT NULL,
    branch_id integer,
    category_id integer
);


ALTER TABLE branch_category OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 24649)
-- Name: branch_category_branch_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE branch_category_branch_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE branch_category_branch_category_id_seq OWNER TO postgres;

--
-- TOC entry 2210 (class 0 OID 0)
-- Dependencies: 191
-- Name: branch_category_branch_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE branch_category_branch_category_id_seq OWNED BY branch_category.branch_category_id;


--
-- TOC entry 188 (class 1259 OID 24631)
-- Name: branch_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE branch_info (
    branch_id integer NOT NULL,
    address character varying(200),
    opening_hours character varying(20),
    email character varying(30),
    phone bigint,
    postcode character varying(10)
);


ALTER TABLE branch_info OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 24598)
-- Name: branch_services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE branch_services (
    branch_id integer NOT NULL,
    last_updated timestamp without time zone,
    serving_food boolean,
    beds integer
);


ALTER TABLE branch_services OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 24587)
-- Name: branches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE branches (
    branch_id integer NOT NULL,
    branch_name character varying(40),
    provider_id integer
);


ALTER TABLE branches OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 24585)
-- Name: branches_branch_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE branches_branch_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE branches_branch_id_seq OWNER TO postgres;

--
-- TOC entry 2211 (class 0 OID 0)
-- Dependencies: 183
-- Name: branches_branch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE branches_branch_id_seq OWNED BY branches.branch_id;


--
-- TOC entry 190 (class 1259 OID 24643)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE categories (
    category_id integer NOT NULL,
    category_type character varying(30)
);


ALTER TABLE categories OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 24641)
-- Name: categories_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE categories_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE categories_category_id_seq OWNER TO postgres;

--
-- TOC entry 2212 (class 0 OID 0)
-- Dependencies: 189
-- Name: categories_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE categories_category_id_seq OWNED BY categories.category_id;


--
-- TOC entry 187 (class 1259 OID 24615)
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE contacts (
    contact_id integer NOT NULL,
    first_name character varying(20),
    last_name character varying(20),
    email character varying(30),
    phone bigint,
    branch_id integer
);


ALTER TABLE contacts OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 24613)
-- Name: contacts_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE contacts_contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE contacts_contact_id_seq OWNER TO postgres;

--
-- TOC entry 2213 (class 0 OID 0)
-- Dependencies: 186
-- Name: contacts_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE contacts_contact_id_seq OWNED BY contacts.contact_id;


--
-- TOC entry 182 (class 1259 OID 24579)
-- Name: providers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE providers (
    provider_id integer NOT NULL,
    provider_name character varying(20)
);


ALTER TABLE providers OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 24577)
-- Name: providers_provider_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE providers_provider_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE providers_provider_id_seq OWNER TO postgres;

--
-- TOC entry 2214 (class 0 OID 0)
-- Dependencies: 181
-- Name: providers_provider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE providers_provider_id_seq OWNED BY providers.provider_id;


--
-- TOC entry 2053 (class 2604 OID 24654)
-- Name: branch_category_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_category ALTER COLUMN branch_category_id SET DEFAULT nextval('branch_category_branch_category_id_seq'::regclass);


--
-- TOC entry 2050 (class 2604 OID 24590)
-- Name: branch_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branches ALTER COLUMN branch_id SET DEFAULT nextval('branches_branch_id_seq'::regclass);


--
-- TOC entry 2052 (class 2604 OID 24646)
-- Name: category_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categories ALTER COLUMN category_id SET DEFAULT nextval('categories_category_id_seq'::regclass);


--
-- TOC entry 2051 (class 2604 OID 24618)
-- Name: contact_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY contacts ALTER COLUMN contact_id SET DEFAULT nextval('contacts_contact_id_seq'::regclass);


--
-- TOC entry 2049 (class 2604 OID 24582)
-- Name: provider_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY providers ALTER COLUMN provider_id SET DEFAULT nextval('providers_provider_id_seq'::regclass);


--
-- TOC entry 2201 (class 0 OID 24651)
-- Dependencies: 192
-- Data for Name: branch_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO branch_category VALUES (1, 1, 2);
INSERT INTO branch_category VALUES (2, 2, 2);
INSERT INTO branch_category VALUES (3, 3, 2);
INSERT INTO branch_category VALUES (4, 4, 1);
INSERT INTO branch_category VALUES (5, 4, 2);
INSERT INTO branch_category VALUES (6, 5, 1);
INSERT INTO branch_category VALUES (7, 5, 2);


--
-- TOC entry 2215 (class 0 OID 0)
-- Dependencies: 191
-- Name: branch_category_branch_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('branch_category_branch_category_id_seq', 33, true);


--
-- TOC entry 2197 (class 0 OID 24631)
-- Dependencies: 188
-- Data for Name: branch_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO branch_info VALUES (1, 'Southwood Smith Centre, 11 Southwood Smith Street, London', 'Wednesdays, 1pm', 'islington@foodcycle.org.uk', 98765434737, 'N1 0YL');
INSERT INTO branch_info VALUES (2, 'New Horizon Centre, South Lodge Avenue, Pollards Hill, Mitcham, London', 'TBC', 'merton@foodcycle.org.uk', 98765434737, 'CR4 1LT');
INSERT INTO branch_info VALUES (3, 'The Food Chain, Acorn House, 314-320 Gray''s Inn Road, London', 'Sundays, 5pm', 'lse@foodcycle.org.uk', 98765434737, 'WC1X 8JY	');
INSERT INTO branch_info VALUES (4, '88 Old St, London', '9AM-5PM', 'oldst@shelter.org.uk', 98765434737, 'EC1V 9HU');
INSERT INTO branch_info VALUES (5, '81 Barking Rd, London', '24/7', 'cah@caritas.org.uk', 98765434737, ' E16 4HB');


--
-- TOC entry 2194 (class 0 OID 24598)
-- Dependencies: 185
-- Data for Name: branch_services; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO branch_services VALUES (1, '2016-04-15 14:13:53.249532', true, 0);
INSERT INTO branch_services VALUES (3, '2016-04-15 14:13:53.249532', true, 0);
INSERT INTO branch_services VALUES (5, '2016-04-15 14:13:53.249532', false, 45);


--
-- TOC entry 2193 (class 0 OID 24587)
-- Dependencies: 184
-- Data for Name: branches; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO branches VALUES (1, 'Food Cycle Islington Hub', 1);
INSERT INTO branches VALUES (2, 'Food Cycle Merton Hub', 1);
INSERT INTO branches VALUES (3, 'Food Cycle LSE Hub', 1);
INSERT INTO branches VALUES (4, 'Shelter Old St', 2);
INSERT INTO branches VALUES (5, 'Caritas Anchor House', 3);


--
-- TOC entry 2216 (class 0 OID 0)
-- Dependencies: 183
-- Name: branches_branch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('branches_branch_id_seq', 5, true);


--
-- TOC entry 2199 (class 0 OID 24643)
-- Dependencies: 190
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO categories VALUES (1, 'Accommodation');
INSERT INTO categories VALUES (2, 'Soup Kitchen');


--
-- TOC entry 2217 (class 0 OID 0)
-- Dependencies: 189
-- Name: categories_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('categories_category_id_seq', 2, true);


--
-- TOC entry 2196 (class 0 OID 24615)
-- Dependencies: 187
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO contacts VALUES (1, 'Jack', 'Fillips', 'islington@foodcycle.org.uk', 98765434737, 1);
INSERT INTO contacts VALUES (2, 'Tazza', 'Winkleton', 'merton@foodcycle.org.uk', 98765434777, 2);
INSERT INTO contacts VALUES (3, 'Willie', 'Wonka', 'lse@foodcycle.org.uk', 987653434737, 3);
INSERT INTO contacts VALUES (4, 'Micheal', 'Mouse', 'oldst@shelter.org.uk', 98765434737, 4);
INSERT INTO contacts VALUES (5, 'Tarquin', 'Forst-Burner', 'cah@caritas.org.uk', 98765434737, 5);


--
-- TOC entry 2218 (class 0 OID 0)
-- Dependencies: 186
-- Name: contacts_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('contacts_contact_id_seq', 5, true);


--
-- TOC entry 2191 (class 0 OID 24579)
-- Dependencies: 182
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO providers VALUES (1, 'Food Cycle');
INSERT INTO providers VALUES (2, 'Shelter');
INSERT INTO providers VALUES (3, 'Caritas Anchor House');


--
-- TOC entry 2219 (class 0 OID 0)
-- Dependencies: 181
-- Name: providers_provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('providers_provider_id_seq', 3, true);


--
-- TOC entry 2067 (class 2606 OID 24656)
-- Name: branch_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_category
    ADD CONSTRAINT branch_category_pkey PRIMARY KEY (branch_category_id);


--
-- TOC entry 2063 (class 2606 OID 24635)
-- Name: branch_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_info
    ADD CONSTRAINT branch_info_pkey PRIMARY KEY (branch_id);


--
-- TOC entry 2059 (class 2606 OID 24602)
-- Name: branch_services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_services
    ADD CONSTRAINT branch_services_pkey PRIMARY KEY (branch_id);


--
-- TOC entry 2057 (class 2606 OID 24592)
-- Name: branches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branches
    ADD CONSTRAINT branches_pkey PRIMARY KEY (branch_id);


--
-- TOC entry 2065 (class 2606 OID 24648)
-- Name: categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);


--
-- TOC entry 2061 (class 2606 OID 24620)
-- Name: contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (contact_id);


--
-- TOC entry 2055 (class 2606 OID 24584)
-- Name: providers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (provider_id);


--
-- TOC entry 2069 (class 2606 OID 24658)
-- Name: u_con; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_category
    ADD CONSTRAINT u_con UNIQUE (branch_id, category_id);


--
-- TOC entry 2074 (class 2606 OID 24659)
-- Name: branch_category_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_category
    ADD CONSTRAINT branch_category_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES branches(branch_id);


--
-- TOC entry 2075 (class 2606 OID 24664)
-- Name: branch_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_category
    ADD CONSTRAINT branch_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(category_id);


--
-- TOC entry 2073 (class 2606 OID 24636)
-- Name: branch_info_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_info
    ADD CONSTRAINT branch_info_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES branches(branch_id);


--
-- TOC entry 2071 (class 2606 OID 24603)
-- Name: branch_services_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branch_services
    ADD CONSTRAINT branch_services_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES branches(branch_id);


--
-- TOC entry 2070 (class 2606 OID 24593)
-- Name: branches_provider_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY branches
    ADD CONSTRAINT branches_provider_id_fkey FOREIGN KEY (provider_id) REFERENCES providers(provider_id);


--
-- TOC entry 2072 (class 2606 OID 24621)
-- Name: contacts_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY contacts
    ADD CONSTRAINT contacts_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES branches(branch_id);


--
-- TOC entry 2208 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2016-04-15 15:57:41 BST

--
-- PostgreSQL database dump complete
--

