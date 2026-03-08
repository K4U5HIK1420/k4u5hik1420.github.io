import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import omnibridgexImg from "@/assets/omnibridgex-preview.png";
import mountainMateImg from "@/assets/mountain-mate-preview.jpeg";
import darkmodeImg from "@/assets/darkmode-lightmode-preview.png";
import projectxImg from "@/assets/projectx-preview.png";
import spanishPuppetImg from "@/assets/spanish-puppet-preview.png";
import virtualMemoryImg from "@/assets/virtual-memory-preview.png";
import morphyImg from "@/assets/morphy-preview.png";

const filters = ["All", "AI / ML", "Systems", "Web"];

const projects = [
  {
    title: "PROJECT-X: AI Career Counselling",
    description: "AI-powered career guidance platform with resume analysis, career domain prediction, skill gap detection, and employability scoring using TF-IDF and Logistic Regression.",
    tags: ["AI / ML", "Web"],
    tech: ["Flask", "Python", "PostgreSQL", "REST APIs", "ML"],
    color: "from-accent/20 to-cta/20",
    github: "https://github.com/K4U5HIK1420",
    image: projectxImg,
  },
  {
    title: "Morphy – Custom Language Compiler",
    description: "Custom programming language with variable declaration, arithmetic, logical & relational operators, string support, control flow, and loops. Built with PLY (Python Lex-Yacc).",
    tags: ["Systems"],
    tech: ["Python", "Compiler Design", "Lexer", "Parser"],
    color: "from-cta/20 to-primary/10",
    github: "https://github.com/K4U5HIK1420/Morphy",
    image: morphyImg,
  },
  {
    title: "Virtual Memory Management System",
    description: "Web-based simulation of virtual memory management algorithms (FIFO, LRU, Optimal, Second Chance, LFU, MFU, NRU) with real-time visualization of page faults.",
    tags: ["Systems"],
    tech: ["C", "JavaScript", "Python", "HTML/CSS"],
    color: "from-accent/30 to-accent/10",
    github: "https://github.com/K4U5HIK1420/Virtual-Memory-Management-System",
    image: virtualMemoryImg,
  },
  {
    title: "Mountain Mate – Travel Backend",
    description: "Backend API for a mountain travel booking platform (Char Dham / Uttarakhand routes) with transport & hotel listings, booking system, and search & filter APIs.",
    tags: ["Web"],
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose"],
    color: "from-primary/10 to-accent/20",
    github: "https://github.com/K4U5HIK1420/mountain-mate-backend",
    image: mountainMateImg,
  },
  {
    title: "OmniBridgeX – Price Comparison App",
    description: "Mobile-first web app that bridges offline and online shopping — scan products in stores, compare real-time prices across e-commerce platforms, track price drops, and save product history.",
    tags: ["Web"],
    tech: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
    color: "from-cta/15 to-accent/15",
    github: "https://github.com/K4U5HIK1420/OmniBridgeX",
    live: "https://omni-bridge-x.vercel.app",
    image: omnibridgexImg,
  },
  {
    title: "Spanish Puppet Article",
    description: "A styled HTML article page showcasing web design fundamentals with clean layout and typography.",
    tags: ["Web"],
    tech: ["HTML", "CSS"],
    color: "from-accent/20 to-primary/10",
    github: "https://github.com/K4U5HIK1420/spanish-puppet-article",
    image: spanishPuppetImg,
  },
  {
    title: "Dark Mode / Light Mode Toggle",
    description: "A sleek, responsive light/dark theme switcher with smooth CSS transitions, persistent localStorage preference, minimal reusable JavaScript logic, and mobile-friendly design.",
    tags: ["Web"],
    tech: ["CSS", "JavaScript", "HTML"],
    color: "from-accent/15 to-cta/20",
    github: "https://github.com/K4U5HIK1420/darkmode-lightmode",
    image: darkmodeImg,
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            A selection of projects I've built across AI, systems, and web development.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  {"image" in project && (project as any).image ? (
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span className="font-display font-bold text-2xl text-foreground/30 group-hover:text-foreground/50 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {"live" in project && (project as any).live && (
                      <a
                        href={(project as any).live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      <Github size={14} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
