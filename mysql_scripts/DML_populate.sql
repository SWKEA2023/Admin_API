-- Insert sample data into the 'customer' table
INSERT INTO customer (firstName, lastName, email, phoneNumber)
VALUES
  ('John', 'Doe', 'john.doe@example.com', '1234567890'),
  ('Jane', 'Smith', 'jane.smith@example.com', '9876543210');

-- Insert sample data into the 'hall' table
INSERT INTO hall (hallName, seatRows, seatNumber)
VALUES
  ('Hall A', 10, 20),
  ('Hall B', 8, 15);

-- Insert sample data into the 'movie' table
INSERT INTO movie (title, director, year, language, duration, pegi, imageURL, trailerURL)
VALUES
  ('Movie 1', 'Director 1', 2024, 'English', 120, 13, 'image1.jpg', 'trailer1.mp4'),
  ('Movie 2', 'Director 2', 2023, 'French', 110, 16, 'image2.jpg', 'trailer2.mp4');

-- Insert sample data into the 'order' table
INSERT INTO `order` (fkCustomerId)
VALUES
  (1),
  (2);

-- Insert sample data into the 'product' table
INSERT INTO product (productName, price, category)
VALUES
  ('Popcorn', 5, 'Concession'),
  ('Soda', 3, 'Concession');

-- Insert sample data into the 'product_order' table
INSERT INTO product_order (fk_product_id, fk_order_id)
VALUES
  (1, 1),
  (2, 1),
  (1, 2);

-- Insert sample data into the 'screening' table
INSERT INTO screening (date, start_time, end_time, fk_hall_id, fk_movie_id)
VALUES
  ('2024-05-10', '2024-05-10 18:00:00', '2024-05-10 20:00:00', 1, 1),
  ('2024-05-11', '2024-05-11 19:00:00', '2024-05-11 21:00:00', 2, 2);


-- Insert sample data into the 'seat' table
INSERT INTO seat (seatRow, seatNumber, price, hallId)
VALUES
  (1, 1, 10, 1),
  (1, 2, 10, 1),
  (2, 1, 10, 2);

-- Insert sample data into the 'ticket' table
INSERT INTO ticket (fkScreeningId, fkOrderId, fkSeatId)
VALUES
  (1, 1, 1),
  (1, 1, 2),
  (2, 2, 3);
