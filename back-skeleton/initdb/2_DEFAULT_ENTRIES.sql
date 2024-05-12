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

INSERT INTO public.products (product_id, name, type, description, image_link, price, stock_quantity) VALUES (1, 'Pistolet Glock 19', 'Pistolet' ,'0Pistolet semi-automatique calibre 9mm, idéal pour la défense personnelle et les forces de l''ordre.', '/assets/Pistolet Glock 19.jpeg', 550.00, 20);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (2, 'Fusil d''assaut AK-47', 'Pistolet' ,'Fusil d''assaut de calibre 7.62mm, reconnu pour sa fiabilité dans toutes les conditions.', '/assets/Fusil d''assaut AK-47.jpeg', 800.00, 15);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (3, 'Sniper Barrett M82', 'Pistolet' ,'Fusil de précision à longue portée calibre .50, utilisé par les militaires pour des opérations spécifiques.', '/assets/Sniper Barrett M82.jpeg', 4500.00, 5);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (4, ' Carabine M4', 'Pistolet' ,'Carabine automatique calibre 5.56mm, légère et précise, utilisée principalement par les forces spéciales.', '/assets/Carabine_M4.jpeg', 1200.00, 10);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (5, 'Pistolet Desert Eagle', 'Pistolet' , 'Pistolet de gros calibre .50 Action Express, connu pour sa puissance et son design iconique.', '/assets/Pistolet_Desert_Eagle.jpeg', 1500.00, 100);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (6, 'Fusil à pompe Remington 870', 'Pistolet' , 'Fusil robuste calibre 12, préféré pour la défense à domicile et les applications tactiques.', '/assets/Fusil_a_pompe_Remington_870.jpeg', 650.00, 52);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (7, 'Fusil à lunette M24', 'Pistolet' ,'Fusil de sniper standard de l''armée américaine, calibre 7.62mm, connu pour sa précision et sa fiabilité en toutes conditions.', '/assets/Fusil_a_lunette_M24.jpeg', 3500.00, 20);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (8, 'Revolver Magnum .44', 'Pistolet' ,'Revolver puissant avec un calibre de .44 Magnum, célèbre pour son impact élevé et sa capacité de pénétration.', '/assets/Revolver_Magnum_44.jpeg', 900.00, 5);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (9, 'Pistolet SIG Sauer P226', 'Pistolet' ,'Pistolet semi-automatique 9mm utilisé par de nombreuses forces de l''ordre et militaires à travers le monde.', '/assets/Pistolet_SIG_Sauer_P226.jpeg', 1100.00, 2);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (10, 'Fusil semi-automatique AR-15', 'Pistolet' ,'Fusil léger calibre 5.56mm, populaire pour le tir sportif et la défense personnelle.', '/assets/Fusil_semi_automatique_AR_15.jpeg', 1000.00, 80);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (11, 'Gants tactiques Mechanix', 'Pistolet' ,'Protection optimale, dextérité maximale, respirants.', '/assets/Gants_tactiques_Mechanix.jpeg', 25.00, 60);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (12, 'Gants de combat en Kevlar', 'Pistolet' ,'Résistants aux coupures et à l''abrasion, protection thermique modérée.', '/assets/Gants_de_combat_en_Kevlar.jpeg', 45.00, 50);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (21, 'Lunettes tactiques Oakley', 'Pistolet' ,'Protection UV, résistantes aux impacts, cadre léger en O Matter.', '/assets/Lunettes_tactiques_Oakley.jpeg', 150.00, 30);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (22, 'Lunettes de vision nocturne Gen 3', 'Pistolet' , 'Vision nocturne de troisième génération, permet une visibilité claire dans l''obscurité totale.', '/assets/Lunettes_de_vision_nocturne_Gen_3.jpeg', 2800.00, 10);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (31, 'Chemise tactique respirante', 'Pistolet' ,'Tissu léger, respirant, séchage rapide, idéale pour le terrain.', '/assets/Chemise_tactique_respirante.jpeg', 60.00, 50);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (32, 'Chemise en laine mérinos', 'Pistolet' ,'Thermorégulatrice, résistante aux odeurs, pour conditions climatiques variables.', '/assets/Chemise_en_laine_mérinos.jpeg', 80.00, 40);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (36, 'Pantalon tactique robuste', 'Pistolet' ,'Multipoches, renforts aux genoux, résistant à l''abrasion.', '/assets/Pantalon_tactique_robuste.jpeg', 90.00, 40);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (37, 'Pantalon de terrain léger', 'Pistolet' ,'Conception légère, séchage rapide, idéal pour mouvements agiles.', '/assets/Pantalon_de_terrain_léger.jpeg', 50.00, 50);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (41, 'Chaussures de randonnée tout-terrain', 'Pistolet' ,'Support de cheville, semelle robuste, confort pour longues distances.', '/assets/Chaussures_de_randonnée_tout_terrain.jpeg', 120.00, 50);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (42, 'Bottes tactiques légères', 'Pistolet' ,'Légèreté, agilité accrue, idéale pour opérations rapides.', '/assets/Bottes_tactiques_légères.jpeg', 110.00, 40);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (46, 'Ceinture tactique robuste', 'Pistolet' ,'Nylon robuste, boucle rapide, supporte équipement lourd.', '/assets/Ceinture_tactique_robuste.jpeg', 30.00, 60);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (51, 'Munitions 9mm haute performance', 'Pistolet' ,'Balles avec pénétration accrue, moins de recul.', '/assets/Munitions_9mm_haute_performance.jpeg', 20.00, 1000);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (52, 'Munitions de chasse calibre 12', 'Pistolet' ,'Idéal pour la chasse, dispersion équilibrée.', '/assets/Munitions_de_chasse_calibre_12.jpeg', 15.00, 800);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (56, 'Couteau tactique pliant', 'Pistolet' ,'Lame en acier inoxydable, manche robuste.', '/assets/Couteau_tactique_pliant.jpeg', 70.00, 150);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (57, 'Épée de survie', 'Pistolet' ,'Lame longue multifonction, kit de survie intégré.', '/assets/Épée_de_survie.jpeg', 120.00, 100);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (58, 'Dague de lancer', 'Pistolet' ,'Équilibrée pour précision en lancer, lame double tranchant.', '/assets/Dague_de_lancer.jpeg', 50.00, 200);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (59, 'Machette de jungle', 'Pistolet' ,'Idéale pour défricher, lame robuste en acier carbone.', '/assets/Machette_de_jungle.jpeg', 80.00, 120);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (71, 'Casque balistique', 'Pistolet' ,'Protection contre les impacts de projectiles.', '/assets/Casque_balistique.jpeg', 200.00, 90);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (72, 'Casque de vol tactique', 'Pistolet' ,'Incorporé avec communications et protection auditive.', '/assets/Casque_de_vol_tactique.jpeg', 350.00, 70);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (82, 'Tenue de camouflage forestier', 'Pistolet' ,'Camouflage haute définition pour forêts dense.', '/assets/Tenue_de_camouflage_forestier.jpeg', 100.00, 150);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (84, 'Ghillie suit pour sniper', 'Pistolet' ,'Camouflage extrême pour environnements naturels.', '/assets/Ghillie_suit_pour_sniper.jpeg', 180.00, 75);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (86, 'Peinture de camouflage visage', 'Pistolet' ,'Kit multi-couleur, résistant à l''eau et à la sueur.', '/assets/Peinture_de_camouflage_visage.jpeg', 20.00, 200);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (95, 'Drone de cargaison', 'Pistolet' ,'Capable de transporter de lourdes charges, autonomie étendue.', '/assets/Drone_de_cargaison.jpeg', 3500.00, 20);
INSERT INTO public.products (product_id, name, type,description, image_link, price, stock_quantity) VALUES (96, 'Drone tactique à longue portée', 'Pistolet' ,'Grande autonomie de vol, caméras pour surveillance étendue.', '/assets/Drone_tactique_à_longue_portée.jpeg', 2500.00, 25);


-- other inserts --

Alter SEQUENCE users_user_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE forum_messages_message_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE cart_cart_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE orders_order_id_seq restart 10000 INCREMENT BY 50;
Alter SEQUENCE products_product_id_seq restart 10000 INCREMENT BY 50;