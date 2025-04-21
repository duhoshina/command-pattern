import { Command } from '../types/Command';

export class DeleteCommand implements Command {
  execute() {
    console.log("Deletando item...");
    // lógica de deletar
  }
} 