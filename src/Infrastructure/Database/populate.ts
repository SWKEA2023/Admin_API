import 'dotenv/config';
import 'reflect-metadata';
import { Customer } from '../../Domain/Entities/Customer';
import { Movie } from '../../Domain/Entities/Movie';
import { DataSource } from 'typeorm';
import { Hall } from '../../Domain/Entities/Hall';
import { Screening } from '../../Domain/Entities/Screening';
import { Seat } from '../../Domain/Entities/Seat';
import { Order } from '../../Domain/Entities/Order';
import { Ticket } from '../../Domain/Entities/Ticket';
import { Product } from '../../Domain/Entities/Product';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_DBPORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: ['src/Domain/Entities/*.ts'],
});

AppDataSource.initialize()
  .then(async (connection) => {
    console.log('Database initialized');

    const manager = connection.manager;


    await manager.delete(Ticket, {});
    await manager.delete(Order, {}); 
    await manager.delete(Screening, {}); 
    await manager.delete(Seat, {}); 
    await manager.delete(Customer, {});
    await manager.delete(Movie, {});
    await manager.delete(Product, {});
    await manager.delete(Hall, {});

    // Create a new customer
    const customer = new Customer();
    customer.firstName = 'John';
    customer.lastName = 'Doe';
    customer.email = 'Jhon@Doe.com';
    customer.phoneNumber = '123456789';
    await manager.save(customer);

    const product = new Product();
    product.productName = 'Popcorn';
    product.price = 60;
    product.category = 'Food';
    await manager.save(product);

    const product1 = new Product();
    product1.productName = 'Coke';
    product1.price = 45;
    product1.category = 'Drinks';
    await manager.save(product1);

    const product2 = new Product();
    product2.productName = 'Fanta';
    product2.price = 45;
    product2.category = 'Drinks';
    await manager.save(product2);

    // Create a new movies
    const movie = new Movie();
    movie.title = 'The Lord of the Rings';
    movie.duration = 180;
    movie.director = 'Peter Jackson';
    movie.language = 'English';
    movie.year = 2001;
    movie.pegi = 12;
    movie.imageURL =
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg';
    movie.trailerURL =
      'https://www.youtube.com/watch?v=V75dMMIW2B4&ab_channel=Movieclips';
    await manager.save(movie);

    // Movie 1
    const movie1 = new Movie();
    movie1.title = 'The Shawshank Redemption';
    movie1.duration = 142;
    movie1.director = 'Frank Darabont';
    movie1.language = 'English';
    movie1.year = 1994;
    movie1.pegi = 15;
    movie1.imageURL =
      'https://m.media-amazon.com/images/I/51zUbui+agL._AC_.jpg';
    movie1.trailerURL = 'https://www.youtube.com/watch?v=6hB3S9bIaco';
    await manager.save(movie1);

    // Movie 2
    const movie2 = new Movie();
    movie2.title = 'The Godfather';
    movie2.duration = 175;
    movie2.director = 'Francis Ford Coppola';
    movie2.language = 'English';
    movie2.year = 1972;
    movie2.pegi = 18;
    movie2.imageURL =
      'https://m.media-amazon.com/images/I/51ENBrDUQQL._AC_.jpg';
    movie2.trailerURL = 'https://www.youtube.com/watch?v=sY1S34973zA';
    await manager.save(movie2);

    // Movie 3
    const movie3 = new Movie();
    movie3.title = 'The Dark Knight';
    movie3.duration = 152;
    movie3.director = 'Christopher Nolan';
    movie3.language = 'English';
    movie3.year = 2008;
    movie3.pegi = 14;
    movie3.imageURL =
      'https://m.media-amazon.com/images/I/81pPxeO-z5L._AC_SY679_.jpg';
    movie3.trailerURL = 'https://www.youtube.com/watch?v=EXeTwQWrcwY';
    await manager.save(movie3);

    // Movie 4
    const movie4 = new Movie();
    movie4.title = 'Forrest Gump';
    movie4.duration = 142;
    movie4.director = 'Robert Zemeckis';
    movie4.language = 'English';
    movie4.year = 1994;
    movie4.pegi = 13;
    movie4.imageURL =
      'https://m.media-amazon.com/images/I/71pSSE8PsUL._AC_SY679_.jpg';
    movie4.trailerURL = 'https://www.youtube.com/watch?v=uPIEn0M8su0';
    await manager.save(movie4);

    // Movie 5
    const movie5 = new Movie();
    movie5.title = 'Pulp Fiction';
    movie5.duration = 154;
    movie5.director = 'Quentin Tarantino';
    movie5.language = 'English';
    movie5.year = 1994;
    movie5.pegi = 17;
    movie5.imageURL =
      'https://m.media-amazon.com/images/I/81i+8lG1kiL._AC_SY679_.jpg';
    movie5.trailerURL = 'https://www.youtube.com/watch?v=s7EdQ4FqbhY';
    await manager.save(movie5);

    // Hall 1
    const hall1 = new Hall();
    hall1.hallName = 'Hall 1';
    hall1.seatRows = 10;
    hall1.seatNumber = 20;
    await manager.save(hall1);

    // Hall 2
    const hall2 = new Hall();
    hall2.hallName = 'Hall 2';
    hall2.seatRows = 8;
    hall2.seatNumber = 15;
    await manager.save(hall2);

    // Hall 3
    const hall3 = new Hall();
    hall3.hallName = 'Hall 3';
    hall3.seatRows = 12;
    hall3.seatNumber = 25;
    await manager.save(hall3);

    // Create a new screening
    const screening = new Screening();
    screening.startTime = new Date('2021-10-10T10:00:00');
    screening.endTime = new Date('2021-10-10T12:00:00');
    screening.hall = hall1;
    screening.movie = movie;
    await manager.save(screening);

    // Screening 1
    const screening1 = new Screening();
    screening1.startTime = new Date('2022-10-10T10:00:00');
    screening1.endTime = new Date('2022-10-10T12:00:00');
    screening1.hall = hall2;
    screening1.movie = movie1;
    await manager.save(screening1);

    // Screening 2
    const screening2 = new Screening();
    screening2.startTime = new Date('2022-10-10T08:00:00');
    screening2.endTime = new Date('2022-10-10T10:00:00');
    screening2.hall = hall3;
    screening2.movie = movie5;
    await manager.save(screening2);

    // Create a new seat
    const seat = new Seat();
    seat.seatNumber = 5;
    seat.seatRow = 6;
    seat.hall = hall1;
    seat.price = 120;
    await manager.save(seat);

    // Create a new order
    const order = new Order();
    order.customer = customer;
    await manager.save(order);

    // Create a new ticket
    const ticket = new Ticket();
    ticket.screening = screening;
    ticket.seat = seat;
    ticket.order = order;
    ticket.seat = seat;
    await manager.save(ticket);

    await connection.close();
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {});
