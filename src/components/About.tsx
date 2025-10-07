import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Início da Jornada",
      description: "Decisão de transição de carreira para tecnologia aos 43 anos",
    },
    {
      year: "2023-2024",
      title: "Fundamentos Sólidos",
      description: "Domínio de HTML, CSS e JavaScript através de cursos e projetos práticos",
    },
    {
      year: "2024",
      title: "Frameworks Modernos",
      description: "Especialização em React e Node.js, construindo aplicações completas",
    },
    {
      year: "2024-2025",
      title: "Automação e IA",
      description: "Exploração de n8n para automações e integração com inteligência artificial",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Aprendizado Contínuo",
      description: "Cada dia é uma oportunidade de evoluir e dominar novas tecnologias",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Código Limpo",
      description: "Busco sempre escrever código legível, eficiente e bem documentado",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Inovação",
      description: "Paixão por criar soluções que fazem diferença e resolvem problemas reais",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Foco em Resultados",
      description: "Transformar ideias em projetos concretos é meu maior objetivo",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de transformação, aprendizado e muita dedicação
          </p>
        </div>

        {/* Intro */}
        <div className="mb-20 animate-fade-in-up">
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                Aos 43 anos, tomei uma decisão que mudou minha vida: migrar para a área de tecnologia. 
                Não foi uma escolha fácil, mas foi a mais gratificante. Cada linha de código que escrevo 
                representa não apenas aprendizado técnico, mas a realização de um sonho.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Minha jornada começou com HTML e CSS, evoluiu para JavaScript e hoje trabalho com React, 
                Node.js e n8n. Mais do que dominar tecnologias, aprendi que idade não é barreira quando 
                há paixão e dedicação.
              </p>
              <p className="text-lg leading-relaxed">
                Hoje, busco oportunidades para aplicar minhas habilidades em projetos desafiadores, 
                contribuir com equipes criativas e continuar crescendo como desenvolvedor. Meu objetivo 
                é provar que nunca é tarde para recomeçar e fazer o que realmente amamos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Meus Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex p-3 rounded-full gradient-primary text-white">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Linha do Tempo</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="glass-effect border-primary/20 inline-block">
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
