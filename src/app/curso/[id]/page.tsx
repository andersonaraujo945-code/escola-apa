"use client"

import { useParams, useRouter } from "next/navigation"
import { BookOpen, Wifi, GraduationCap, Shield, Briefcase, ShoppingCart, Megaphone, Code, Palette, Camera, Globe, DollarSign, ArrowLeft, CheckCircle, Play, Lock, Unlock, Video, FileText, Download } from "lucide-react"
import Link from "next/link"

const coursesData = {
  "1": {
    title: "Culinária Criativa",
    description: "Aprenda técnicas de cozinha e se torne um mestre na arte da gastronomia.",
    icon: BookOpen,
    color: "from-orange-500 to-red-600",
    price: "R$ 297,00",
    duration: "8 semanas",
    level: "Iniciante a Avançado",
    preview: {
      title: "🎬 Aula Demonstrativa Gratuita",
      description: "Assista agora: Como fazer um Risotto Perfeito em 15 minutos",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Nesta prévia exclusiva, você vai aprender a técnica secreta dos chefs italianos para criar um risotto cremoso e saboroso. Descubra o ponto exato do arroz, os ingredientes essenciais e o segredo do creme perfeito.",
      lessons: [
        "Escolha do arroz ideal para risotto",
        "Técnica de tostagem dos grãos",
        "Segredo do caldo e temperatura",
        "Ponto de cremosidade perfeito"
      ]
    },
    modules: [
      {
        title: "Fundamentos da Culinária",
        lessons: [
          { title: "Introdução à Gastronomia", duration: "15 min", type: "video" },
          { title: "Equipamentos Essenciais", duration: "20 min", type: "video" },
          { title: "Técnicas Básicas de Corte", duration: "30 min", type: "video" },
          { title: "E-book: Glossário Culinário", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Técnicas de Corte e Preparo",
        lessons: [
          { title: "Cortes Clássicos Franceses", duration: "25 min", type: "video" },
          { title: "Mise en Place Profissional", duration: "18 min", type: "video" },
          { title: "Organização da Cozinha", duration: "22 min", type: "video" }
        ]
      },
      {
        title: "Gastronomia Internacional",
        lessons: [
          { title: "Culinária Italiana Autêntica", duration: "35 min", type: "video" },
          { title: "Sabores da Ásia", duration: "40 min", type: "video" },
          { title: "Cozinha Francesa Clássica", duration: "45 min", type: "video" },
          { title: "Receitas Internacionais", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Confeitaria e Panificação",
        lessons: [
          { title: "Massas Básicas", duration: "30 min", type: "video" },
          { title: "Técnicas de Fermentação", duration: "25 min", type: "video" },
          { title: "Decoração de Bolos", duration: "35 min", type: "video" }
        ]
      },
      {
        title: "Apresentação e Emplatamento",
        lessons: [
          { title: "Princípios de Emplatamento", duration: "20 min", type: "video" },
          { title: "Técnicas de Decoração", duration: "28 min", type: "video" },
          { title: "Fotografia Gastronômica", duration: "22 min", type: "video" }
        ]
      },
      {
        title: "Gestão de Cozinha Profissional",
        lessons: [
          { title: "Controle de Custos", duration: "30 min", type: "video" },
          { title: "Gestão de Equipe", duration: "25 min", type: "video" },
          { title: "Planejamento de Cardápio", duration: "35 min", type: "video" },
          { title: "Planilhas de Gestão", duration: "XLSX", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Certificado reconhecido",
      "Aulas práticas e teóricas",
      "Material didático completo",
      "Suporte de instrutores especializados",
      "Acesso vitalício ao conteúdo"
    ]
  },
  "2": {
    title: "Telecomunicações: Tudo Sobre Fibra",
    description: "Entenda tudo sobre a tecnologia de fibra óptica e prepare-se para o mercado.",
    icon: Wifi,
    color: "from-blue-500 to-cyan-600",
    price: "R$ 397,00",
    duration: "10 semanas",
    level: "Intermediário",
    preview: {
      title: "🎬 Demonstração Prática Gratuita",
      description: "Veja na prática: Instalação de Fibra Óptica passo a passo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Acompanhe um profissional certificado realizando uma instalação real de fibra óptica residencial. Aprenda as ferramentas necessárias, técnicas de fusão e testes de qualidade.",
      lessons: [
        "Ferramentas essenciais do técnico",
        "Processo de fusão de fibra",
        "Testes de potência e qualidade",
        "Certificação da instalação"
      ]
    },
    modules: [
      {
        title: "Introdução às Telecomunicações",
        lessons: [
          { title: "História das Telecomunicações", duration: "20 min", type: "video" },
          { title: "Fundamentos de Redes", duration: "30 min", type: "video" },
          { title: "Tipos de Conexões", duration: "25 min", type: "video" }
        ]
      },
      {
        title: "Fundamentos de Fibra Óptica",
        lessons: [
          { title: "Física da Luz e Fibra", duration: "35 min", type: "video" },
          { title: "Tipos de Fibra Óptica", duration: "28 min", type: "video" },
          { title: "Componentes e Acessórios", duration: "32 min", type: "video" },
          { title: "Manual Técnico Completo", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Instalação e Manutenção",
        lessons: [
          { title: "Planejamento de Instalação", duration: "40 min", type: "video" },
          { title: "Técnicas de Fusão", duration: "45 min", type: "video" },
          { title: "Conectorização", duration: "38 min", type: "video" },
          { title: "Manutenção Preventiva", duration: "30 min", type: "video" }
        ]
      },
      {
        title: "Testes e Certificação",
        lessons: [
          { title: "Equipamentos de Teste", duration: "25 min", type: "video" },
          { title: "OTDR e Medições", duration: "35 min", type: "video" },
          { title: "Certificação de Redes", duration: "30 min", type: "video" }
        ]
      },
      {
        title: "Redes FTTH e GPON",
        lessons: [
          { title: "Arquitetura FTTH", duration: "40 min", type: "video" },
          { title: "Tecnologia GPON", duration: "45 min", type: "video" },
          { title: "Configuração de OLT", duration: "50 min", type: "video" }
        ]
      },
      {
        title: "Mercado e Oportunidades",
        lessons: [
          { title: "Mercado de Trabalho", duration: "30 min", type: "video" },
          { title: "Como Abrir sua Empresa", duration: "35 min", type: "video" },
          { title: "Modelos de Contrato", duration: "PDF", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Certificado profissional",
      "Aulas com profissionais do mercado",
      "Laboratório virtual",
      "Networking com empresas",
      "Garantia de empregabilidade"
    ]
  },
  "3": {
    title: "Desvende o ENEM",
    description: "Melhore suas notas e conquiste sua vaga no ensino superior!",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
    price: "R$ 197,00",
    duration: "6 meses",
    level: "Ensino Médio",
    preview: {
      title: "📚 Aula Gratuita de Redação",
      description: "Técnicas comprovadas para tirar nota 1000 na redação do ENEM",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Descubra o método exclusivo que já aprovou centenas de alunos. Aprenda a estrutura perfeita, argumentação sólida e como evitar os erros mais comuns que derrubam sua nota.",
      lessons: [
        "Estrutura da redação nota 1000",
        "Repertório sociocultural eficaz",
        "Argumentação convincente",
        "Proposta de intervenção completa"
      ]
    },
    modules: [
      {
        title: "Linguagens e Códigos",
        lessons: [
          { title: "Interpretação de Textos", duration: "35 min", type: "video" },
          { title: "Gramática Aplicada", duration: "40 min", type: "video" },
          { title: "Literatura Brasileira", duration: "45 min", type: "video" },
          { title: "Resumo de Obras Literárias", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Matemática e suas Tecnologias",
        lessons: [
          { title: "Álgebra e Funções", duration: "50 min", type: "video" },
          { title: "Geometria Plana e Espacial", duration: "45 min", type: "video" },
          { title: "Estatística e Probabilidade", duration: "40 min", type: "video" },
          { title: "Fórmulas Essenciais", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Ciências Humanas",
        lessons: [
          { title: "História do Brasil", duration: "60 min", type: "video" },
          { title: "Geografia Física e Humana", duration: "55 min", type: "video" },
          { title: "Filosofia e Sociologia", duration: "50 min", type: "video" }
        ]
      },
      {
        title: "Ciências da Natureza",
        lessons: [
          { title: "Física Mecânica", duration: "45 min", type: "video" },
          { title: "Química Orgânica", duration: "50 min", type: "video" },
          { title: "Biologia Celular", duration: "40 min", type: "video" }
        ]
      },
      {
        title: "Redação ENEM",
        lessons: [
          { title: "Estrutura da Redação", duration: "30 min", type: "video" },
          { title: "Repertório Sociocultural", duration: "35 min", type: "video" },
          { title: "Correção de Redações", duration: "40 min", type: "video" },
          { title: "Banco de Repertórios", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Simulados e Revisões",
        lessons: [
          { title: "Simulado Completo 1", duration: "180 min", type: "video" },
          { title: "Simulado Completo 2", duration: "180 min", type: "video" },
          { title: "Revisão Final", duration: "120 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Professores especializados",
      "Simulados semanais",
      "Correção de redações",
      "Plano de estudos personalizado",
      "Grupo de estudos exclusivo"
    ]
  },
  "4": {
    title: "Concursos Públicos: Polícia Militar",
    description: "Prepare-se para o desafio e garanta sua vaga na Polícia Militar!",
    icon: Shield,
    color: "from-indigo-500 to-purple-600",
    price: "R$ 497,00",
    duration: "12 semanas",
    level: "Preparatório",
    preview: {
      title: "🎯 Simulado Completo Gratuito",
      description: "Teste seus conhecimentos com simulado real + gabarito comentado",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Experimente um simulado completo nos moldes da prova da PM, com questões atualizadas e gabarito detalhadamente comentado por professores ex-policiais. Identifique seus pontos fortes e fracos.",
      lessons: [
        "50 questões estilo PM",
        "Gabarito comentado em vídeo",
        "Análise de desempenho",
        "Dicas estratégicas de prova"
      ]
    },
    modules: [
      {
        title: "Português e Redação",
        lessons: [
          { title: "Gramática para Concursos", duration: "45 min", type: "video" },
          { title: "Interpretação de Textos", duration: "40 min", type: "video" },
          { title: "Redação Oficial", duration: "35 min", type: "video" },
          { title: "Questões Comentadas", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Matemática e Raciocínio Lógico",
        lessons: [
          { title: "Matemática Básica", duration: "50 min", type: "video" },
          { title: "Raciocínio Lógico", duration: "45 min", type: "video" },
          { title: "Resolução de Questões", duration: "60 min", type: "video" }
        ]
      },
      {
        title: "Conhecimentos Gerais",
        lessons: [
          { title: "Atualidades", duration: "40 min", type: "video" },
          { title: "História e Geografia", duration: "45 min", type: "video" },
          { title: "Política e Sociedade", duration: "35 min", type: "video" }
        ]
      },
      {
        title: "Legislação e Direitos Humanos",
        lessons: [
          { title: "Constituição Federal", duration: "60 min", type: "video" },
          { title: "Direitos Humanos", duration: "45 min", type: "video" },
          { title: "Legislação Específica PM", duration: "50 min", type: "video" },
          { title: "Vade Mecum Digital", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Preparação Física",
        lessons: [
          { title: "Treino de Corrida", duration: "30 min", type: "video" },
          { title: "Exercícios de Força", duration: "35 min", type: "video" },
          { title: "Flexibilidade", duration: "25 min", type: "video" },
          { title: "Plano de Treino Completo", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Teste Psicológico",
        lessons: [
          { title: "Como Funciona o Teste", duration: "40 min", type: "video" },
          { title: "Preparação Mental", duration: "35 min", type: "video" },
          { title: "Simulação de Teste", duration: "45 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Professores ex-policiais",
      "Simulados realistas",
      "Preparação física online",
      "Orientação psicológica",
      "Acompanhamento individual"
    ]
  },
  "5": {
    title: "Gestão e Administração: Seu Futuro Profissional",
    description: "Aumente suas chances no mercado com técnicas de administração.",
    icon: Briefcase,
    color: "from-yellow-500 to-orange-600",
    price: "R$ 347,00",
    duration: "10 semanas",
    level: "Iniciante a Intermediário",
    preview: {
      title: "💼 Case Real de Sucesso",
      description: "Como uma empresa aumentou lucros em 40% com gestão estratégica",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Analise um case real de transformação empresarial. Veja as estratégias aplicadas, decisões tomadas e resultados alcançados. Aprenda com exemplos práticos do mercado.",
      lessons: [
        "Diagnóstico inicial da empresa",
        "Estratégias implementadas",
        "Gestão de mudanças",
        "Resultados e métricas"
      ]
    },
    modules: [
      {
        title: "Fundamentos de Administração",
        lessons: [
          { title: "Teorias Administrativas", duration: "35 min", type: "video" },
          { title: "Funções do Administrador", duration: "30 min", type: "video" },
          { title: "Estruturas Organizacionais", duration: "40 min", type: "video" }
        ]
      },
      {
        title: "Gestão de Pessoas",
        lessons: [
          { title: "Recrutamento e Seleção", duration: "45 min", type: "video" },
          { title: "Desenvolvimento de Equipes", duration: "40 min", type: "video" },
          { title: "Gestão de Desempenho", duration: "35 min", type: "video" },
          { title: "Modelos de Avaliação", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Finanças Empresariais",
        lessons: [
          { title: "Análise Financeira", duration: "50 min", type: "video" },
          { title: "Fluxo de Caixa", duration: "45 min", type: "video" },
          { title: "Indicadores Financeiros", duration: "40 min", type: "video" },
          { title: "Planilhas Financeiras", duration: "XLSX", type: "pdf" }
        ]
      },
      {
        title: "Marketing e Vendas",
        lessons: [
          { title: "Fundamentos de Marketing", duration: "40 min", type: "video" },
          { title: "Estratégias de Vendas", duration: "45 min", type: "video" },
          { title: "Marketing Digital", duration: "50 min", type: "video" }
        ]
      },
      {
        title: "Planejamento Estratégico",
        lessons: [
          { title: "Análise SWOT", duration: "35 min", type: "video" },
          { title: "Definição de Objetivos", duration: "40 min", type: "video" },
          { title: "Plano de Ação", duration: "45 min", type: "video" },
          { title: "Templates de Planejamento", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Liderança e Inovação",
        lessons: [
          { title: "Estilos de Liderança", duration: "40 min", type: "video" },
          { title: "Gestão da Inovação", duration: "45 min", type: "video" },
          { title: "Cultura Organizacional", duration: "35 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Certificado reconhecido pelo MEC",
      "Cases reais de empresas",
      "Mentoria com gestores",
      "Ferramentas de gestão",
      "Networking empresarial"
    ]
  },
  "6": {
    title: "Empreendedorismo Digital: Dropshipping",
    description: "Aprenda a ganhar dinheiro com e-commerce totalmente online!",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-600",
    price: "R$ 597,00",
    duration: "8 semanas",
    level: "Iniciante",
    preview: {
      title: "💰 Revelação Exclusiva",
      description: "Produtos que vendem R$ 10k/mês no automático",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Descubra os nichos mais lucrativos do momento e os produtos que estão gerando resultados extraordinários. Veja análises de mercado, margens de lucro e estratégias de venda.",
      lessons: [
        "Top 10 nichos lucrativos 2024",
        "Análise de margem de lucro",
        "Fornecedores confiáveis",
        "Estratégias de precificação"
      ]
    },
    modules: [
      {
        title: "Introdução ao Dropshipping",
        lessons: [
          { title: "O que é Dropshipping", duration: "25 min", type: "video" },
          { title: "Vantagens e Desafios", duration: "30 min", type: "video" },
          { title: "Modelos de Negócio", duration: "35 min", type: "video" }
        ]
      },
      {
        title: "Escolha de Nicho e Produtos",
        lessons: [
          { title: "Pesquisa de Mercado", duration: "40 min", type: "video" },
          { title: "Análise de Concorrência", duration: "35 min", type: "video" },
          { title: "Validação de Produtos", duration: "45 min", type: "video" },
          { title: "Lista de Nichos Lucrativos", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Criação de Loja Virtual",
        lessons: [
          { title: "Shopify do Zero", duration: "60 min", type: "video" },
          { title: "Design de Loja", duration: "50 min", type: "video" },
          { title: "Otimização de Conversão", duration: "45 min", type: "video" },
          { title: "Templates Premium", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "Marketing Digital e Tráfego",
        lessons: [
          { title: "Facebook Ads Completo", duration: "90 min", type: "video" },
          { title: "Instagram Ads", duration: "60 min", type: "video" },
          { title: "Google Ads", duration: "75 min", type: "video" },
          { title: "Scripts de Anúncios", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Gestão de Pedidos e Fornecedores",
        lessons: [
          { title: "Integração com Fornecedores", duration: "40 min", type: "video" },
          { title: "Gestão de Estoque Virtual", duration: "35 min", type: "video" },
          { title: "Atendimento ao Cliente", duration: "45 min", type: "video" }
        ]
      },
      {
        title: "Escala e Automação",
        lessons: [
          { title: "Automação de Processos", duration: "50 min", type: "video" },
          { title: "Escala de Vendas", duration: "55 min", type: "video" },
          { title: "Análise de Métricas", duration: "45 min", type: "video" },
          { title: "Planilha de Controle", duration: "XLSX", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Suporte para criar sua loja",
      "Lista de fornecedores confiáveis",
      "Templates prontos",
      "Comunidade exclusiva",
      "Atualizações constantes"
    ]
  },
  "7": {
    title: "Marketing Digital: Domine as Redes Sociais",
    description: "Aprenda estratégias de marketing digital e conquiste seu público nas redes sociais.",
    icon: Megaphone,
    color: "from-purple-500 to-pink-600",
    price: "R$ 447,00",
    duration: "9 semanas",
    level: "Iniciante a Intermediário",
    preview: {
      title: "🚀 Estratégia Revelada",
      description: "Como viralizar no Instagram em 7 dias (método comprovado)",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Aprenda o método exato usado por influenciadores para crescer rapidamente. Descubra os horários ideais, tipos de conteúdo e técnicas de engajamento que funcionam.",
      lessons: [
        "Algoritmo do Instagram desvendado",
        "Tipos de conteúdo que viralizam",
        "Horários estratégicos de postagem",
        "Técnicas de engajamento"
      ]
    },
    modules: [
      {
        title: "Fundamentos do Marketing Digital",
        lessons: [
          { title: "Introdução ao Marketing Digital", duration: "30 min", type: "video" },
          { title: "Funil de Vendas", duration: "35 min", type: "video" },
          { title: "Persona e Público-Alvo", duration: "40 min", type: "video" }
        ]
      },
      {
        title: "Instagram e Facebook Ads",
        lessons: [
          { title: "Estratégias de Instagram", duration: "60 min", type: "video" },
          { title: "Reels que Viralizam", duration: "45 min", type: "video" },
          { title: "Facebook Ads Avançado", duration: "75 min", type: "video" },
          { title: "Templates de Posts", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "Criação de Conteúdo Viral",
        lessons: [
          { title: "Copywriting Persuasivo", duration: "50 min", type: "video" },
          { title: "Design para Redes Sociais", duration: "55 min", type: "video" },
          { title: "Vídeos que Convertem", duration: "60 min", type: "video" }
        ]
      },
      {
        title: "Google Ads e SEO",
        lessons: [
          { title: "Google Ads do Zero", duration: "70 min", type: "video" },
          { title: "SEO para Iniciantes", duration: "65 min", type: "video" },
          { title: "Otimização de Sites", duration: "55 min", type: "video" }
        ]
      },
      {
        title: "Métricas e Análise de Dados",
        lessons: [
          { title: "Google Analytics", duration: "50 min", type: "video" },
          { title: "Métricas que Importam", duration: "45 min", type: "video" },
          { title: "Relatórios de Performance", duration: "40 min", type: "video" },
          { title: "Dashboard de Métricas", duration: "XLSX", type: "pdf" }
        ]
      },
      {
        title: "Estratégias de Crescimento",
        lessons: [
          { title: "Growth Hacking", duration: "55 min", type: "video" },
          { title: "Parcerias Estratégicas", duration: "45 min", type: "video" },
          { title: "Escala de Resultados", duration: "50 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Certificado profissional",
      "Templates de posts prontos",
      "Ferramentas de automação",
      "Comunidade de marketeiros",
      "Atualizações de tendências"
    ]
  },
  "8": {
    title: "Programação Web: Do Zero ao Profissional",
    description: "Aprenda a criar sites e aplicativos modernos e entre no mercado de tecnologia.",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    price: "R$ 697,00",
    duration: "16 semanas",
    level: "Iniciante",
    preview: {
      title: "💻 Projeto Prático Gratuito",
      description: "Crie seu primeiro aplicativo web em 30 minutos",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Acompanhe passo a passo a criação de um app funcional do zero. Mesmo sem experiência, você vai entender a lógica da programação e ver seu código funcionando.",
      lessons: [
        "Estrutura básica HTML",
        "Estilização com CSS",
        "Interatividade com JavaScript",
        "Deploy e publicação online"
      ]
    },
    modules: [
      {
        title: "HTML, CSS e JavaScript",
        lessons: [
          { title: "HTML do Zero", duration: "45 min", type: "video" },
          { title: "CSS Moderno", duration: "60 min", type: "video" },
          { title: "JavaScript Fundamentos", duration: "75 min", type: "video" },
          { title: "Projeto: Landing Page", duration: "90 min", type: "video" },
          { title: "Código Fonte Completo", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "React e Next.js",
        lessons: [
          { title: "Introdução ao React", duration: "60 min", type: "video" },
          { title: "Componentes e Props", duration: "55 min", type: "video" },
          { title: "Hooks Essenciais", duration: "70 min", type: "video" },
          { title: "Next.js Completo", duration: "90 min", type: "video" },
          { title: "Projeto: Blog Moderno", duration: "120 min", type: "video" }
        ]
      },
      {
        title: "Backend com Node.js",
        lessons: [
          { title: "Node.js Fundamentos", duration: "65 min", type: "video" },
          { title: "Express.js", duration: "70 min", type: "video" },
          { title: "APIs RESTful", duration: "80 min", type: "video" },
          { title: "Autenticação JWT", duration: "75 min", type: "video" }
        ]
      },
      {
        title: "Banco de Dados",
        lessons: [
          { title: "SQL Básico", duration: "60 min", type: "video" },
          { title: "PostgreSQL", duration: "70 min", type: "video" },
          { title: "MongoDB", duration: "65 min", type: "video" },
          { title: "Prisma ORM", duration: "55 min", type: "video" }
        ]
      },
      {
        title: "Deploy e Hospedagem",
        lessons: [
          { title: "Git e GitHub", duration: "50 min", type: "video" },
          { title: "Vercel Deploy", duration: "40 min", type: "video" },
          { title: "AWS Básico", duration: "60 min", type: "video" },
          { title: "CI/CD", duration: "55 min", type: "video" }
        ]
      },
      {
        title: "Portfólio e Carreira",
        lessons: [
          { title: "Criando Portfólio", duration: "45 min", type: "video" },
          { title: "LinkedIn para Devs", duration: "35 min", type: "video" },
          { title: "Entrevistas Técnicas", duration: "50 min", type: "video" },
          { title: "Projetos Completos", duration: "ZIP", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Certificado reconhecido",
      "Projetos reais no portfólio",
      "Mentoria com devs sênior",
      "Acesso a vagas exclusivas",
      "Comunidade tech ativa"
    ]
  },
  "9": {
    title: "Design Gráfico: Criatividade em Ação",
    description: "Domine ferramentas de design e crie artes incríveis para qualquer projeto.",
    icon: Palette,
    color: "from-red-500 to-orange-600",
    price: "R$ 397,00",
    duration: "10 semanas",
    level: "Iniciante a Intermediário",
    preview: {
      title: "🎨 Tutorial Exclusivo",
      description: "Crie um logo profissional do zero ao resultado final",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Acompanhe todo o processo criativo de um designer profissional. Desde o briefing até a entrega final, aprenda técnicas, ferramentas e segredos da criação de logos.",
      lessons: [
        "Briefing e pesquisa de referências",
        "Sketches e conceitos iniciais",
        "Vetorização no Illustrator",
        "Apresentação para cliente"
      ]
    },
    modules: [
      {
        title: "Fundamentos do Design",
        lessons: [
          { title: "Teoria das Cores", duration: "40 min", type: "video" },
          { title: "Tipografia", duration: "45 min", type: "video" },
          { title: "Composição Visual", duration: "50 min", type: "video" },
          { title: "Guia de Referências", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Adobe Photoshop Completo",
        lessons: [
          { title: "Interface e Ferramentas", duration: "55 min", type: "video" },
          { title: "Camadas e Máscaras", duration: "60 min", type: "video" },
          { title: "Manipulação de Imagens", duration: "70 min", type: "video" },
          { title: "Efeitos Avançados", duration: "65 min", type: "video" },
          { title: "Projeto: Cartaz de Evento", duration: "90 min", type: "video" }
        ]
      },
      {
        title: "Illustrator e Vetorização",
        lessons: [
          { title: "Ferramentas Vetoriais", duration: "50 min", type: "video" },
          { title: "Criação de Logos", duration: "75 min", type: "video" },
          { title: "Ilustrações Vetoriais", duration: "80 min", type: "video" },
          { title: "Projeto: Identidade Visual", duration: "120 min", type: "video" }
        ]
      },
      {
        title: "Identidade Visual",
        lessons: [
          { title: "Branding Fundamentos", duration: "45 min", type: "video" },
          { title: "Manual de Marca", duration: "55 min", type: "video" },
          { title: "Aplicações da Marca", duration: "60 min", type: "video" },
          { title: "Templates de Manual", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Design para Redes Sociais",
        lessons: [
          { title: "Posts para Instagram", duration: "50 min", type: "video" },
          { title: "Stories Criativos", duration: "45 min", type: "video" },
          { title: "Thumbnails YouTube", duration: "40 min", type: "video" },
          { title: "Pack de Templates", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "Portfólio Profissional",
        lessons: [
          { title: "Montando Portfólio", duration: "40 min", type: "video" },
          { title: "Behance e Dribbble", duration: "35 min", type: "video" },
          { title: "Precificação de Projetos", duration: "45 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Certificado Adobe",
      "Licenças de software inclusas",
      "Banco de recursos gráficos",
      "Feedback personalizado",
      "Networking com agências"
    ]
  },
  "10": {
    title: "Fotografia Profissional",
    description: "Aprenda técnicas profissionais de fotografia e transforme sua paixão em profissão.",
    icon: Camera,
    color: "from-teal-500 to-green-600",
    price: "R$ 547,00",
    duration: "12 semanas",
    level: "Iniciante a Avançado",
    preview: {
      title: "📸 Masterclass Gratuita",
      description: "Iluminação profissional com equipamento de baixo custo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Descubra como criar fotos incríveis sem gastar fortunas em equipamento. Aprenda técnicas de iluminação natural e artificial com materiais acessíveis.",
      lessons: [
        "Luz natural: horários e posições",
        "Iluminação artificial caseira",
        "Modificadores de luz DIY",
        "Edição para realçar iluminação"
      ]
    },
    modules: [
      {
        title: "Fundamentos da Fotografia",
        lessons: [
          { title: "Triângulo de Exposição", duration: "40 min", type: "video" },
          { title: "Modos da Câmera", duration: "45 min", type: "video" },
          { title: "Lentes e Equipamentos", duration: "50 min", type: "video" },
          { title: "Guia de Equipamentos", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Composição e Iluminação",
        lessons: [
          { title: "Regras de Composição", duration: "55 min", type: "video" },
          { title: "Luz Natural", duration: "60 min", type: "video" },
          { title: "Iluminação de Estúdio", duration: "70 min", type: "video" },
          { title: "Esquemas de Iluminação", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Edição com Lightroom",
        lessons: [
          { title: "Lightroom Básico", duration: "50 min", type: "video" },
          { title: "Correção de Cores", duration: "55 min", type: "video" },
          { title: "Edição Avançada", duration: "65 min", type: "video" },
          { title: "Presets Profissionais", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "Fotografia de Eventos",
        lessons: [
          { title: "Casamentos", duration: "75 min", type: "video" },
          { title: "Eventos Corporativos", duration: "60 min", type: "video" },
          { title: "Festas e Aniversários", duration: "55 min", type: "video" },
          { title: "Contratos e Documentos", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Fotografia Comercial",
        lessons: [
          { title: "Produtos e E-commerce", duration: "70 min", type: "video" },
          { title: "Retratos Profissionais", duration: "65 min", type: "video" },
          { title: "Fotografia Publicitária", duration: "75 min", type: "video" }
        ]
      },
      {
        title: "Marketing para Fotógrafos",
        lessons: [
          { title: "Portfólio Online", duration: "45 min", type: "video" },
          { title: "Redes Sociais", duration: "50 min", type: "video" },
          { title: "Precificação", duration: "55 min", type: "video" },
          { title: "Planilha de Precificação", duration: "XLSX", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Certificado profissional",
      "Presets de edição exclusivos",
      "Aulas práticas presenciais",
      "Equipamentos para prática",
      "Portfólio online incluso"
    ]
  },
  "11": {
    title: "Inglês para Negócios",
    description: "Domine o inglês corporativo e abra portas no mercado internacional.",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    price: "R$ 497,00",
    duration: "24 semanas",
    level: "Intermediário a Avançado",
    preview: {
      title: "🗣️ Aula Demonstrativa",
      description: "Como fazer uma apresentação de negócios impecável em inglês",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Assista a uma aula completa com professor nativo. Aprenda vocabulário corporativo, estruturas de frases e técnicas de apresentação usadas em empresas globais.",
      lessons: [
        "Estrutura de apresentação",
        "Vocabulário corporativo essencial",
        "Pronúncia e entonação",
        "Lidando com perguntas"
      ]
    },
    modules: [
      {
        title: "Business Vocabulary",
        lessons: [
          { title: "Vocabulário Corporativo", duration: "40 min", type: "video" },
          { title: "Expressões Idiomáticas", duration: "45 min", type: "video" },
          { title: "Termos Técnicos", duration: "50 min", type: "video" },
          { title: "Glossário Completo", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Apresentações Corporativas",
        lessons: [
          { title: "Estrutura de Apresentação", duration: "55 min", type: "video" },
          { title: "Linguagem Corporal", duration: "45 min", type: "video" },
          { title: "Recursos Visuais", duration: "50 min", type: "video" },
          { title: "Templates de Slides", duration: "ZIP", type: "pdf" }
        ]
      },
      {
        title: "Negociações em Inglês",
        lessons: [
          { title: "Técnicas de Negociação", duration: "60 min", type: "video" },
          { title: "Fechamento de Contratos", duration: "55 min", type: "video" },
          { title: "Resolução de Conflitos", duration: "50 min", type: "video" }
        ]
      },
      {
        title: "E-mails Profissionais",
        lessons: [
          { title: "Estrutura de E-mails", duration: "40 min", type: "video" },
          { title: "Tom e Formalidade", duration: "45 min", type: "video" },
          { title: "E-mails Difíceis", duration: "50 min", type: "video" },
          { title: "Modelos de E-mails", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Reuniões e Conference Calls",
        lessons: [
          { title: "Participação em Reuniões", duration: "55 min", type: "video" },
          { title: "Liderança de Reuniões", duration: "60 min", type: "video" },
          { title: "Conference Calls", duration: "50 min", type: "video" }
        ]
      },
      {
        title: "Preparação para Certificações",
        lessons: [
          { title: "TOEFL Preparation", duration: "90 min", type: "video" },
          { title: "IELTS Preparation", duration: "90 min", type: "video" },
          { title: "Simulados Completos", duration: "120 min", type: "video" }
        ]
      }
    ],
    benefits: [
      "Professores nativos",
      "Aulas ao vivo semanais",
      "Material Cambridge incluso",
      "Simulações de negócios",
      "Certificado internacional"
    ]
  },
  "12": {
    title: "Educação Financeira & Investimentos",
    description: "Aprenda a organizar suas finanças, investir e conquistar sua independência financeira.",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    price: "R$ 297,00",
    duration: "8 semanas",
    level: "Iniciante",
    preview: {
      title: "💎 Estratégia Revelada",
      description: "Como transformar R$ 1.000 em R$ 50.000 (método real)",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Conheça a estratégia de investimento que multiplicou pequenos valores em patrimônio significativo. Veja cálculos reais, prazos e riscos envolvidos.",
      lessons: [
        "Estratégia de aportes mensais",
        "Diversificação inteligente",
        "Reinvestimento de dividendos",
        "Projeções e metas realistas"
      ]
    },
    modules: [
      {
        title: "Educação Financeira Básica",
        lessons: [
          { title: "Mentalidade Financeira", duration: "35 min", type: "video" },
          { title: "Controle de Gastos", duration: "40 min", type: "video" },
          { title: "Reserva de Emergência", duration: "45 min", type: "video" },
          { title: "Planilha de Controle", duration: "XLSX", type: "pdf" }
        ]
      },
      {
        title: "Orçamento e Planejamento",
        lessons: [
          { title: "Criando Orçamento", duration: "50 min", type: "video" },
          { title: "Eliminando Dívidas", duration: "55 min", type: "video" },
          { title: "Metas Financeiras", duration: "45 min", type: "video" }
        ]
      },
      {
        title: "Investimentos para Iniciantes",
        lessons: [
          { title: "Tipos de Investimentos", duration: "60 min", type: "video" },
          { title: "Perfil de Investidor", duration: "40 min", type: "video" },
          { title: "Como Começar a Investir", duration: "55 min", type: "video" },
          { title: "Guia do Investidor", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Renda Fixa e Variável",
        lessons: [
          { title: "Tesouro Direto", duration: "50 min", type: "video" },
          { title: "CDB e LCI/LCA", duration: "45 min", type: "video" },
          { title: "Ações na Bolsa", duration: "70 min", type: "video" },
          { title: "Análise de Ações", duration: "65 min", type: "video" }
        ]
      },
      {
        title: "Fundos Imobiliários",
        lessons: [
          { title: "O que são FIIs", duration: "45 min", type: "video" },
          { title: "Análise de FIIs", duration: "55 min", type: "video" },
          { title: "Montando Carteira", duration: "60 min", type: "video" },
          { title: "Lista de FIIs Recomendados", duration: "PDF", type: "pdf" }
        ]
      },
      {
        title: "Independência Financeira",
        lessons: [
          { title: "Estratégia FIRE", duration: "50 min", type: "video" },
          { title: "Renda Passiva", duration: "55 min", type: "video" },
          { title: "Planejamento de Longo Prazo", duration: "60 min", type: "video" },
          { title: "Simulador de Aposentadoria", duration: "XLSX", type: "pdf" }
        ]
      }
    ],
    benefits: [
      "Certificado ANBIMA",
      "Planilhas de controle",
      "Simulador de investimentos",
      "Grupo de investidores",
      "Atualizações do mercado"
    ]
  }
}

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  const course = coursesData[courseId as keyof typeof coursesData]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Curso não encontrado</h1>
          <Link href="/">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const Icon = course.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar para Cursos</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className={`bg-gradient-to-r ${course.color} rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                <Icon className="w-20 h-20 md:w-24 md:h-24" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl md:text-2xl mb-6 opacity-95">{course.description}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">Duração: {course.duration}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold">Nível: {course.level}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="font-semibold text-2xl">{course.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Preview Section - DESTAQUE */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-3xl shadow-2xl p-8 border-4 border-yellow-400 dark:border-yellow-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {course.preview.title}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {course.preview.description}
                  </p>
                </div>
              </div>

              {/* Video Player */}
              <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={course.preview.videoUrl}
                    title="Prévia do Curso"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {course.preview.content}
                </p>

                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-4">
                    O que você vai aprender nesta prévia:
                  </h3>
                  {course.preview.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Unlock className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modules with Full Content */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Conteúdo Completo do Curso
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ao se inscrever, você terá acesso imediato a todo este conteúdo:
              </p>
              <div className="space-y-6">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <div className={`flex items-center gap-4 p-5 bg-gradient-to-r ${course.color}`}>
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {moduleIndex + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-md transition-all">
                          <div className="flex items-center gap-3">
                            {lesson.type === 'video' ? (
                              <Video className="w-5 h-5 text-blue-500" />
                            ) : (
                              <FileText className="w-5 h-5 text-green-500" />
                            )}
                            <span className="text-gray-900 dark:text-white font-medium">{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{lesson.duration}</span>
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                O que você vai receber
              </h2>
              <div className="space-y-4">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className={`w-6 h-6 flex-shrink-0 text-green-500`} />
                    <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Enrollment */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Garanta sua vaga!
              </h3>
              
              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Investimento</span>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white">{course.price}</p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">ou 12x no cartão</span>
                </div>
              </div>

              <button 
                className={`w-full bg-gradient-to-r ${course.color} text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4`}
                onClick={() => alert('Redirecionando para página de pagamento...')}
              >
                INSCREVER-SE AGORA
              </button>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Certificado incluso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Suporte dedicado</span>
                </div>
              </div>

              {/* Course Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total de módulos:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{course.modules.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total de aulas:</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duração total:</span>
                    <span className="font-bold text-gray-900 dark:text-white">{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2024 Escola APA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
