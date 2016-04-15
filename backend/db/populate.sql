INSERT INTO providers (provider_name) VALUES
('Food Cycle'),
('Shelter'),
('Caritas Anchor House');

INSERT INTO branches (branch_name, provider_id) VALUES
('Food Cycle Islington Hub', 1),
('Food Cycle Merton Hub', 1),
('Food Cycle LSE Hub', 1),
('Shelter Old St', 2),
('Caritas Anchor House', 3);

INSERT INTO contacts (first_name, last_name, email, phone, branch_id) VALUES
('Jack','Fillips', 'islington@foodcycle.org.uk', '098765434737', 1),
('Tazza','Winkleton', 'merton@foodcycle.org.uk', '098765434777', 2),
('Willie','Wonka', 'lse@foodcycle.org.uk', '0987653434737', 3),
('Micheal','Mouse', 'oldst@shelter.org.uk', '098765434737', 4),
('Tarquin','Forst-Burner', 'cah@caritas.org.uk', '098765434737', 5);

INSERT INTO branch_info (branch_id, address, opening_hours, email, phone, postcode) VALUES
(1,'Southwood Smith Centre, 11 Southwood Smith Street, London','Wednesdays, 1pm','islington@foodcycle.org.uk', '098765434737','N1 0YL'),
(2,'New Horizon Centre, South Lodge Avenue, Pollards Hill, Mitcham, London', 'TBC','merton@foodcycle.org.uk', '098765434737','CR4 1LT'),
(3,'The Food Chain, Acorn House, 314-320 Gray''s Inn Road, London', 'Sundays, 5pm','lse@foodcycle.org.uk', '098765434737','WC1X 8JY	'),
(4,'88 Old St, London', '9AM-5PM','oldst@shelter.org.uk', '098765434737','EC1V 9HU'),
(5,'81 Barking Rd, London', '24/7','cah@caritas.org.uk', '098765434737',' E16 4HB');

INSERT INTO branch_services (branch_id, last_updated, serving_food, beds) VALUES
(1, CURRENT_TIMESTAMP, 'True', 0),
(3, CURRENT_TIMESTAMP, 'True', 0),
(5, CURRENT_TIMESTAMP, 'False', 45);

INSERT INTO categories (category_type) VALUES
('Accommodation'),
('Soup Kitchen');

INSERT INTO branch_category (branch_id, category_id) VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 1),
(4, 2),
(5, 1),
(5, 2);
