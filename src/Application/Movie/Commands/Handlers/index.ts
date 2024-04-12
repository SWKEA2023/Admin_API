import { CreateMovieHandler } from './create-movie.handler';
import { UpdateMovieHandler } from './update-movie.handler';
import { DeleteMovieHandler } from './delete-movie.handler';

export const CommandHandlers = [
  CreateMovieHandler,
  UpdateMovieHandler,
  DeleteMovieHandler,
];
