import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Backend & Systems",
    description: "Building scalable backends, compilers, and OS-level systems with Go, Python, and C++.",
  },
  {
    icon: Palette,
    title: "Full Stack Web",
    description: "Crafting end-to-end web applications with React, Flask, REST APIs, and PostgreSQL.",
  },
  {
    icon: Zap,
    title: "AI & ML",
    description: "Developing AI-driven applications with machine learning pipelines for intelligent automation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm Anant Kaushik, a Computer Science undergraduate at Graphic Era Hill University (2022–2026).
            I'm passionate about building scalable web systems, compiler design, and AI-driven applications
            with solid foundations in Data Structures, Operating Systems, and Backend Engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <card.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
