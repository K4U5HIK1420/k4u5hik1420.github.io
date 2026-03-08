import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Go", level: 75 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Web & Frameworks",
    skills: [
      { name: "React", level: 80 },
      { name: "Flask", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    title: "Core CS & Tools",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Operating Systems", level: 85 },
      { name: "Compiler Design", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and concepts I work with to build robust software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-accent">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-cta"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
