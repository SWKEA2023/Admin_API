export class UpdateTicketCommand {
  constructor(
    public readonly ticketId: number,
    public readonly fkScreeningId: number,
    public readonly fkOrderId: number,
    public readonly fkSeatId: number,
  ) {}
}
