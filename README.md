# Command Pattern Demo

Este projeto demonstra o uso do **Command Pattern** em React. O **Command Pattern** ajuda a separar a lógica da interface, facilitando a manutenção e a escalabilidade de sistemas. A ideia é encapsular as ações como objetos, permitindo que os comandos sejam executados sem que a interface precise saber o que está acontecendo nos bastidores.

## Estrutura do Projeto

A estrutura do projeto é simples e segue os princípios do **Command Pattern**:

```css
app/
├── commands/
│   ├── DeleteCommand.ts
│   └── SaveCommand.ts
├── components/
│   └── Button.tsx
├── types/
│   └── Command.ts
└── page.tsx
```

## Como Funciona?

1. **Definição de Comandos**: Cada ação (como salvar ou deletar) é representada por uma classe de comando.
2. **Componente de Botão**: O botão aceita um comando e executa a ação ao ser clicado.
3. **Uso de Comandos**: No arquivo `page.tsx`, você verá como os comandos são passados para o botão, e a interface interage com a lógica sem acoplamento.

## Arquivos

### app/commands/DeleteCommand.ts

Este arquivo contém a classe `DeleteCommand`, que implementa o comando de deletar:

```tsx
import { Command } from '../types/Command';

export class DeleteCommand implements Command {
  execute() {
    console.log("Deletando item...");
    // lógica de deletar
  }
}
```

### app/commands/SaveCommand.ts

Este arquivo contém a classe `SaveCommand`, que implementa o comando de salvar:

```tsx
import { Command } from '../types/Command';

export class SaveCommand implements Command {
  execute() {
    console.log("Salvando dados...");
    // lógica de salvar
  }
}
```

### app/components/Button.tsx

O componente `Button` recebe um comando e executa sua ação quando clicado:

```tsx
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
```

### app/types/Command.ts

Aqui é definida a interface `Command`, que garante que todos os comandos implementem o método `execute`:

```ts
export interface Command {
  execute(): void;
}
```

### app/page.tsx

No arquivo `page.tsx`, os comandos são passados para os botões, permitindo que o código de lógica (salvar ou deletar) seja separado da interface:

```tsx
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
```

## Como Rodar o Projeto

1. Clone o repositório:
    
```bash
  git clone <url-do-repositorio>
```
    
2. Instale as dependências:
    
```bash
  npm install
```
    
3. Inicie o servidor de desenvolvimento:
    
```bash
  npm run dev
```
    
4. Acesse o projeto no seu navegador em `http://localhost:3000`.

## Conclusão

O **Command Pattern** é uma técnica poderosa para desacoplar a lógica da interface e facilitar a manutenção de aplicativos. Ao usar esse padrão, você pode garantir que sua aplicação seja mais modular, escalável e fácil de testar.

Esse projeto é uma ótima base para explorar o **Command Pattern** em suas próprias aplicações.