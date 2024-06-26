import { AprovarHandler } from "./HandlerService";
import { Ticket } from "../Entity/Ticket";

export class DirectorHandler extends AprovarHandler {
  protected process(ticket: Ticket): string | null {
    if (ticket.complejidad === "Important") {
      return `Director resolvió el ticket: ${ticket.description}`;
    }
    return null;
  }
}
