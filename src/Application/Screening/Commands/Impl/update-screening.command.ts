import { Screening } from 'src/Domain/Entities/Screening';

export class UpdateScreeningCommand {
  constructor(public readonly screening: Screening) {}
}
