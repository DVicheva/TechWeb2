CREATE TABLE IF NOT EXISTS Users (
user_id serial PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Products (
product_id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
image_link TEXT,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Orders (
order_id serial PRIMARY KEY,
user_id INT,
order_date timestamp NOT NULL,
status VARCHAR(50) NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Order_Details (
order_detail_id serial PRIMARY KEY,
order_id INT,
product_id INT,
quantity INT NOT NULL,
price DECIMAL(10, 2) NOT NULL,
FOREIGN KEY (order_id) REFERENCES Orders(order_id),
FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE IF NOT EXISTS Cart (
cart_id serial PRIMARY KEY,
user_id INT,
product_id INT,
quantity INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users(user_id),
FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE IF NOT EXISTS Forum_Messages (
message_id serial PRIMARY KEY,
parent_id INT NULL,
user_id INT,
message TEXT NOT NULL,
posted_at timestamp NOT NULL,
title VARCHAR(255),
FOREIGN KEY (user_id) REFERENCES Users(user_id),
FOREIGN KEY (parent_id) REFERENCES Forum_Messages(message_id)
);
