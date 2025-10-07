import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/emygerfson",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emygerfson-pontes-da-silva/",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:contato@emygerfson.dev",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre tecnologia, projetos ou oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect border-primary/20 animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="glass-effect"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="glass-effect"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    rows={6}
                    className="glass-effect"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary shadow-glow"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Vamos nos conectar!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Estou sempre aberto a discutir novos projetos, ideias criativas
                  ou oportunidades de fazer parte de sua visão. Seja para uma
                  oportunidade de trabalho, colaboração ou apenas para trocar
                  ideias sobre tecnologia.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg glass-effect hover:border-primary/40 transition-all group"
                    >
                      <div className="p-2 rounded-lg gradient-primary text-white">
                        {link.icon}
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full mt-8"
                  asChild
                >
                  <a href="#" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  Brasil 🇧🇷
                  <br />
                  Disponível para trabalho remoto
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
