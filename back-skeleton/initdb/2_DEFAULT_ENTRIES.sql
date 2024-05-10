-- Users --

INSERT INTO Users (username, password, first_name, last_name, email) VALUES
 ('RayPonde', 'password123', 'Raymond', 'Ponde', 'ray.ponde@email.com'),
 ('EllaStique', 'password123', 'Ella', 'Stique', 'ella.stique@email.com'),
 ('SamSuffit', 'password123', 'Sam', 'Suffit', 'sam.suffit@email.com'),
 ('AlainTerrieur', 'password123', 'Alain', 'Terrieur', 'alain.terrieur@email.com'),
 ('MarcAssin', 'password123', 'Marc', 'Assin', 'marc.assin@email.com'),
 ('JeanBon', 'password123', 'Jean', 'Bon', 'jean.bon@email.com');

-- Forum Messages --
-- Topics principaux
INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (NULL, 1, 'Le M16 est un fusil d assault populaire utilise par l armee americaine', '2024-05-10 15:30:00', 'FAQ sur le M16');

INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (NULL, 2, 'Le Glock 19 est un pistolet semi-automatique tres utilise par les forces de l ordre', '2024-05-10 15:35:00', 'FAQ sur le Glock 19');

INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (NULL, 3, 'Le AK-47 est un fusil d assault developpe en Union sovietique', '2024-05-10 15:40:00', 'FAQ sur le AK-47');

-- Réponses aux topics
INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (1, 2, 'Le M16A2 est une version amelioree du M16', '2024-05-10 15:45:00', NULL);

INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (2, 3, 'Le Glock 19 Gen5 est la derniere version du Glock 19', '2024-05-10 15:50:00', NULL);

INSERT INTO forum_messages (parent_id, user_id, message, posted_at, title)
VALUES (3, 1, 'Le AK-47 est populaire pour sa simplicite et sa durabilite', '2024-05-10 15:55:00', NULL);

-- Products --

INSERT INTO Products (name, type, description, price, stock_quantity, image_link) VALUES
('Pistolet Glock 19', 'pistolet', 'Pistolet semi-automatique calibre 9mm, idéal pour la défense personnelle et les forces de l''ordre.', 550.00, 20, '/assets/ArcturusE3.svg'),
('Fusil d''assaut AK-47', 'pistolet', 'Fusil d''assaut de calibre 7.62mm, reconnu pour sa fiabilité dans toutes les conditions.', 800.00, 15, '/assets/CymaAR15.svg'),
('Sniper Barrett M82', 'pistolet', 'Fusil de précision à longue portée calibre .50, utilisé par les militaires pour des opérations spécifiques.', 4500.00, 5, '/assets/P90FNAEG.svg');

-- other inserts --

Alter SEQUENCE users_user_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE forum_messages_message_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE cart_cart_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE orders_order_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE products_product_id_seq restart 10000 INCREMENT BY 50;