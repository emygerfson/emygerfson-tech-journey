import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/emygerfson-photo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
              <img
                src={profilePhoto}
                alt="Emygerfson Pontes da Silva"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-glow animate-scale-in"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-secondary text-lg font-medium">Olá, eu sou o</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Emygerfson!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvedor Front-End em transição de carreira aos 43 anos,
              apaixonado por criar experiências digitais incríveis e automatizar processos com tecnologia.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-primary text-white shadow-glow group"
              asChild
            >
              <a href="#projects">
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Entrar em Contato</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/emygerfson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emygerfson-pontes-da-silva/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-12 text-sm text-muted-foreground">
            <span className="px-4 py-2 glass-effect rounded-full">HTML5</span>
            <span className="px-4 py-2 glass-effect rounded-full">CSS3</span>
            <span className="px-4 py-2 glass-effect rounded-full">JavaScript</span>
            <span className="px-4 py-2 glass-effect rounded-full">React</span>
            <span className="px-4 py-2 glass-effect rounded-full">Node.js</span>
            <span className="px-4 py-2 glass-effect rounded-full">n8n</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
