import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMoviesQuery } from '../Impl/get-movies.query';
//Import Repository here....

@QueryHandler(GetMoviesQuery)
export class GetMoviesHandler implements IQueryHandler<GetMoviesQuery> {
  constructor() {} //Add Repository here.... //private readonly test;

  async execute(query: GetMoviesQuery) {
    //Add your logic here....
    console.log('Hello World from Movie Query Handler');
    query;
  }
}
