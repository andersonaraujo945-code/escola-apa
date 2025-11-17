"use client"

import { BookOpen, Wifi, GraduationCap, Shield, Briefcase, ShoppingCart, Megaphone, Code, Palette, Camera, Globe, DollarSign, TrendingUp, Award, Users, Play } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Culinária Criativa",
    description: "Domine técnicas profissionais e transforme-se em um chef de alta gastronomia.",
    preview: "🎬 Assista: Como fazer um Risotto Perfeito em 15 minutos",
    icon: BookOpen,
    color: "from-orange-500 to-red-600",
    buttonText: "INICIAR JORNADA GASTRONÔMICA"
  },
  {
    id: 2,
    title: "Telecomunicações: Fibra Óptica",
    description: "Torne-se especialista em infraestrutura de telecomunicações e fibra óptica.",
    preview: "🎬 Veja na prática: Instalação de Fibra Óptica passo a passo",
    icon: Wifi,
    color: "from-blue-500 to-cyan-600",
    buttonText: "DOMINAR TECNOLOGIA DE PONTA"
  },
  {
    id: 3,
    title: "Preparatório ENEM",
    description: "Metodologia comprovada para alcançar notas excepcionais e conquistar sua vaga.",
    preview: "📚 Aula grátis: Técnicas de Redação Nota 1000",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
    buttonText: "GARANTIR APROVAÇÃO"
  },
  {
    id: 4,
    title: "Concursos: Polícia Militar",
    description: "Preparação completa e estratégica para sua aprovação na carreira militar.",
    preview: "🎯 Teste grátis: Simulado Completo PM + Gabarito Comentado",
    icon: Shield,
    color: "from-indigo-500 to-purple-600",
    buttonText: "CONQUISTAR APROVAÇÃO"
  },
  {
    id: 5,
    title: "Gestão & Administração",
    description: "Desenvolva habilidades executivas e destaque-se no mercado corporativo.",
    preview: "💼 Case real: Como aumentar lucros em 40% com gestão estratégica",
    icon: Briefcase,
    color: "from-yellow-500 to-orange-600",
    buttonText: "ACELERAR CARREIRA"
  },
  {
    id: 6,
    title: "Dropshipping Profissional",
    description: "Construa um negócio online lucrativo com estratégias validadas de e-commerce.",
    preview: "💰 Revelado: Produtos que vendem R$ 10k/mês no automático",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-600",
    buttonText: "CRIAR NEGÓCIO ONLINE"
  },
  {
    id: 7,
    title: "Marketing Digital Avançado",
    description: "Estratégias profissionais para dominar o marketing digital e redes sociais.",
    preview: "🚀 Segredo revelado: Como viralizar no Instagram em 7 dias",
    icon: Megaphone,
    color: "from-purple-500 to-pink-600",
    buttonText: "TORNAR-SE ESPECIALISTA"
  },
  {
    id: 8,
    title: "Desenvolvimento Web Full Stack",
    description: "Do básico ao avançado: crie aplicações modernas e conquiste o mercado tech.",
    preview: "💻 Projeto prático: Crie seu primeiro app em 30 minutos",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    buttonText: "ENTRAR NO MERCADO TECH"
  },
  {
    id: 9,
    title: "Design Gráfico Profissional",
    description: "Domine ferramentas profissionais e crie projetos visuais de alto impacto.",
    preview: "🎨 Tutorial exclusivo: Logo profissional do zero ao final",
    icon: Palette,
    color: "from-red-500 to-orange-600",
    buttonText: "DESENVOLVER EXPERTISE"
  },
  {
    id: 10,
    title: "Fotografia Profissional",
    description: "Técnicas avançadas para transformar sua paixão em uma carreira lucrativa.",
    preview: "📸 Masterclass grátis: Iluminação profissional com baixo custo",
    icon: Camera,
    color: "from-teal-500 to-green-600",
    buttonText: "PROFISSIONALIZAR CARREIRA"
  },
  {
    id: 11,
    title: "Business English",
    description: "Fluência corporativa em inglês para oportunidades globais e crescimento profissional.",
    preview: "🗣️ Aula demonstrativa: Apresentação de negócios em inglês",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    buttonText: "ALCANÇAR FLUÊNCIA"
  },
  {
    id: 12,
    title: "Educação Financeira & Investimentos",
    description: "Estratégias comprovadas para multiplicar patrimônio e conquistar independência financeira.",
    preview: "💎 Revelação: Estratégia que transformou R$ 1k em R$ 50k",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    buttonText: "CONSTRUIR PATRIMÔNIO"
  }
]

const stats = [
  { icon: Users, value: "15.000+", label: "Alunos Formados" },
  { icon: Award, value: "98%", label: "Taxa de Satisfação" },
  { icon: TrendingUp, value: "12", label: "Cursos Premium" }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ESCOLA APA
              </h1>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 tracking-wide">
                Excelência em Educação Profissional
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              🚀 Transforme Seu Futuro Agora
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
            Invista na Sua
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Evolução Profissional
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light mb-12">
            Cursos premium desenvolvidos por especialistas do mercado. 
            <span className="font-semibold text-gray-900 dark:text-white"> Metodologia comprovada</span> que já transformou milhares de carreiras.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-slate-700">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Cursos Premium Disponíveis
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Escolha o curso ideal para sua jornada de transformação profissional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <div
                  key={course.id}
                  className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden group border border-gray-100 dark:border-slate-700"
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-br ${course.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    
                    {/* Badge de Prévia Gratuita */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      <span className="text-xs font-bold">PRÉVIA GRÁTIS</span>
                    </div>
                    
                    <Icon className="w-14 h-14 mb-4 relative z-10 drop-shadow-lg" />
                    <h4 className="text-2xl font-bold mb-2 relative z-10">{course.title}</h4>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[80px] text-lg leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* Preview Teaser */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {course.preview}
                      </p>
                    </div>
                    
                    <Link href={`/curso/${course.id}`}>
                      <button className={`w-full bg-gradient-to-r ${course.color} text-white font-bold py-5 px-8 rounded-2xl hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm tracking-wide uppercase`}>
                        {course.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl p-10 md:p-16 max-w-5xl mx-auto border border-gray-100 dark:border-slate-700">
          <h3 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
            Como Funciona?
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Escolha Seu Curso</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Navegue pelos cursos disponíveis e selecione aquele que mais se alinha aos seus objetivos profissionais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Conheça o Conteúdo</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Acesse informações detalhadas sobre módulos, metodologia e benefícios exclusivos do curso escolhido.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Inicie Sua Transformação</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Realize sua inscrição e comece imediatamente sua jornada de desenvolvimento profissional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 shadow-2xl">
          <p className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Não Deixe Seu Futuro Para Depois!
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Invista em você mesmo e construa a carreira extraordinária que você merece.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
            <p className="text-white font-semibold text-lg">
              ⭐ Garantia de Satisfação de 30 Dias
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ESCOLA APA
            </h2>
            <p className="text-gray-400 mb-6">
              Transformando vidas através da educação de excelência
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Escola APA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
