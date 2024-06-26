import "./index.css";
import { TicketController } from "./controller/TicketController";

TicketController.initializeChain();

const formulario = document.getElementById("ticket-form") as HTMLFormElement;
const resultado = document.getElementById("ticket-result") as HTMLDivElement;

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = (
    document.getElementById("description") as HTMLInputElement
  ).value;

  const complejidad = (
    document.getElementById("complejidad") as HTMLSelectElement
  ).value;

  const result = TicketController.processTicket(description, complejidad);

  resultado.innerHTML = `<p>Descripción del ticket: ${description}</p><p>Estado final: ${result}</p>`;
});
