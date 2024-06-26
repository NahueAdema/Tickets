import { DirectorHandler } from "../services/DirectorHandler";
import { AdministradorHandler } from "../services/AdministradorHandler";
import { AsistenteHandler } from "../services/AsistenteHandler";
import { Ticket } from "../Entity/Ticket";
import { Handler } from "../interface/Handler";

export class TicketController {
  private static firstHandler: Handler;

  static initializeChain() {
    const asistente = new AsistenteHandler();
    const administrador = new AdministradorHandler();
    const director = new DirectorHandler();

    asistente.setNext(administrador).setNext(director);
    TicketController.firstHandler = asistente;
  }

  static processTicket(description: string, complejidad: string): string {
    const ticket = new Ticket(description, complejidad);
    return TicketController.firstHandler.handle(ticket);
  }
}
