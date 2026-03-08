import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022 – 2026",
    title: "B.Tech Computer Science & Engineering",
    org: "Graphic Era Hill University",
    description: "Currently pursuing. Focused on Data Structures, Operating Systems, Compiler Design, DBMS, and Backend Engineering.",
    type: "edu" as const,
  },
  {
    year: "Freelance",
    title: "Freelance Web Developer",
    org: "Self-employed",
    description: "Developed commercial Minecraft server website with login authentication, rank purchasing system, and database integration using PHP and MySQL.",
    type: "work" as const,
  },
  {
    year: "Ongoing",
    title: "Server Developer – LaaVilla Network",
    org: "Minecraft Server Infrastructure",
    description: "Managed large-scale multiplayer server infrastructure including plugin configuration, permissions, performance optimization, custom rank systems, and automation workflows.",
    type: "work" as const,
  },
  {
    year: "2022",
    title: "Class XII",
    org: "St. Jude's School — 76%",
    description: "Completed senior secondary education.",
    type: "edu" as const,
  },
  {
    year: "2020",
    title: "Class X",
    org: "St. Jude's School — 78.4%",
    description: "Completed secondary education.",
    type: "edu" as const,
  },
];

const typeColors: Record<string, string> = {
  work: "bg-accent",
  cert: "bg-cta",
  edu: "bg-primary",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Experience & <span className="text-accent">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2">
                <div className={`w-3 h-3 rounded-full ${typeColors[item.type]} ring-4 ring-background`} />
              </div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs font-medium text-accent">{item.year}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{item.org}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
