export const siteConfig = {
  name: 'Danilo Pinto',
  role: 'Gerente / Coordenador de Sistemas e Projetos de TI',
  email: 'danilo.sipi@gmail.com',
  phone: '+55 11 98222-3514',
  phoneDisplay: '+55 (11) 98222-3514',
  location: 'Sao Paulo, Brasil',
  linkedin: 'https://www.linkedin.com/in/danilopinto',
  website: 'https://danilopinto.dstudium.com',
  whatsappMessage:
    'Ola, gostaria de conversar sobre oportunidades ou projetos - vi seu portfolio digital e achei bem interessante.',
  seo: {
    defaultTitle: 'Danilo Pinto - Gerente / Coordenador de Sistemas e Projetos de TI',
    defaultDescription:
      'Gerente / Coordenador de Sistemas e Projetos de TI com 15+ anos liderando squads e programas de transformacao digital, automacao e confiabilidade em seguros e resseguros.',
    keywords: [
      'Danilo Pinto',
      'transformacao digital',
      'resseguros',
      'automacao de processos',
      'SRE',
      'engenharia de software',
      'consultoria tecnologia',
      'delivery manager',
    ],
    ogImage: '/og-image.png',
  },
};

export const heroSection = {
  headline: 'Transformando sistemas criticos em plataformas confiaveis e escalaveis',
  subheadline:
    '15+ anos liderando transformacao digital, automacao e governanca em ambientes complexos de seguros e resseguros.',
  bio: 'Associate Director no BTG Pactual, liderando squads multidisciplinares com foco em uptime, performance e entrega de valor. Experiencia profunda em automacao, arquitetura .NET e operacoes orientadas a metricas.',
};

export type ExperienceType = 'andamento' | 'concluido' | 'marco';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: ExperienceType;
  achievements: string[];
}

export const corporateExperience: ExperienceItem[] = [
  {
    company: 'BTG Pactual',
    role: 'Associate Director | Sistemas de Resseguro',
    period: 'mar/2021 - jul/2025',
    location: 'Sao Paulo, Brasil',
    type: 'concluido',
    achievements: [
      'Lidera squads aplicando Scrum, SAFe e DevOps com 99.9% de disponibilidade em sistemas criticos de resseguro.',
      'Reestruturou arquitetura garantindo escalabilidade e ganhos de 30% em performance e estabilidade.',
      'Implantou praticas de engenharia moderna: SOLID, testes automatizados, CI/CD, conteinerizacao e versionamento Git.',
      'Reduziu SLA de sustentacao de 7 para 2 dias e backlog de chamados de 52 para menos de 10 itens.',
    ],
  },
  {
    company: 'I4Pro',
    role: 'Gerente de Negocios e Lider Tecnico de Sistemas',
    period: 'ago/2011 - fev/2021',
    location: 'Sao Paulo, Brasil',
    type: 'concluido',
    achievements: [
      'Recuperou cliente estrategico (InvestPrev/Kovr) com aumento de 49% no faturamento anual em 5 meses e queda de 65% nos incidentes.',
      'Expandiu contrato em 72%, posicionando a conta entre as tres mais rentaveis da empresa.',
      'Conduziu a criacao do ERP de Capitalizacao da Porto Seguro, da concepcao a sustentacao, combinando arquitetura, PL/SQL e .NET.',
      'Automatizou fluxos operacionais reduzindo prazos de atendimento de 14 para 4 dias uteis e criou dashboards em tempo real para decisao.',
    ],
  },
];

export const skillTags = [
  'Transformacao Digital',
  'Automacao de Processos',
  'SRE e Observabilidade',
  'Gestao de Squads Ageis',
  'Arquitetura .NET',
  'Python e Data Engineering',
  'SQL e Bancos Relacionais',
  'CI/CD e DevOps',
  'Cloud AWS e Azure',
  'Gestao de Clientes Estrategicos',
];
