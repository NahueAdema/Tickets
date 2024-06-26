import { AprovarHandler } from "./HandlerService";
import { Ticket } from "../Entity/Ticket";

export class AdministradorHandler extends AprovarHandler {
  protected process(ticket: Ticket): string | null {
    if (ticket.complejidad === "Medium") {
      return `Administrador resolvió el ticket: ${ticket.description}`;
    }
    return null;
  }
}
