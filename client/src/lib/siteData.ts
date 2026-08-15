/*
 * BLUEPRINT OBSIDIAN — Dados centrais do site.
 * Fonte: informações reais fornecidas pelo Anderson (briefing + portfólio anterior).
 * Regra dura: nunca inventar métricas, empresas ou experiências.
 */

export const LINKS = {
  github: "https://github.com/AndersonPS94",
  linkedin: "https://www.linkedin.com/in/andersonps94/",
  googlePlay: "https://play.google.com/store/apps/developer?id=AndersonPS",
  email: "mailto:andersonpsdev@gmail.com",
  scanGoPlay: "https://play.google.com/store/apps/details?id=com.teamkoders.scango",
  taskEnginePlay: "https://play.google.com/store/apps/details?id=org.andersonps.taskengine",
  parklyPlay: "https://play.google.com/store/apps/details?id=com.andersonps.parkly",
  cashlyGithub: "https://github.com/AndersonPS94/Cashly-AndroidApp",
  githubProfile: "AndersonPS94",
};

export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  icon?: string;
  playStore?: string;
  githubRepo?: string;
  status?: string;
  openSource?: boolean;
  context: string;
  problem: string;
  solution: string;
  architecture: string[];
  result?: string;
  highlighted?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "parkly",
    number: "01",
    name: "Parkly",
    tagline: "SaaS para gerenciamento de estacionamentos",
    description:
      "Aplicação multiplataforma construída com Kotlin Multiplatform e Compose Multiplatform, estruturada para compartilhar código entre Android e outras plataformas, com persistência offline via SQLDelight e sincronização em nuvem com Firebase.",
    technologies: [
      "Kotlin",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "MVVM",
      "Koin",
      "SQLDelight",
      "Firebase",
    ],
    image: "/manus-storage/parkly-phone_1d4d9251.png",
    playStore: "https://play.google.com/store/apps/details?id=com.andersonps.parkly",
    highlighted: true,
    context:
      "Gerenciar operações de estacionamento — entradas, saídas, histórico e ocupação — de maneira centralizada e confiável, com possibilidade de expansão para múltiplas plataformas.",
    problem:
      "Soluções existentes frequentemente travam o usuário em uma única plataforma e dependem 100% de conectividade, o que compromete operações em locais com sinal instável.",
    solution:
      "Uma aplicação estruturada com arquitetura moderna e compartilhamento de código entre plataformas via KMP, persistência local com SQLDelight (offline-first) e sincronização em nuvem com Firebase.",
    architecture: ["UI (Compose Multiplatform)", "ViewModel", "Repository", "SQLDelight (local) / Firebase (cloud)"],
    result:
      "App publicado na Google Play, com base de código compartilhada entre plataformas, operação offline sem perda de dados e funcionalidades Pro com IA, OCR de placas e impressão térmica Bluetooth.",
  },
  {
    id: "scango",
    number: "02",
    name: "ScanGo",
    tagline: "Scanner inteligente de códigos",
    description:
      "Aplicativo Android para leitura de códigos de barras e QR Codes utilizando CameraX e Google ML Kit, com classificação inteligente do conteúdo identificado. Publicado na Google Play.",
    technologies: ["Kotlin", "Android", "CameraX", "ML Kit", "Jetpack Compose"],
    image: "/manus-storage/scango-phone_8d818dba.png",
    playStore: "https://play.google.com/store/apps/details?id=com.teamkoders.scango",
    context:
      "Leitura rápida de QR Codes e códigos de barras no dia a dia, com organização do histórico de leituras.",
    problem:
      "Scanners comuns apenas leem o código, sem oferecer organização, contexto ou classificação do conteúdo encontrado.",
    solution:
      "Integração do CameraX com o Google ML Kit para detecção rápida e classificação inteligente do conteúdo identificado, dentro de uma interface minimalista construída com Jetpack Compose.",
    architecture: ["UI (Jetpack Compose)", "ViewModel", "Repository", "CameraX + ML Kit"],
    result:
      "App publicado na Google Play, com leitura rápida e classificação automática do tipo de conteúdo escaneado.",
  },
  {
    id: "cashly",
    number: "04",
    name: "Cashly",
    tagline: "Controle financeiro pessoal inteligente",
    description:
      "Gerenciador de finanças pessoais de alta performance construído com Clean Architecture modularizada (:app, :core, :domain, :data) e Jetpack Compose, preparado para os padrões Android 16/17 — relatórios em PDF, widget Glance, gráficos dinâmicos, biometria e prontidão para interações via IA com AppFunctions. Em fase de publicação na Google Play.",
    technologies: [
      "Kotlin 2.3+",
      "Jetpack Compose",
      "Material 3 Adaptive",
      "Clean Architecture",
      "Hilt",
      "Room",
      "DataStore",
      "Retrofit",
      "Coroutines & Flow",
      "Vico Charts",
    ],
    image: "/manus-storage/cashly-phone_1759d785.png",
    icon: "/manus-storage/cashly-icon-v2_eebd4629.png",
    githubRepo: "https://github.com/AndersonPS94/Cashly-AndroidApp",
    context:
      "Controlar gastos, orçamentos e metas financeiras com precisão e sem comprometer a bateria ou a privacidade do usuário.",
    problem:
      "Aplicativos de finanças costumam enviar dados a servidores externos, pesar na bateria com cálculos ineficientes e não se adaptar a tablets e dobráveis.",
    solution:
      "Arquitetura Clean modularizada com dados 100% locais (Room + DataStore), cálculos otimizados para complexidade O(N), segurança biométrica nativa e UI adaptativa real com Material 3 Adaptive Suite.",
    architecture: ["UI (Compose · Material 3)", "ViewModel", "Use Cases (:domain)", "Repository (:data · Room + DataStore)"],
    result:
      "Experiência de nível empresarial: scroll a 120Hz, dashboard com gráficos Vico, relatórios PDF mensais, exportação CSV, widget Glance e preparação completa para publicação na Google Play (v1.5).",
    status: "Em publicação",
    openSource: true,
  },
  {
    id: "task-engine",
    number: "03",
    name: "Task Engine",
    tagline: "Tarefas com gamificação e progressão",
    description:
      "Aplicativo de gerenciamento de tarefas com sistema de gamificação, XP e progressão do usuário. Envolve gerenciamento de estado, persistência de dados e organização de arquitetura Android.",
    technologies: ["Kotlin", "Android", "Jetpack Compose", "MVVM", "Persistência local"],
    image: "/manus-storage/taskengine-phone_f5087464.png",
    context:
      "Tornar o acompanhamento de tarefas mais engajador, transformando produtividade em progressão visível.",
    problem:
      "Listas de tarefas tradicionais não oferecem feedback de progresso, o que reduz a consistência do uso ao longo do tempo.",
    solution:
      "Um sistema de gamificação com XP e progressão do usuário, gerenciamento de estado com ViewModel e persistência local para manter o progresso salvo entre sessões.",
    architecture: ["UI (Jetpack Compose)", "ViewModel", "Repository", "Persistência local"],
    result:
      "Mecânica de progressão que incentiva o uso consistente, com estado e persistência estruturados em camadas.",
  },
];

export const STACK_CATEGORIES = [
  {
    title: "Linguagem & Coroutines",
    items: [
      "Kotlin",
      "Java",
      "Coroutines",
      "Flow",
      "StateFlow / SharedFlow",
      "Sealed Classes",
      "Extension Functions",
      "Reified Generics",
    ],
  },
  {
    title: "UI & Jetpack Compose",
    items: [
      "Jetpack Compose",
      "Material 3",
      "Material 3 Adaptive",
      "Navigation Compose",
      "Glance Widgets",
      "ConstraintLayout",
      "View Binding",
      "Animation & MotionLayout",
    ],
  },
  {
    title: "Arquitetura & Padrões",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVI",
      "Repository Pattern",
      "SOLID",
      "Design Patterns",
      "Multi-module",
      "Feature-first",
    ],
  },
  {
    title: "Injeção & Ciclo de Vida",
    items: ["Hilt", "Koin", "ViewModel", "Lifecycle", "WorkManager", "AppStartup"],
  },
  {
    title: "Rede & Dados",
    items: ["Retrofit", "OkHttp", "Ktor Client", "REST APIs", "Serialization", "Protobuf"],
  },
  {
    title: "Persistência & Multiplatform",
    items: [
      "Room",
      "DataStore",
      "SQLDelight",
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "KMP Shared Modules",
    ],
  },
  {
    title: "Backend / Cloud & IA",
    items: ["Firebase (Auth · FCM · Firestore)", "Google ML Kit", "CameraX", "OCR", "Cloud Build"],
  },
  {
    title: "Testes & Qualidade",
    items: [
      "JUnit",
      "MockK",
      "Turbine",
      "Compose Testing",
      "Unit Tests",
      "Code Review",
      "Ktlint",
      "Detekt",
    ],
  },
  {
    title: "DevOps & Publicação",
    items: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Google Play Console",
      "App Bundles (AAB)",
      "Release Tracks",
      "Firebase App Distribution",
    ],
  },
];

export const ENGINEERING_CONCEPTS = [
  {
    title: "Clean Code",
    description: "Código legível e autoexplicativo como documento vivo do projeto.",
  },
  {
    title: "SOLID",
    description: "Princípios de design orientado a objeto aplicados de forma pragmática.",
  },
  {
    title: "MVVM",
    description: "Separação entre interface, estado e lógica de negócio.",
  },
  {
    title: "Dependency Injection",
    description: "Injeção com Koin: componentes desacoplados e testáveis.",
  },
  {
    title: "Reactive Programming",
    description: "Coroutines e Flow para fluxos assíncronos previsíveis.",
  },
  {
    title: "Offline First",
    description: "Persistência local que mantém o app funcional sem rede.",
  },
  {
    title: "CI/CD",
    description: "Integração contínua e automação com GitHub Actions.",
  },
  {
    title: "Testing",
    description: "Testabilidade como consequência natural da arquitetura.",
  },
  {
    title: "Performance",
    description: "Atenção a listas, recomposição e uso de memória no Android.",
  },
];

export const ARCHITECTURE_LAYERS = [
  {
    name: "UI",
    detail: "Jetpack Compose / Compose Multiplatform",
    note: "Composição declarativa de interfaces, sem lógica de negócio.",
  },
  {
    name: "ViewModel",
    detail: "State holders",
    note: "Expõe estado observável via StateFlow; sobrevive a mudanças de configuração.",
  },
  {
    name: "Use Cases",
    detail: "Casos de uso",
    note: "Regras de negócio isoladas em classes únicas e testáveis.",
  },
  {
    name: "Repository",
    detail: "Camada de domínio",
    note: "Abstrai a origem dos dados: local ou remoto.",
  },
  {
    name: "Data Sources",
    detail: "SQLDelight · Firebase · REST",
    note: "Persistência local offline-first e sincronização em nuvem.",
  },
];

export const TIMELINE = [
  {
    year: "Tecnólogo",
    title: "Análise e Desenvolvimento de Sistemas",
    detail: "Graduação concluída em desenvolvimento de software.",
  },
  {
    year: "Especialização",
    title: "Blue Team Operation — FIAP",
    detail: "Pós-graduação em segurança ofensiva/defensiva de sistemas.",
  },
  {
    year: "Foco atual",
    title: "Android & Multiplatform",
    detail: "Kotlin, Compose, KMP, arquitetura e CI/CD mobile.",
  },
];

export const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: ["Comandos disponíveis: whoami, stack, skills, contact, clear"],
  whoami: ["Android Developer"],
  stack: ["Kotlin · Compose · KMP · Firebase"],
  skills: ["CameraX · ML Kit · SQLDelight · Koin · Ktor · Coroutines · Flow"],
  contact: ["LinkedIn: /in/andersonps94", "GitHub: /AndersonPS94", "Email: andersonpsdev@gmail.com"],
  clear: [],
};
