# Ideias de Design — Portfólio Anderson Santos (Android Developer)

## Três abordagens estilísticas

### 1. Blueprint Obsidian
Estética inspirada em plantas técnicas de engenharia sobre fundo grafite profundo: linhas finas de grid, cotas, anotações monoespaçadas e um tom verde-Android contido. Transmite precisão de engenheiro e profundidade técnica.
**Probabilidade: 0.07**

### 2. Swiss Terminal Light
Base clara quase branca com tipografia suíça enorme, colunas assimétricas e detalhes de terminal. Elegante, mas diverge do pedido de direção "Dark Tech".
**Probabilidade: 0.04**

### 3. Aurora Carbon
Dark premium com superfícies de carbono e gradientes aurora verde-azulados suaves. Futurista, mas arrisca cair no clichê de "dark neon" que o briefing pede para evitar.
**Probabilidade: 0.03**

## Abordagem escolhida: **Blueprint Obsidian**

### Design Movement
Engenharia de precisão (drafting/blueprint) + design de produto contemporâneo (Linear/Vercel). O site parece um documento técnico de alta engenharia: fundo grafite quase preto, grid técnico sutil, anotações monoespaçadas, linhas de cota e acento verde Kotlin.

### Core Principles
1. **Precisão sobre ornamentação** — cada elemento visual tem função (cota, grid, anotação). Nada decorativo sem propósito.
2. **Hierarquia tipográfica extrema** — display display-display enorme contra corpo pequeno e técnico.
3. **Material técnico** — texturas de grid de blueprint, linhas de 1px, numeração de seções (01, 02...).
4. **Contenção cromática** — uma única cor de acento (verde Kotlin #3DDC84) usada cirurgicamente.

### Color Philosophy
Fundo `#0A0C0E` (obsidian) com superfícies `#111418`. O verde Kotlin (#3DDC84) é a assinatura: representa o DNA Android e aparece apenas em acentos, numeração, links ativos e micro-detalhes. Texto principal quase branco (#EDEDED), secundário cinza técnico (#8A94A0). Sem gradientes roxos, sem neon exagerado. O grid de blueprint em branco com opacidade 3-4% dá profundidade sem poluição.

### Layout Paradigm
Assimetria editorial: conteúdo ancorado à esquerda com margem de "cota técnica"; numeração de seções monoespaçada na margem; colunas desequilibradas (5/7, 4/8). Projetos apresentados como fichas técnicas numeradas com mockups de dispositivo à direita/alternando. Nada centralizado em bloco único.

### Signature Elements
1. **Grid de blueprint** de fundo (linhas finas a 3-4% de opacidade) presente em todas as seções hero e destaque.
2. **Numeração técnica monoespaçada** ("01 / SOBRE") e anotações tipo cota (`{ }`, `//`, setas ↓) em JetBrains Mono.
3. **Moldura de canto** (corner ticks) em cards premium, como cantoneiras de desenho técnico.

### Interaction Philosophy
Interações "instrumentais": hover eleva cards 2px com glow verde mínimo na borda; links com underline desenhado da esquerda para a direita; cursor custom discreto (dot + ring) que reage a elementos clicáveis (desabilitado em touch). Nada rebote, nada elástico — movimento preciso e contido.

### Animation
- Entrada: fade + translate-y(24px) com stagger de 60-80ms por elemento, ease-out cubic-bezier(0.23, 1, 0.32, 1), 400-600ms.
- Scroll: IntersectionObserver ativa reveals; números com count-up (seção de estatísticas); linhas de cota desenhadas com scaleX.
- Hero: cards flutuantes de tech (Kotlin, Compose, Firebase, KMP) com translateY oscilante lento (durações 6-10s, escalonadas), parallax sutil.
- Hover: transform scale(1.02) + border-color → verde a 40% + sombra suave, 200ms.
- Respeitar prefers-reduced-motion (desativar floats e revelar, manter apenas fade básico).

### Typography System
- **Display:** "Space Grotesk" (600/700) — geométrica, técnica, com personalidade de produto moderno.
- **Corpo:** "Space Grotesk" (400) ou "Inter" — corpo em Space Grotesk 400 para consistência; textos técnicos curtos.
- **Mono:** "JetBrains Mono" (400/500) para numeração de seções, anotações, código, badges de stack.
- Hierarquia: eyebrow mono 12px tracking-[0.2em] uppercase → display 48-88px → body 16-18px.

### Brand Essence
Portfólio-engineering de um Android Developer que pensa em arquitetura antes de código — para recrutadores e tech leads que valorizam profundidade técnica. Adjetivos: **preciso, contido, confiante**.

### Brand Voice
Tom de engenheiro sênior: frases curtas, verbos fortes, zero clichê de marketing. Sem "Bem-vindo ao meu site".
Exemplos: "Arquitetura é a primeira linha de código." / "Deploy é consequência de boas decisões."

### Wordmark & Logo
Logotipo "A." em Space Grotesk bold dentro de um frame de cantoneiras de blueprint, com ponto final verde Kotlin. Marca minimalista e memorável: `<A/>` não — melhor "A." + monograma circular com símbolo de brackets Kotlin estilizado.

### Signature Brand Color
**Verde Kotlin #3DDC84** — inconfundivelmente Android, usado com extrema contenção sobre obsidian.

## Conteúdo obrigatório (fonte: briefing + portfólio real)
- Links reais: GitHub /AndersonPS94, LinkedIn /in/andersonps94, Google Play developer AndersonPS.
- Email real do portfólio anterior: andersonpsdev@gmail.com.
- Projetos reais: ScanGo (Play Store com.app.teamkoders.scango), Task Engine, Parkly (destaque). Projetos do portfólio antigo (MetaManager, CountryExplorer) podem entrar como lista de repositórios no GitHub sem cards inventados.
- NÃO inventar métricas, empresas ou experiências. Sem barras de progresso.
- Terminal easter egg: `$ whoami` → Android Developer; `$ stack` → Kotlin · Compose · KMP · Firebase.
- SEO: title "Anderson Santos | Android Developer", OG, robots.txt, favicon.

## Style Decisions
- Verde Kotlin #3DDC84 é cor de instrumentação apenas: ações primárias, numerais, marcas de terminal, links e pontuação-chave; nunca como fill decorativo amplo em spans de headline.
- Imagens tratadas como evidência técnica: mockups e retrato dentro de moldura blueprint com callouts esquemáticos, marcas de medição e anotações estilo dossiê.
- Voz da marca: headlines como julgamentos técnicos de engenheiro sênior ("Arquitetura antes da primeira linha de código.").
- Sistema blueprint dominante: guias estruturais mais visíveis, anotações de margem, divisores estilo cota, numeração contínua ao longo de toda a página.
- Tipografia mais extrema: display maior e editorial no hero; contrastes tipográficos mais dramáticos entre seções.
- **Regra de voz do copy:** todos os títulos primários devem soar como julgamentos de engenharia sênior — declarações técnicas curtas e decisivas, não frases genéricas de landing page.
- **Regra de dominância blueprint:** cada seção principal deve conter ao menos um marcador técnico estrutural — numeração de margem, régua/linha de cota, anotação esquemática ou moldura blueprint.
- **Regra de identidade:** o "A." deve aparecer como um selo técnico com moldura de cantos blueprint e pontuação verde Kotlin, usado consistentemente na navbar, no rodapé e nos momentos-chave de marca.
