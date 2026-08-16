/* BLUEPRINT OBSIDIAN — Dicionário de internacionalização PT/EN.
   Chaves seguem o texto em português. Idiomas disponíveis: pt, en.
   Regra: tradução natural de desenvolvedor, nunca tradução literal. */

export type Dict = {
  nav: {
    about: string;
    experience: string;
    stack: string;
    projects: string;
    architecture: string;
    githubSection: string;
    apps: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaProjects: string;
    github: string;
    scroll: string;
    figLabel: string;
    liveLabel: string;
    scaleLabel: string;
    cards: Record<string, string>;
  };
  about: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    intro: string;
    intro2: string;
    stats: {
      appsBuilt: string;
      appsPublished: string;
      stackCats: string;
    };
    figLabel: string;
    location: string;
    journey: string;
    timeline: {
      degree: string;
      degreeTitle: string;
      degreeDetail: string;
      spec: string;
      specTitle: string;
      specDetail: string;
      focus: string;
      focusTitle: string;
      focusDetail: string;
    };
    terminal: Record<string, string> & {
      header: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    jobTitle: string;
    jobCompany: string;
    jobType: string;
    jobPeriod: string;
    jobLocation: string;
    jobDescription: string;
    responsibilities: string;
    responsibilityItems: string[];
    jobFooterStack: string;
    jobFooterPractices: string;
    figLabel: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: string[];
    stackItems: Record<string, string[]>;
    concepts: Record<string, string>;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewCase: string;
    viewPlayStore: string;
    viewRepo: string;
    repoLabel: string;
    publishedBanner: string;
    publishedBannerSub: string;
    statusPublished: string;
    statusPublishing: string;
    statusHighlight: string;
    projectLabel: string;
    stackLabel: string;
    result: string;
    figLabel: string;
    revLabel: string;
  };
  projectDialog: {
    context: string;
    problem: string;
    solution: string;
    architecture: string;
    technologies: string;
    result: string;
    close: string;
    viewPlayStore: string;
    viewRepo: string;
  };
  architecture: {
    eyebrow: string;
    title: string;
    subtitle: string;
    flowLabel: string;
    unidirectional: string;
    principlesLabel: string;
    layerDetail: Record<string, string>;
    layerNote: Record<string, string>;
    principles: { title: string; description: string }[];
  };
  apps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    developerPage: string;
    downloads: string;
    downloadsCount: string;
    downloadsFew: string;
    category: string;
    categoryTools: string;
    categoryLifestyle: string;
    categoryFinance: string;
    statusAppBuilt: string;
    statusStoreReview: string;
    statusComingSoon: string;
    description: string;
    openStore: string;
    published: string;
    launched: string;
    publishing: string;
    descriptions: Record<string, string>;
  };
  githubSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reposIntro: string;
    repoCount: string;
    accessGithub: string;
    viewRepo: string;
    highlighted: string;
    publishedNote: string;
    publishedNoteDetail: string;
    repoDescriptions: Record<string, string>;
    reposExtra: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    titleQ: string;
    availability: string;
    linkedin: string;
    cta: string;
    email: string;
    copyEmail: string;
    emailCopied: string;
    figLabel: string;
  };
  footer: {
    role: string;
    year: string;
    sfx: string;
    sfxOn: string;
    sfxOff: string;
  };
  projectCards: Record<
    "parkly" | "scango" | "taskEngine" | "cashly",
    { tagline: string; context: string; problem: string; solution: string; technologies: string; result: string; status: string }
  >;
  archLayers: {
    ui: { detail: string; note: string };
    viewModel: { detail: string; note: string };
    useCases: { detail: string; note: string };
    repository: { detail: string; note: string };
    dataSources: { detail: string; note: string };
  };
  misc: {
    scrollExplore: string;
    tech: string;
    cloud: string;
    platform: string;
    uiLabel: string;
    loading: string;
  };
};

const pt: Dict = {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    stack: "Stack",
    projects: "Projetos",
    architecture: "Arquitetura",
    githubSection: "GitHub",
    apps: "Apps",
    contact: "Contato",
  },
  hero: {
    eyebrow: "ANDROID DEVELOPER",
    title: "Transformando ideias em experiências Android.",
    subtitle:
      "Desenvolvedor Android focado em criar aplicações modernas, escaláveis e orientadas à experiência do usuário, utilizando Kotlin, Jetpack Compose e arquiteturas modernas.",
    ctaProjects: "Ver projetos",
    github: "GitHub",
    scroll: "SCROLL TO EXPLORE",
    figLabel: "FIG. 01 — ANDROID SYSTEM",
    liveLabel: "LIVE",
    scaleLabel: "SCALE 1:1",
    cards: {
      kotlin: "linguagem",
      compose: "UI declarativa",
      kmp: "multiplatform",
      firebase: "cloud",
    },
  },
  about: {
    eyebrow: "01 / Sobre",
    titlePart1: "Arquitetura antes da",
    titlePart2: "primeira linha de código",
    intro:
      "Sou Anderson Santos, desenvolvedor Android apaixonado por tecnologia, arquitetura e criação de produtos. Acredito que um bom app nasce de decisões de engenharia bem tomadas antes da primeira linha de código — arquitetura limpa, código testável e interfaces que respeitam o usuário.",
    intro2:
      "Especializado em Kotlin, Jetpack Compose e Kotlin Multiplatform, com formação em Análise e Desenvolvimento de Sistemas e especialização em Blue Team Operation pela FIAP — o que agrega uma visão de segurança e operação aos produtos que construo.",
    stats: {
      appsBuilt: "Apps Android construídos",
      appsPublished: "Apps publicados na Play Store",
      stackCats: "Categorias de stack dominadas",
    },
    figLabel: "FIG. 02 — DOSSIER",
    location: "RIO DE JANEIRO · BR",
    journey: "// trajetória",
    timeline: {
      degree: "Graduação",
      degreeTitle: "Análise e Desenvolvimento de Sistemas",
      degreeDetail: "Concluída",
      spec: "Especialização",
      specTitle: "Blue Team Operation — FIAP",
      specDetail: "Cyber Security",
      focus: "Foco atual",
      focusTitle: "Android, Compose & KMP",
      focusDetail: "Arquitetura · CI/CD",
    },
    terminal: {
      header: "terminal do anderson — digite 'help' para ver os comandos",
      help: "Comandos disponíveis: whoami, stack, skills, contact, clear",
      whoami: "Android Developer",
      stack: "Kotlin · Compose · KMP · Firebase",
      skills: "CameraX · ML Kit · SQLDelight · Koin · Ktor · Coroutines · Flow",
      contact: "LinkedIn: /in/andersonps94 · GitHub: /AndersonPS94 · Email: andersonpsdev@gmail.com",
    },
  },
  experience: {
    eyebrow: "02 / Experiência",
    title: "Em produção",
    subtitle:
      "Primeira posição profissional atuando como desenvolvedor Android em ritmo de produção — integração contínua, código revisado e apps rodando para usuários reais.",
    jobTitle: "Desenvolvedor Android Java",
    jobCompany: "Solution TI",
    jobType: "Tempo integral",
    jobPeriod: "ago de 2026 — Atualmente",
    jobLocation: "Barra da Tijuca, Rio de Janeiro, Brasil · Remoto",
    jobDescription:
      "Atuo como Desenvolvedor Android Júnior, trabalhando principalmente com Java no desenvolvimento e manutenção de aplicações Android.",
    responsibilities: "Principais responsabilidades:",
    responsibilityItems: [
      "Desenvolvimento e manutenção de aplicações Android utilizando Java.",
      "Integração com APIs e serviços da empresa para implementação de novas funcionalidades.",
      "Correção de bugs e manutenção evolutiva das aplicações.",
      "Análise e resolução de problemas técnicos.",
      "Criação e manutenção de documentação técnica dos projetos.",
      "Aplicação de princípios SOLID e boas práticas de desenvolvimento.",
      "Contribuição para a evolução, estabilidade e qualidade das aplicações Android.",
    ],
    jobFooterStack: "Android · Java · APIs REST",
    jobFooterPractices: "SOLID · Documentação técnica",
    figLabel: "FIG. 03 — PROFESSION",
  },
  stack: {
    eyebrow: "03 / Stack",
    title: "Tech Stack",
    subtitle:
      "Ferramentas e padrões que uso no dia a dia para construir apps Android e multiplataforma com qualidade de engenharia.",
    categories: [
      "Linguagem & Coroutines",
      "UI & Jetpack Compose",
      "Arquitetura & Padrões",
      "Injeção & Ciclo de Vida",
      "Rede & Dados",
      "Persistência & Multiplatform",
      "Backend / Cloud & IA",
      "Testes & Qualidade",
      "DevOps & Publicação",
    ],
    stackItems: {
      "Linguagem & Coroutines": [
        "Kotlin",
        "Java",
        "Coroutines",
        "Flow",
        "StateFlow / SharedFlow",
        "Sealed Classes",
        "Extension Functions",
        "Reified Generics",
      ],
      "UI & Jetpack Compose": [
        "Jetpack Compose",
        "Material 3",
        "Material 3 Adaptive",
        "Navigation Compose",
        "Glance Widgets",
        "ConstraintLayout",
        "View Binding",
        "Animation & MotionLayout",
      ],
      "Arquitetura & Padrões": [
        "Clean Architecture",
        "MVVM",
        "MVI",
        "Repository Pattern",
        "SOLID",
        "Design Patterns",
        "Multi-module",
        "Feature-first",
      ],
      "Injeção & Ciclo de Vida": ["Hilt", "Koin", "ViewModel", "Lifecycle", "WorkManager", "AppStartup"],
      "Rede & Dados": ["Retrofit", "OkHttp", "Ktor Client", "REST APIs", "Serialization", "Protobuf"],
      "Persistência & Multiplatform": [
        "Room",
        "DataStore",
        "SQLDelight",
        "Kotlin Multiplatform",
        "Compose Multiplatform",
        "KMP Shared Modules",
      ],
      "Backend / Cloud & IA": [
        "Firebase (Auth · FCM · Firestore)",
        "Google ML Kit",
        "CameraX",
        "OCR",
        "Cloud Build",
      ],
      "Testes & Qualidade": [
        "JUnit",
        "MockK",
        "Turbine",
        "Compose Testing",
        "Unit Tests",
        "Code Review",
        "Ktlint",
        "Detekt",
      ],
      "DevOps & Publicação": [
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Google Play Console",
        "App Bundles (AAB)",
        "Release Tracks",
        "Firebase App Distribution",
      ],
    },
    concepts: {
      "Clean Code": "Readability and self-explanatory code as the living documentation of a project.",
      SOLID: "Object-oriented design principles applied pragmatically.",
      MVVM: "Separation between interface, state, and business logic.",
      "Dependency Injection": "Injection with Koin: decoupled, testable components.",
      "Reactive Programming": "Coroutines and Flow for predictable asynchronous streams.",
      "Offline First": "Local persistence that keeps the app functional without a network.",
      "CI/CD": "Continuous integration and automation with GitHub Actions.",
      Testing: "Testability as a natural consequence of the architecture.",
      Performance: "Attention to lists, recomposition, and memory usage on Android.",
    },
  },
  projects: {
    eyebrow: "04 / Projetos",
    title: "Projetos selecionados",
    subtitle:
      "Aplicações reais, projetadas e desenvolvidas por mim — da arquitetura ao app publicado na Google Play.",
    viewCase: "Ver case study",
    viewPlayStore: "Ver na Google Play",
    viewRepo: "Ver no GitHub",
    repoLabel: "Repositório",
    publishedBanner: "PROJETO 04 — EM PUBLICAÇÃO",
    publishedBannerSub:
      "O próximo app da linha de produção: Clean Architecture modularizada, dados 100% locais, Material 3 Adaptive e pronto para a Google Play.",
    statusPublished: "Publicado",
    statusPublishing: "Em publicação",
    statusHighlight: "Destaque",
    stackLabel: "Stack",
    result: "Resultado",
    figLabel: "FIG. 04 — BLUEPRINT",
    revLabel: "REV. A",
    projectLabel: "PROJECT",
  },
  projectDialog: {
    context: "Contexto",
    problem: "Problema",
    solution: "Solução",
    architecture: "Arquitetura",
    technologies: "Tecnologias",
    result: "Resultado",
    close: "Fechar",
    viewPlayStore: "Ver na Google Play",
    viewRepo: "Ver no GitHub",
  },
  architecture: {
    eyebrow: "05 / Arquitetura",
    title: "Como penso software",
    subtitle:
      "Camadas com responsabilidade única: cada componente sabe uma coisa e a faz bem. É o que torna o código testável, escalável e sustentável a longo prazo.",
    flowLabel: "fluxo de dependência ↓",
    unidirectional: "unidirecional",
    principlesLabel: "princípios que guiam",
    layerDetail: {
      UI: "Jetpack Compose / Compose Multiplatform",
      ViewModel: "State holders",
      "Use Cases": "Casos de uso",
      Repository: "Camada de domínio",
      "Data Sources": "SQLDelight · Firebase · REST",
    },
    layerNote: {
      UI: "Composição declarativa de interfaces, sem lógica de negócio.",
      ViewModel: "Expõe estado observável via StateFlow; sobrevive a mudanças de configuração.",
      "Use Cases": "Regras de negócio isoladas em classes únicas e testáveis.",
      Repository: "Abstrai a origem dos dados: local ou remoto.",
      "Data Sources": "Persistência local offline-first e sincronização em nuvem.",
    },
    principles: [
      { title: "SOLID", description: "Princípios que sustentam a separação de responsabilidades." },
      { title: "Clean Architecture", description: "Camadas organizadas por papel, não por tecnologia." },
      { title: "Testabilidade", description: "Cada camada testável isoladamente, sem dependências concretas." },
      { title: "Escalabilidade", description: "Novos recursos entram como módulos, não como emendas." },
    ],
  },
  apps: {
    eyebrow: "06 / Google Play",
    title: "Apps na Google Play",
    subtitle:
      "Três aplicações publicadas na Google Play no perfil AndersonPS — do scanner inteligente ao SaaS de estacionamento — e o próximo lançamento em rota de publicação.",
    developerPage: "Página de desenvolvedor",
    downloads: "Downloads",
    downloadsCount: "100+",
    downloadsFew: "10+",
    category: "Categoria",
    categoryTools: "Ferramentas",
    categoryLifestyle: "Estilo de vida",
    description: "Descrição",
    openStore: "Abrir na Play Store",
    published: "Publicado",
    launched: "Lançado",
    publishing: "Em publicação",
    descriptions: {
      scango:
        "Leitura, geração e organização inteligente de QR Codes e códigos de barras, com verificação de conteúdo por IA, OCR via câmera e conversão de texto para PDF.",
      taskEngine:
        "Gerenciamento de tarefas gamificado: progresso, recompensas e desafios que transformam a organização diária em uma experiência mais motivadora.",
      parkly:
        "Gerenciamento completo de estacionamentos com IA e automação: controle de entradas e saídas, mensalistas, cobrança fracionada, impressão térmica e OCR de placas.",
      cashly:
        "Controle de receitas e despesas com dados 100% locais (Room + DataStore), biometria, relatórios em PDF, widget Glance e Clean Architecture modularizada — em fase final de publicação.",
    },
    categoryFinance: "Finanças",
    statusAppBuilt: "App v1.5 pronto para publicação",
    statusStoreReview: "Em revisão na Google Play",
    statusComingSoon: "Disponível em breve",
  },
  githubSection: {
    eyebrow: "07 / GitHub",
    title: "Código aberto.",
    subtitle:
      "Projetos pessoais com código público no GitHub — experimentos, KMP e fundamentos que sustentam os apps da loja.",
    reposIntro:
      "Dos meus 98 repositórios públicos, destaco os projetos em Kotlin e Kotlin Multiplatform que servem de base para as aplicações publicadas.",
    repoCount: "repositórios públicos",
    accessGithub: "Acessar GitHub",
    viewRepo: "Ver repositório e documentação",
    highlighted: "Em destaque — próxima publicação na Google Play",
    publishedNote: "Código fechado",
    publishedNoteDetail:
      "ScanGO, Task Engine e Parkly são aplicativos publicados e mantêm o código fechado — como é comum em produtos de produção.",
    repoDescriptions: {
      cashly: "Finanças pessoais · Kotlin 2.3 · Clean Architecture · v1.5 em publicação na Play Store",
      washflow: "App multiplataforma com Kotlin Multiplatform",
      saudeEmDia: "App multiplataforma com Kotlin Multiplatform",
    },
    reposExtra: "+ 95 repositórios públicos · Kotlin · Swift · Java · Groovy",
  },
  contact: {
    eyebrow: "08 / Contato",
    title: "Próximo commit",
    titleQ: "Começa aqui?",
    subtitle:
      "Se você tem um produto Android que precisa sair do papel — ou uma vaga que precisa de alguém que já publicou apps na Play Store — essa conversa pode ser a mais rápida da sua semana.",
    availability: "STATUS: disponível para entrevistas · resposta em até 24h",
    linkedin: "LinkedIn",
    email: "Email",
    copyEmail: "Copiar email",
    emailCopied: "Email copiado!",
    cta: "Entrar em contato",
    figLabel: "FIG. 08 — TRANSMISSION",
  },
  footer: {
    role: "Android Developer",
    year: "© 2026 Anderson Santos",
    sfx: "SFX",
    sfxOn: "on",
    sfxOff: "off",
  },
  misc: {
    scrollExplore: "SCROLL TO EXPLORE",
    tech: "tech",
    cloud: "cloud",
    platform: "platform",
    uiLabel: "UI declarativa",
    loading: "Carregando…",
  },
  projectCards: {
    parkly: {
      tagline: "SaaS de estacionamento com controle de entradas e saídas, mensalistas e IA.",
      context:
        "Estacionamentos, garagens residenciais e pequenas lotas precisam de controle de veículos: quem entrou, quando saiu e quem está adimplente. Soluções prontas são caras ou genéricas demais.",
      problem:
        "Cadernos de papel, planilhas e apps genéricos não atendem o fluxo de quem cobra por vaga: o cadastro de mensalistas, a cobrança fracionada e a leitura manual de placas geram retrabalho e erros.",
      solution:
        "Um app Android completo com registro de entradas/saídas, gestão de mensalistas, cobrança fracionada de horas, leitura de placas por OCR e impressão térmica via Bluetooth — tudo em um produto enxuto e pensado para o dia a dia do operador.",
      technologies: "Kotlin · Jetpack Compose · CameraX · ML Kit (OCR) · Firebase · Arquitetura limpa",
      result: "Publicado na Google Play — um produto real, pronto para operar estacionamentos de pequeno e médio porte.",
      status: "Publicado",
    },
    scango: {
      tagline: "Scanner inteligente com OCR e conversão para PDF em segundos.",
      context:
        "Documentos físicos continuam fazendo parte do dia a dia de estudantes e profissionais: recibos, contratos, anotações e formulários precisam ser digitalizados com rapidez e qualidade.",
      problem:
        "Apps de scanner consagrados são pesados, repletos de anúncios e exigem conta e assinatura para recursos básicos de OCR e exportação.",
      solution:
        "Um scanner leve e direto: captura pela câmera, OCR local para extrair texto e exportação para PDF — sem cadastro, sem anúncios invasivos.",
      technologies: "Kotlin · CameraX · ML Kit OCR · Jetpack Compose · Exportação PDF",
      result: "Publicado na Google Play com mais de 100 downloads na categoria Ferramentas.",
      status: "Publicado",
    },
    taskEngine: {
      tagline: "Gestão de tarefas com gamificação para engajamento real.",
      context:
        "Todo mundo usa listas de tarefas — mas poucos conseguem mantê-las. A procrastinação vence quando a lista não dá feedback: só trabalho acumulado, sem sensação de progresso.",
      problem:
        "Apps de produtividade tradicionais tratam tarefas como burocracia: adicionar, riscar, esquecer. Falta o loop de recompensa que mantém o hábito.",
      solution:
        "Um motor de tarefas gamificado: completar tarefas gera XP, níveis e progresso visual, transformando a lista em um jogo pessoal de disciplina.",
      technologies: "Kotlin · Jetpack Compose · Persistência local · Gamificação",
      result: "Publicado na Google Play na categoria Estilo de vida.",
      status: "Publicado",
    },
    cashly: {
      tagline: "Controle financeiro pessoal com dados 100% locais e biometria.",
      context:
        "Planilhas e apps financeiros genéricos não dão o controle fino que o usuário precisa: categorias próprias, metas, relatórios e privacidade real.",
      problem:
        "Muitos apps de finanças enviam dados para a nuvem, exigem conta, mostram anúncios e travam relatórios atrás de assinaturas — o dinheiro do usuário não pode ser tratado como produto.",
      solution:
        "Cashly: controle de receitas e despesas com Room + DataStore (dados 100% locais), biometria, relatórios em PDF, widget Glance e Clean Architecture modularizada (:app/:core/:domain/:data), Material 3 Adaptive e IA pronta via AppFunctions.",
      technologies: "Kotlin 2.3+ · Clean Architecture · Room · DataStore · Material 3 Adaptive · Biometria · Glance",
      result: "Versão 1.5 pronta para a Google Play — o próximo app da linha de produção.",
      status: "Em publicação",
    },
  },
  archLayers: {
    ui: { detail: "Jetpack Compose / Compose Multiplatform", note: "Composição declarativa das interfaces, sem lógica de negócio." },
    viewModel: { detail: "State holders", note: "Expõe estado observável via StateFlow; sobrevive a mudanças de configuração." },
    useCases: { detail: "Casos de uso", note: "Regras de negócio isoladas em classes únicas e testáveis." },
    repository: { detail: "Camada de domínio", note: "Abstrai a fonte de dados: local ou remota." },
    dataSources: { detail: "SQLDelight · Firebase · REST", note: "Persistência local offline-first e sincronização em nuvem." },
  },
};

const en: Dict = {
  nav: {
    about: "About",
    experience: "Experience",
    stack: "Stack",
    projects: "Projects",
    architecture: "Architecture",
    githubSection: "GitHub",
    apps: "Apps",
    contact: "Contact",
  },
  hero: {
    eyebrow: "ANDROID DEVELOPER",
    title: "Turning ideas into Android experiences.",
    subtitle:
      "Android developer focused on building modern, scalable, user-oriented applications with Kotlin, Jetpack Compose and modern architectures.",
    ctaProjects: "View projects",
    github: "GitHub",
    scroll: "SCROLL TO EXPLORE",
    figLabel: "FIG. 01 — ANDROID SYSTEM",
    liveLabel: "LIVE",
    scaleLabel: "SCALE 1:1",
    cards: {
      kotlin: "language",
      compose: "declarative UI",
      kmp: "multiplatform",
      firebase: "cloud",
    },
  },
  about: {
    eyebrow: "01 / About",
    titlePart1: "Architecture before the",
    titlePart2: "first line of code.",
    intro:
      "I'm Anderson Santos, an Android developer passionate about technology, architecture and product building. I believe a great app is born from solid engineering decisions made before the first line of code — clean architecture, testable code and interfaces that respect the user.",
    intro2:
      "Specialized in Kotlin, Jetpack Compose and Kotlin Multiplatform, with a degree in Systems Analysis and Development and a specialization in Blue Team Operation from FIAP — bringing a security and operations mindset to the products I build.",
    stats: {
      appsBuilt: "Android apps built",
      appsPublished: "Apps live on Play Store",
      stackCats: "Mastered stack categories",
    },
    figLabel: "FIG. 02 — DOSSIER",
    location: "RIO DE JANEIRO · BR",
    journey: "// journey",
    timeline: {
      degree: "Degree",
      degreeTitle: "Systems Analysis and Development",
      degreeDetail: "Completed",
      spec: "Specialization",
      specTitle: "Blue Team Operation — FIAP",
      specDetail: "Cyber Security",
      focus: "Current focus",
      focusTitle: "Android, Compose & KMP",
      focusDetail: "Architecture · CI/CD",
    },
    terminal: {
      header: "anderson's terminal — type 'help' to list commands",
      help: "Available commands: whoami, stack, skills, contact, clear",
      whoami: "Android Developer",
      stack: "Kotlin · Compose · KMP · Firebase",
      skills: "CameraX · ML Kit · SQLDelight · Koin · Ktor · Coroutines · Flow",
      contact: "LinkedIn: /in/andersonps94 · GitHub: /AndersonPS94 · Email: andersonpsdev@gmail.com",
    },
  },
  experience: {
    eyebrow: "02 / Experience",
    title: "In production",
    subtitle:
      "First professional role shipping Android apps in a production environment — continuous integration, reviewed code and apps running for real users.",
    jobTitle: "Android Java Developer",
    jobCompany: "Solution TI",
    jobType: "Full-time",
    jobPeriod: "Aug 2026 — present · 1 month",
    jobLocation: "Rio de Janeiro, Brazil · Remote",
    jobDescription:
      "I work as a Junior Android Developer, mainly with Java, developing and maintaining Android applications.",
    responsibilities: "Main responsibilities:",
    responsibilityItems: [
      "Developing and maintaining Android applications using Java.",
      "Integrating company APIs and services to implement new features.",
      "Bug fixing and evolutionary maintenance of the applications.",
      "Analyzing and resolving technical problems.",
      "Creating and maintaining technical documentation for the projects.",
      "Applying SOLID principles and development best practices.",
      "Contributing to the evolution, stability and quality of the Android applications.",
    ],
    jobFooterStack: "Android · Java · REST APIs",
    jobFooterPractices: "SOLID · Technical documentation",
    figLabel: "FIG. 03 — PROFESSION",
  },
  stack: {
    eyebrow: "03 / Stack",
    title: "Tech Stack",
    subtitle:
      "The tools and patterns I use daily to build Android and cross-platform apps with engineering-grade quality.",
    categories: [
      "Language & Coroutines",
      "UI & Jetpack Compose",
      "Architecture & Patterns",
      "Injection & Lifecycle",
      "Network & Data",
      "Persistence & Multiplatform",
      "Backend / Cloud & AI",
      "Testing & Quality",
      "DevOps & Publishing",
    ],
    stackItems: {
      "Language & Coroutines": [
        "Kotlin",
        "Java",
        "Coroutines",
        "Flow",
        "StateFlow / SharedFlow",
        "Sealed Classes",
        "Extension Functions",
        "Reified Generics",
      ],
      "UI & Jetpack Compose": [
        "Jetpack Compose",
        "Material 3",
        "Material 3 Adaptive",
        "Navigation Compose",
        "Glance Widgets",
        "ConstraintLayout",
        "View Binding",
        "Animation & MotionLayout",
      ],
      "Architecture & Patterns": [
        "Clean Architecture",
        "MVVM",
        "MVI",
        "Repository Pattern",
        "SOLID",
        "Design Patterns",
        "Multi-module",
        "Feature-first",
      ],
      "Injection & Lifecycle": ["Hilt", "Koin", "ViewModel", "Lifecycle", "WorkManager", "AppStartup"],
      "Network & Data": ["Retrofit", "OkHttp", "Ktor Client", "REST APIs", "Serialization", "Protobuf"],
      "Persistence & Multiplatform": [
        "Room",
        "DataStore",
        "SQLDelight",
        "Kotlin Multiplatform",
        "Compose Multiplatform",
        "KMP Shared Modules",
      ],
      "Backend / Cloud & AI": [
        "Firebase (Auth · FCM · Firestore)",
        "Google ML Kit",
        "CameraX",
        "OCR",
        "Cloud Build",
      ],
      "Testing & Quality": [
        "JUnit",
        "MockK",
        "Turbine",
        "Compose Testing",
        "Unit Tests",
        "Code Review",
        "Ktlint",
        "Detekt",
      ],
      "DevOps & Publishing": [
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Google Play Console",
        "App Bundles (AAB)",
        "Release Tracks",
        "Firebase App Distribution",
      ],
    },
    concepts: {
      "Clean Code": "Readable, self-explanatory code as the living documentation of a project.",
      SOLID: "Object-oriented design principles applied pragmatically.",
      MVVM: "Separation between interface, state, and business logic.",
      "Dependency Injection": "Injection with Koin: decoupled, testable components.",
      "Reactive Programming": "Coroutines and Flow for predictable asynchronous streams.",
      "Offline First": "Local persistence that keeps the app functional without a network.",
      "CI/CD": "Continuous integration and automation with GitHub Actions.",
      Testing: "Testability as a natural consequence of the architecture.",
      Performance: "Attention to lists, recomposition, and memory usage on Android.",
    },
  },
  projects: {
    eyebrow: "04 / Projects",
    title: "Selected projects",
    subtitle:
      "Real applications, designed and built by me — from architecture to the app published on Google Play.",
    viewCase: "View case study",
    viewPlayStore: "View on Google Play",
    viewRepo: "View on GitHub",
    repoLabel: "Repository",
    publishedBanner: "PROJECT 04 — SHIPPING SOON",
    publishedBannerSub:
      "The next app in the production line: modularized Clean Architecture, 100% local data, Material 3 Adaptive and ready for the Google Play.",
    statusPublished: "Published",
    statusPublishing: "Publishing",
    statusHighlight: "Featured",
    stackLabel: "Stack",
    result: "Result",
    figLabel: "FIG. 04 — BLUEPRINT",
    revLabel: "REV. A",
    projectLabel: "PROJECT",
  },
  projectDialog: {
    context: "Context",
    problem: "Problem",
    solution: "Solution",
    architecture: "Architecture",
    technologies: "Technologies",
    result: "Result",
    close: "Close",
    viewPlayStore: "View on Google Play",
    viewRepo: "View on GitHub",
  },
  architecture: {
    eyebrow: "05 / Architecture",
    title: "How I think software",
    subtitle:
      "Layers with a single responsibility: each component knows one thing and does it well. That's what makes the code testable, scalable and sustainable in the long run.",
    flowLabel: "dependency flow ↓",
    unidirectional: "unidirectional",
    principlesLabel: "principles that guide",
    layerDetail: {
      UI: "Jetpack Compose / Compose Multiplatform",
      ViewModel: "State holders",
      "Use Cases": "Use cases",
      Repository: "Domain layer",
      "Data Sources": "SQLDelight · Firebase · REST",
    },
    layerNote: {
      UI: "Declarative composition of interfaces, without business logic.",
      ViewModel: "Exposes observable state via StateFlow; survives configuration changes.",
      "Use Cases": "Business rules isolated in single, testable classes.",
      Repository: "Abstracts the data source: local or remote.",
      "Data Sources": "Offline-first local persistence and cloud synchronization.",
    },
    principles: [
      { title: "SOLID", description: "Principles that uphold the separation of responsibilities." },
      { title: "Clean Architecture", description: "Layers organized by role, not by technology." },
      { title: "Testability", description: "Each layer testable in isolation, without concrete dependencies." },
      { title: "Scalability", description: "New features arrive as modules, not as patches." },
    ],
  },
  apps: {
    eyebrow: "06 / Google Play",
    title: "Apps on Google Play",
    subtitle:
      "Three applications published on Google Play under the AndersonPS profile — from the smart scanner to the parking SaaS and gamified tasks — plus the next launch heading to the store.",
    developerPage: "Developer page",
    downloads: "Downloads",
    downloadsCount: "100+",
    downloadsFew: "10+",
    category: "Category",
    categoryTools: "Tools",
    categoryLifestyle: "Lifestyle",
    description: "Description",
    openStore: "Open on Play Store",
    published: "Published",
    launched: "Launched",
    publishing: "Publishing",
    descriptions: {
      scango:
        "Smart reading, generation and organization of QR Codes and barcodes, with AI-powered content verification, camera OCR and text-to-PDF conversion.",
      taskEngine:
        "Gamified task management: progress, rewards and challenges that turn daily organization into a more motivating experience.",
      parkly:
        "Complete parking lot management with AI and automation: entry/exit control, monthly subscribers, fractional billing, thermal printing and license plate OCR.",
      cashly:
        "Income and expense control with 100% local data (Room + DataStore), biometrics, PDF reports, Glance widget and modular Clean Architecture — in final publishing stage.",
    },
    categoryFinance: "Finance",
    statusAppBuilt: "App v1.5 ready to ship",
    statusStoreReview: "Under Google Play review",
    statusComingSoon: "Available soon",
  },
  githubSection: {
    eyebrow: "07 / GitHub",
    title: "Open source.",
    subtitle:
      "Personal projects with public code on GitHub — experiments, KMP and foundations that power the store apps.",
    reposIntro:
      "Among my public repositories, I highlight the Kotlin and Kotlin Multiplatform projects that serve as the foundation for the published applications.",
    repoCount: "public repositories",
    accessGithub: "Access GitHub",
    viewRepo: "View repository and documentation",
    highlighted: "Featured — next Google Play release",
    publishedNote: "Closed source",
    publishedNoteDetail:
      "ScanGO, Task Engine and Parkly are published applications and keep their code closed — as is common for production products.",
    repoDescriptions: {
      cashly: "Personal finance · Kotlin 2.3 · Clean Architecture · v1.5 heading to Google Play",
      washflow: "Multiplatform app built with Kotlin Multiplatform",
      saudeEmDia: "Multiplatform app built with Kotlin Multiplatform",
    },
    reposExtra: "+ 95 public repositories · Kotlin · Swift · Java · Groovy",
  },
  contact: {
    eyebrow: "08 / Contact",
    title: "Next commit",
    titleQ: "Starts here?",
    subtitle:
      "If you have an Android product that needs to leave the drawing board — or a role that needs someone who has already shipped apps to the Play Store — this conversation could be the fastest of your week.",
    availability: "STATUS: available for interviews · reply within 24h",
    linkedin: "LinkedIn",
    email: "Email",
    copyEmail: "Copy email",
    emailCopied: "Email copied!",
    cta: "Get in touch",
    figLabel: "FIG. 08 — TRANSMISSION",
  },
  footer: {
    role: "Android Developer",
    year: "© 2026 Anderson Santos",
    sfx: "SFX",
    sfxOn: "on",
    sfxOff: "off",
  },
  misc: {
    scrollExplore: "SCROLL TO EXPLORE",
    tech: "tech",
    cloud: "cloud",
    platform: "platform",
    uiLabel: "Declarative UI",
    loading: "Loading…",
  },
  projectCards: {
    parkly: {
      tagline: "Parking SaaS with entry/exit control, monthly subscribers and AI.",
      context:
        "Parking lots, residential garages and small lots need vehicle control: who entered, when they left, and who is up to date on payments. Ready-made solutions are too expensive or too generic.",
      problem:
        "Paper notebooks, spreadsheets and generic apps don't match the flow of anyone charging per space: subscriber management, fractional billing and manual plate reading create rework and errors.",
      solution:
        "A complete Android app with entry/exit logs, subscriber management, fractional hourly billing, OCR plate reading and Bluetooth thermal printing — all in a lean product built for the operator's daily routine.",
      technologies: "Kotlin · Jetpack Compose · CameraX · ML Kit (OCR) · Firebase · Clean Architecture",
      result: "Published on Google Play — a real product, ready to run small and mid-size parking operations.",
      status: "Published",
    },
    scango: {
      tagline: "Smart scanner with OCR and PDF export in seconds.",
      context:
        "Physical documents are still part of daily life for students and professionals: receipts, contracts, notes and forms need to be digitized quickly and with quality.",
      problem:
        "Established scanner apps are heavy, full of ads, and require an account and subscription for basic OCR and export features.",
      solution:
        "A lightweight, straightforward scanner: capture from the camera, local OCR to extract text, and PDF export — no signup, no intrusive ads.",
      technologies: "Kotlin · CameraX · ML Kit OCR · Jetpack Compose · PDF export",
      result: "Published on Google Play with over 100 downloads in the Tools category.",
      status: "Published",
    },
    taskEngine: {
      tagline: "Task management with gamification for real engagement.",
      context:
        "Everyone uses to-do lists — but few manage to keep them. Procrastination wins when the list gives no feedback: just accumulated work, with no sense of progress.",
      problem:
        "Traditional productivity apps treat tasks as bureaucracy: add, cross out, forget. They lack the reward loop that sustains the habit.",
      solution:
        "A gamified task engine: completing tasks earns XP, levels and visual progress, turning the list into a personal discipline game.",
      technologies: "Kotlin · Jetpack Compose · Local persistence · Gamification",
      result: "Published on Google Play in the Lifestyle category.",
      status: "Published",
    },
    cashly: {
      tagline: "Personal finance control with 100% local data and biometrics.",
      context:
        "Spreadsheets and generic finance apps don't provide the fine-grained control users need: custom categories, goals, reports and true privacy.",
      problem:
        "Many finance apps send data to the cloud, require an account, show ads and lock reports behind subscriptions — the user's money cannot be treated as a product.",
      solution:
        "Cashly: income and expense control with Room + DataStore (100% local data), biometrics, PDF reports, a Glance widget and modularized Clean Architecture (:app/:core/:domain/:data), Material 3 Adaptive and AI-ready via AppFunctions.",
      technologies: "Kotlin 2.3+ · Clean Architecture · Room · DataStore · Material 3 Adaptive · Biometrics · Glance",
      result: "Version 1.5 ready for Google Play — the next app in the production line.",
      status: "Publishing",
    },
  },
  archLayers: {
    ui: { detail: "Jetpack Compose / Compose Multiplatform", note: "Declarative composition of interfaces, without business logic." },
    viewModel: { detail: "State holders", note: "Exposes observable state via StateFlow; survives configuration changes." },
    useCases: { detail: "Use cases", note: "Business rules isolated in single, testable classes." },
    repository: { detail: "Domain layer", note: "Abstracts the data source: local or remote." },
    dataSources: { detail: "SQLDelight · Firebase · REST", note: "Offline-first local persistence and cloud synchronization." },
  },
};

export const dictionary = { pt, en } as const;
export type SupportedLocale = keyof typeof dictionary;
