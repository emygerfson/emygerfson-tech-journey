import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">EP.</h3>
            <p className="text-muted-foreground">
              Desenvolvedor Front-End apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/emygerfson"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emygerfson-pontes-da-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:scale-110 transition-transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@emygerfson.dev"
                className="p-3 rounded-full glass-effect hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Emygerfson Pontes da Silva. Feito com{" "}
            <Heart className="h-4 w-4 text-red-500 fill-current" /> e muita dedicação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
