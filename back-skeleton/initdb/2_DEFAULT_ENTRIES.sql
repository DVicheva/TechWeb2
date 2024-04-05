-- Users --

INSERT INTO Users (username, password, first_name, last_name, email) VALUES
 ('RayPonde', 'password123', 'Raymond', 'Ponde', 'ray.ponde@email.com'),
 ('EllaStique', 'password123', 'Ella', 'Stique', 'ella.stique@email.com'),
 ('SamSuffit', 'password123', 'Sam', 'Suffit', 'sam.suffit@email.com'),
 ('AlainTerrieur', 'password123', 'Alain', 'Terrieur', 'alain.terrieur@email.com'),
 ('MarcAssin', 'password123', 'Marc', 'Assin', 'marc.assin@email.com'),
 ('JeanBon', 'password123', 'Jean', 'Bon', 'jean.bon@email.com');

-- Forum Messages --
/*
-- Topic 1 : Question sur un pistolet
INSERT INTO Forum_Messages (user_id, message, posted_at, title) VALUES
(1, 'Quel est le meilleur pistolet pour un débutant ?', NOW(), 'Choix de pistolet pour débutant');

-- Réponses à Topic 1
-- Supposons que le message_id du topic ci-dessus soit 100
INSERT INTO Forum_Messages (parent_id, user_id, message, posted_at) VALUES
(100, 2, 'Je recommande le Glock 19 pour les débutants. Il est fiable et facile à utiliser.', NOW()),
(100, 3, 'Regarde aussi le Sig Sauer P320. Très intuitif pour un débutant.', NOW());

-- Topic 2 : Question sur des accessoires
INSERT INTO Forum_Messages (user_id, message, posted_at, title) VALUES
(4, 'Quels accessoires sont indispensables pour une arme de poing ?', NOW(), 'Accessoires indispensables pour arme de poing');

-- Réponses à Topic 2
-- Supposons que le message_id du topic ci-dessus soit 101
INSERT INTO Forum_Messages (parent_id, user_id, message, posted_at) VALUES
(101, 5, 'Un bon holster est crucial. Assure-toi aussi d’avoir un chargeur supplémentaire.', NOW()),
(101, 6, 'Ne néglige pas l’importance d’un bon viseur. Ça change tout pour la précision.', NOW());

-- Topic 3 : Question sur l'entretien des armes
INSERT INTO Forum_Messages (user_id, message, posted_at, title) VALUES
(5, 'Comment bien entretenir son arme pour garantir sa longévité ?', NOW(), 'Entretien des armes');

-- Réponses à Topic 3
-- Supposons que le message_id du topic ci-dessus soit 102
INSERT INTO Forum_Messages (parent_id, user_id, message, posted_at) VALUES
(102, 1, 'Il est essentiel de nettoyer régulièrement son arme, surtout après chaque utilisation au tir.', NOW()),
(102, 4, 'Utilise toujours les produits recommandés pour le nettoyage et la lubrification de ton arme.', NOW());
*/
-- Products --

INSERT INTO Products (name, description, price, stock_quantity, image_link) VALUES
('Pistolet Glock 19', 'Pistolet semi-automatique calibre 9mm, idéal pour la défense personnelle et les forces de l''ordre.', 550.00, 20, '/assets/ArcturusE3.svg'),
('Fusil d''assaut AK-47', 'Fusil d''assaut de calibre 7.62mm, reconnu pour sa fiabilité dans toutes les conditions.', 800.00, 15, '/assets/CymaAR15.svg'),
('Sniper Barrett M82', 'Fusil de précision à longue portée calibre .50, utilisé par les militaires pour des opérations spécifiques.', 4500.00, 5, '/assets/P90FNAEG.svg');

-- other inserts --

Alter SEQUENCE users_user_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE forum_messages_message_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE cart_cart_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE orders_order_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE order_details_order_detail_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE products_product_id_seq restart 10000 INCREMENT BY 50;