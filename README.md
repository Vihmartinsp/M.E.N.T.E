# M.E.N.T.E — Matemática ENEM Traduzida e Explicada

Protótipo educacional responsivo desenvolvido como TCC para tornar a Matemática do ENEM mais visual, guiada e acessível.

## Tecnologias

React 19, TypeScript, Vite, React Router, CSS responsivo, Lucide, Vitest/Testing Library e Playwright.

## Executar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse a URL exibida pelo Vite. Para configuração futura, copie `.env.example` para `.env` e informe a URL da API.

## Qualidade e build

```bash
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run screenshots
```

As capturas são salvas em `screenshots/`.

## Rotas

- `/`: página inicial completa;
- `/login` e `/login?tab=entrar`: acesso;
- `/login?tab=cadastro` e `/cadastro`: criação de conta;
- `/questoes`: tópicos públicos;
- `/app`: estrutura inicial da área de estudos.

## Arquitetura e autenticação

A interface visual está separada em `src/components`, as páginas em `src/pages`, conteúdo estático em `src/data`, utilitários em `src/utils` e autenticação em `src/services/auth.ts`. O mock guarda apenas nome e e-mail na sessão do navegador; senhas nunca são persistidas. Para integrar o backend, implemente a interface `AuthService` com chamadas HTTPS e substitua a instância exportada, usando `VITE_API_URL` apenas como endereço público (segredos pertencem ao servidor).

A interface referencia a logo oficial em `/assets/logo-mente-original.png`, mas o arquivo binário não faz parte deste repositório. Em cada ambiente de execução, disponibilize a imagem original em `public/assets/logo-mente-original.png`; a pasta é preservada por `public/assets/.gitkeep`. O navegador carrega essa referência sem filtros, cortes ou transformações de conteúdo.

## Escopo atual

Questões completas, simulados, videoaulas, ranking, recuperação de senha, persistência real e painel administrativo são evoluções futuras. O serviço de autenticação atual é exclusivamente demonstrativo.
