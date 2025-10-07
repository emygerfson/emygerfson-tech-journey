import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Minha Jornada de Transição de Carreira para Tech aos 43",
      excerpt: "Compartilho os desafios, conquistas e aprendizados da minha mudança para a área de programação...",
      date: "Março 2024",
      category: "Carreira",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    },
    {
      title: "React: Meu Framework Favorito e Por Quê",
      excerpt: "Explorando os recursos que tornam o React uma ferramenta poderosa para desenvolvimento front-end...",
      date: "Fevereiro 2024",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
      title: "Automação com n8n: Como Simplificar Seu Fluxo de Trabalho",
      excerpt: "Um guia prático sobre como usar n8n para criar automações poderosas sem código complexo...",
      date: "Janeiro 2024",
      category: "Automação",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhando conhecimento, experiências e insights sobre tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 overflow-hidden hover:border-primary/40 transition-all group animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full glass-effect">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Todos os Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
