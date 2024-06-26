import { Ticket } from "../Entity/Ticket";
export interface Handler {
  setNext(handler: Handler): Handler;
  handle(ticket: Ticket): string;
}
