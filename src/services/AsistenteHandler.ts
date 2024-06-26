import { AprovarHandler } from "./HandlerService";
import { Ticket } from "../Entity/Ticket";

export class AsistenteHandler extends AprovarHandler {
  protected process(ticket: Ticket): string | null {
    if (ticket.complejidad === "Simple") {
      return `Ticket resuelto por el asistente: ${ticket.description}`;
    }
    return null;
  }
}
