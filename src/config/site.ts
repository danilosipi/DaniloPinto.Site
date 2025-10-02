export const siteConfig = {
  name: 'Danilo Pinto',
  role: 'Gerente / Coordenador de Sistemas e Projetos de TI',
  email: 'danilo.sipi@gmail.com',
  phone: '+55 11 98222-3514',
  phoneDisplay: '+55 (11) 98222-3514',
  location: 'São Paulo, Brasil',
  linkedin: 'https://www.linkedin.com/in/danilopinto',
  website: 'https://danilopinto.dstudium.com',
  whatsappMessage:
    'Olá, gostaria de conversar sobre oportunidades ou projetos - vi seu portfólio digital e achei bem interessante.',
  seo: {
    defaultTitle: 'Danilo Pinto - Gerente / Coordenador de Sistemas e Projetos de TI',
    defaultDescription:
      'Gerente / Coordenador de Sistemas e Projetos de TI com 15+ anos liderando squads e programas de transformação digital, automação e confiabilidade em seguros e resseguros.',
    keywords: [
      'Danilo Pinto',
      'transformação digital',
      'resseguros',
      'capitalização',
      'automação de processos',
      'SRE',
      'gerente de sistemas',
      'engenharia de software',
      'consultoria de tecnologia',
      'delivery manager',
    ],
    ogImage: '/og-image.png',
  },
};

export const heroSection = {
  headline:
    'Transformando sistemas críticos em plataformas confiáveis através da liderança de pessoas',
  subheadline:
    '+15 anos unindo tecnologia e pessoas para transformar sistemas em resultados de negócio.',
  bio: 'Especialista na gestão de sistemas e transformação digital. Atuei em projetos estratégicos como a criação do ERP de Capitalização e a reestruturação do sistema de Resseguros entregando estabilidade, escalabilidade e valor ao negócio. Minha jornada é marcada por liderança de equipes ágeis, excelência em engenharia e foco em resultados reais.',
};

export type ExperienceType = 'andamento' | 'concluido' | 'marco';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: ExperienceType;
  achievements: string[];
  logo?: string;
}

export const corporateExperience: ExperienceItem[] = [
  {
    logo: '/images/logos/porto.jpg',
    company: 'PortoBank',
    role: 'Especialista & Engenheiro de Software Sênior',
    period: 'out/2025 - atualmente',
    location: 'São Paulo, Brasil',
    type: 'andamento',
    achievements: [
      'Atuo como Especialista em Sistemas, liderando iniciativas de transformação digital e automação de processos críticos no setor financeiro.',
      'Lidero squads multidisciplinares, promovendo práticas ágeis e DevOps para garantir entregas de alta qualidade e alinhadas às metas estratégicas.',
      'Implemento soluções inovadoras utilizando tecnologias modernas, como .NET, Python, SQL e plataformas em nuvem (Google Cloud), para otimizar operações e melhorar a eficiência.',
      'Desenvolvo e mantenho sistemas robustos, aplicando princípios de engenharia de software (SOLID, Design Patterns) e garantindo a escalabilidade e segurança das aplicações.',
      'Colaboro com equipes de negócios para traduzir requisitos complexos em soluções técnicas eficazes, facilitando a comunicação entre áreas e acelerando a tomada de decisões.',
      'Promovo uma cultura de melhoria contínua, incentivando a capacitação da equipe e a adoção de novas tecnologias e metodologias para enfrentar desafios emergentes no setor financeiro.',
    ],
  },
  {
    logo: '/images/logos/btg.jpg',
    company: 'BTG Pactual',
    role: 'Gerente de Sistemas & Sustentação de Plataformas',
    period: 'mar/2021 - jul/2025',
    location: 'São Paulo, Brasil',
    type: 'concluido',
    achievements: [
      'Reestruturei o sistema de Resseguro, otimizando arquitetura e modelagem de dados, o que reduziu o tempo de processamento em 30% e garantiu 99,9% de uptime em sistemas críticos.',
      'Implementei gestão ágil de alto impacto, diminuindo o backlog de chamados de 52 para menos de 10 e reduzindo o SLA de 7 para 3 dias, por meio de métricas claras e priorização eficiente.',
      'Acelerei auditorias internas em 40%, estabelecendo padrões de comunicação e governança que aumentaram a transparência e a confiabilidade.',
      'Liderei squads multidisciplinares aplicando Scrum, SAFe e DevOps, assegurando escalabilidade, qualidade e alinhamento das entregas às metas estratégicas.',
      'Formei e desenvolvi equipes multifuncionais, promovendo autonomia, cultura de melhoria contínua e capacitação em tecnologia e negócios (resseguros).',
      'Apliquei práticas modernas de engenharia (SOLID, Design Patterns, testes automatizados, CI/CD, containers) para garantir qualidade contínua, estabilidade e escalabilidade das soluções.',
      'Atuei como ponte entre tecnologia e negócios, apresentando reports executivos, traduzindo complexidade técnica em insights estratégicos e acelerando a tomada de decisão.',
      'Automatizei processos com SQL e Python, além de atuar em sustentação e correção de sistemas em C#, aumentando a eficiência operacional.',
    ],
  },
  {
    logo: '/images/logos/i4pro.jpg',
    company: 'I4Pro',
    role: 'Gerente de Negócios e Líder Técnico de Sistemas',
    period: 'ago/2011 - fev/2021',
    location: 'São Paulo, Brasil',
    type: 'concluido',
    achievements: [
      'Ao longo de quase 10 anos na i4Pro, atuei em diferentes funções que marcaram minha evolução de especialista técnico para a liderança de projetos e contas estratégicas no setor de seguros, capitalização e previdência.',
      'Como Tech Lead / Especialista em Sistemas (2011–2015), fui responsável pela criação e implantação do ERP de Capitalização da Porto Seguro do zero, garantindo alta disponibilidade e estabilidade com práticas de sustentação e GMUD. Também desenvolvi e otimizei rotinas em PL/SQL e .NET, além de contribuir para o ERP de Previdência, fortalecendo a eficiência dos processos da empresa.',
      'Como Gerente de Projetos (2015–2017), assumi a liderança da equipe de Capitalização em cenário crítico, revertendo o risco de perda do cliente. Implementei monitoramento de incidentes e KPIs semanais, reduzindo o tempo de resposta em 60%. Garanti entregas end-to-end dentro do prazo, assegurando excelência operacional e reduzindo o retrabalho em 60% por meio de treinamentos técnicos e de negócio.',
      'Como Gerente de Contas (2017–2021), liderei a recuperação da conta InvestPrev/Kovr Seguros em um momento de crise de confiança. Os resultados incluíram +49% de faturamento em 5 meses, –65% de incidentes reportados e expansão de 72% no contrato, tornando a conta uma das três mais rentáveis da empresa. Também implementei automação de fluxos e dashboards em tempo real (Power BI/Excel), reduzindo prazos de atendimento de 14 para 4 dias úteis e acelerando as decisões em 40%.',
    ],
  },
];

export const skillTags = [
  'Transformação Digital',
  'Automação de Processos',
  'SRE e Observabilidade',
  'Gestão de Squads Ágeis (Scrum, SAFe, Kanban)',
  'Arquitetura .NET',
  'Microsserviços',
  'Python',
  'Data Engineering',
  'SQL',
  'Bancos Relacionais (SQL Server, Oracle, MongoDB)',
  'CI/CD e DevOps (Azure DevOps, GitHub Actions, Jenkins)',
  'Cloud AWS',
  'Azure',
  'Integração de Sistemas',
  'APIs',
  'Boas Práticas de Engenharia (SOLID, Design Patterns, TDD/BDD)',
  'Governança de TI',
  'Auditoria',
  'Compliance',
  'Gestão de Clientes Estratégicos e Stakeholders',
  'Liderança Técnica',
  'Mentoria de Equipes',
  'Inteligência Artificial Generativa',
  'Automação Inteligente',
];

export interface InfoItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  logo?: string;
}

export const academicExperience: InfoItem[] = [
  {
    logo: '/images/logos/ibmec.jpg',
    title: 'Pós-Graduação em Digital Manager & Metodologias Ágeis',
    institution: 'Instituto Brasileiro de Mercado de Capitais (IBMEC-SP)',
    period: '2022 - 2023',
    description:
      'Formação voltada para liderança digital, unindo gestão de projetos, metodologias ágeis (Scrum, Kanban, SAFe) e tendências emergentes como metaverso e transformação digital. Desenvolvi competências para conduzir equipes, implementar inovação e alinhar tecnologia à estratégia de negócios',
  },
  {
    logo: '/images/logos/fit.jpg',
    title: 'Bacharel em Sistemas de Informação',
    institution: 'Faculdade Impacta Tecnologia (FIT-SP)',
    period: '2007 - 2011',
    description:
      'Foco em desenvolvimento e engenharia de software, com base sólida em lógica, algoritmos e experiência em gestão de projetos. No projeto de TCC, desenvolvi e implementei um sistema de gerenciamento de reuniões para o IPEN (Instituto de Pesquisas Energéticas e Nucleares), que automatizava a geração de pautas e atas.',
  },
];

export const coursesExperience: InfoItem[] = [
  {
    logo: '/images/logos/bussola.jpg',
    title: 'Programa de Formação Executiva em Liderança',
    institution: 'Bússola Executiva',
    period: '2024',
    description:
      'Destinado a líderes e gestores, o curso aborda temas como autoconhecimento, comunicação eficaz, gestão de equipes, resolução de conflitos e tomada de decisão estratégica, com foco em desenvolver habilidades essenciais para liderar com sucesso em ambientes corporativos dinâmicos.',
  },
  {
    logo: '/images/logos/pucrs.jpg',
    title: 'Liderança e Gestão de Equipes de Alta Performance',
    institution: 'PUCRS',
    period: '2021',
    description:
      'Curso focado em desenvolver habilidades de liderança, comunicação e gestão de equipes, abordando temas como motivação, resolução de conflitos e estratégias para alcançar alta performance em ambientes corporativos.',
  },
  {
    logo: '/images/logos/saintpaul.jpg',
    title: 'Resseguro, Cosseguro e Gestão de Riscos',
    institution: 'Saint Paul Escola de Negócios',
    period: '2021',
    description:
      'Curso abrangente sobre os fundamentos do resseguro e cosseguro, incluindo tipos de contratos, avaliação de riscos e estratégias de mitigação, voltado para profissionais do setor de seguros que buscam aprofundar seus conhecimentos técnicos e práticos na área.',
  },
  {
    logo: '/images/logos/idesp.jpg',
    title: 'Segurança de Aplicações e Desenvolvimento Seguro',
    institution: 'Instituto de Desenvolvimento Educacional e Profissional (IDESP)',
    period: '2021',
    description:
      'Curso abrangente sobre os fundamentos da segurança de aplicações e desenvolvimento seguro, incluindo práticas recomendadas, avaliação de vulnerabilidades e estratégias de mitigação, voltado para profissionais que buscam aprimorar suas habilidades na área.',
  },
  {
    logo: '/images/logos/mack.jpg',
    title: 'Gestão de Equipes Remotas e Híbridas',
    institution: 'Mackenzie',
    period: '2020',
    description:
      'Curso abrangente sobre os fundamentos da gestão de equipes remotas e híbridas, incluindo práticas recomendadas, ferramentas de colaboração e estratégias de engajamento, voltado para profissionais que buscam aprimorar suas habilidades na área.',
  },
  {
    logo: '/images/logos/certiprof.jpg',
    title: 'Scrum Foundation Professional Certificate (SFPC)',
    institution: 'CertiProf',
    period: '2020',
    description:
      'Curso abrangente sobre os fundamentos do Scrum, incluindo práticas recomendadas, papéis e responsabilidades, e estratégias de implementação, voltado para profissionais que buscam aprimorar suas habilidades na área.',
  },
];
