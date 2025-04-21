import { Command } from '../types/Command';

export class SaveCommand implements Command {
  execute() {
    console.log("Salvando dados...");
    // lógica de salvar
  }
} 