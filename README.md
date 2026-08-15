# Portfólio — Anderson Santos | Android Developer

Portfólio profissional com estética **Blueprint Obsidian**: fundo grafite profundo, grid técnico, anotações de planta (DWG), tipografia Space Grotesk + JetBrains Mono e verde Kotlin (#3DDC84) como acento único.

Site publicado: [andersondev-f5heyjxz.manus.space](https://andersondev-f5heyjxz.manus.space)

## Tecnologias

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes reutilizáveis)
- **Wouter** (roteamento leve)
- **Web Audio API** (efeitos sonoros de UI, sem arquivos externos)

## Destaques

| Recurso | Descrição |
|---|---|
| Internacionalização | PT/EN completos com switch na navbar, detecção do navegador e SEO dinâmico |
| Terminal interativo | Easter egg com comandos (`whoami`, `stack`, `help`) na seção Sobre |
| Apps reais | Cards com ícones oficiais da Google Play (ScanGO, Task Engine, Parkly, Cashly) |
| Acessibilidade | Contraste elevado, alt texts descritivos, foco visível, respeita `prefers-reduced-motion` |
| Performance | Lazy-loading de imagens, preconnect de fontes, assets otimizados |
| SFX | Efeitos sonoros discretos de hover/click com toggle |

## Como rodar localmente

```bash
# instalar dependências
pnpm install

# rodar em desenvolvimento
pnpm run dev

# gerar build de produção
pnpm run build
```

A build de produção fica em `dist/` e pode ser publicada em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel).

## Configuração de variáveis

O projeto usa variáveis `VITE_*` injetadas automaticamente pelo ambiente Manus (título, favicon, analytics). Para rodar localmente, crie um `.env` na raiz:

```
VITE_APP_TITLE=Anderson Santos | Android Developer
VITE_APP_LOGO=/favicon.png
VITE_APP_ID=portfolio
```

## Licença

Uso pessoal/profissional. Não redistribuir sem autorização.
