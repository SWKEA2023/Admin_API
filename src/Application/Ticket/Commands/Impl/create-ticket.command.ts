export class CreateTicketCommand {
  constructor(
    public readonly fkScreeningId: number,
    public readonly fkOrderId: number,
    public readonly fkSeatId: number,
  ) {}
}
