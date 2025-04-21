import { Command } from '../types/Command';

interface ButtonProps {
  command: Command;
  children?: React.ReactNode;
}

export function Button({ command, children = "Executar" }: ButtonProps) {
  return (
    <button 
      onClick={() => command.execute()}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
} 