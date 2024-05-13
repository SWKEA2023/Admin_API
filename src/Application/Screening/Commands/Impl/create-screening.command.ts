import { ScreeningDTO } from 'src/Domain/Entities/ScreeningDTO';

export class CreateScreeningCommand {
  constructor(public readonly screening: ScreeningDTO) {}
}
