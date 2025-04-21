'use client';

import { Button } from './components/Button';
import { SaveCommand } from './commands/SaveCommand';
import { DeleteCommand } from './commands/DeleteCommand';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold mb-8">Command Pattern Demo</h1>
      <div className="flex gap-4">
        <Button command={new SaveCommand()}>
          Salvar
        </Button>
        <Button command={new DeleteCommand()}>
          Deletar
        </Button>
      </div>
    </main>
  );
}
