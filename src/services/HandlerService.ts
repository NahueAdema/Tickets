import { Handler } from "../interface/Handler";
import { Ticket } from "../Entity/Ticket";

export abstract class AprovarHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(ticket: Ticket): string {
    const result = this.process(ticket);
    if (result !== null) {
      return result;
    } else if (this.nextHandler) {
      return this.nextHandler.handle(ticket);
    }
    return "Nadie podría manejar este boleto.";
  }

  protected abstract process(ticket: Ticket): string | null;
}
