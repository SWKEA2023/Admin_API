import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateMovieCommand } from '../Impl/create-movie.command';
//Import Repository here....

@CommandHandler(CreateMovieCommand)
export class CreateMovieHandler implements ICommandHandler<CreateMovieCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    //Add Repository here....
  ) {}

  async execute(command: CreateMovieCommand) {
    //Add your logic here....
    console.log('Hello World from Movie Command Handler');
    command;
  }
}
