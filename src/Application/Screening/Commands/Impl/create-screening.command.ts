import { Screening } from 'src/Domain/Entities/Screening';

export class CreateScreeningCommand {
  constructor(public readonly screening: Screening) {}
}
