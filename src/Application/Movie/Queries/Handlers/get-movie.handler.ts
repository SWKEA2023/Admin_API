import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetMovieQuery } from '../Impl';
//Import Repository here....

@QueryHandler(GetMovieQuery)
export class GetMovieHandler implements IQueryHandler<GetMovieQuery> {
  constructor() {} //Add Repository here.... //private readonly test;

  async execute(query: GetMovieQuery) {
    //Add your logic here....
    console.log('Hello World from Movie Query Handler');
    query;
  }
}
