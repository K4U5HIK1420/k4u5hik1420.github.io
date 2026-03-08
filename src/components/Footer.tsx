import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/k4u5hik1420", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/k4u5hik14", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anantkaushik2447@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-lg">
            Anant<span className="text-accent">.</span>Kaushik
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Anant Kaushik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
