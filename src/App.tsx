/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, 
  Users, 
  Gavel, 
  Building2, 
  ShieldCheck, 
  Landmark, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#services" },
    { name: "Principal", href: "#about" },
    { name: "Journal", href: "#" },
    { name: "Contact", href: "#consultation" },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
        isScrolled ? "bg-brand-bg/95 backdrop-blur-md py-6 border-brand-line shadow-2xl" : "bg-transparent py-12 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Scale className="text-brand-accent w-5 h-5 transition-transform group-hover:rotate-12" />
          <div className="text-[13px] tracking-[0.5em] font-bold uppercase leading-none">Verdict Chambers</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[9px] tracking-[0.4em] uppercase font-bold opacity-50 hover:opacity-100 hover:text-brand-accent transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="w-8 h-6 flex flex-col justify-between items-end cursor-pointer group ml-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="w-full h-[1px] bg-brand-primary group-hover:bg-brand-accent transition-all duration-300"></span>
            <span className="w-2/3 h-[1px] bg-brand-primary group-hover:bg-brand-accent transition-all duration-300"></span>
          </div>
        </div>

        {/* Mobile Toggle (Simple for design integrity) */}
        <button className="md:hidden text-brand-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-line p-12 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-serif italic tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col pt-36">
      <main className="flex-1 grid grid-cols-12 relative border-t border-brand-line">
        {/* Vertical Rail Text */}
        <div className="col-span-1 border-r border-brand-line flex items-center justify-center py-16">
          <span className="rotate-180 [writing-mode:vertical-rl] text-[9px] tracking-[0.6em] uppercase opacity-30 font-bold">
            Excellence & Integrity — Est. 2011
          </span>
        </div>

        {/* Content Column */}
        <div className="col-span-11 md:col-span-7 p-10 md:p-20 lg:p-32 flex flex-col justify-center border-r border-brand-line">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-10 flex items-center gap-6">
              <span className="h-[1px] w-20 bg-brand-accent/40"></span>
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-50">Legal Advocacy</span>
            </div>
            <h1 className="text-[10vw] md:text-[120px] leading-[0.8] font-serif italic mb-12 -ml-1 tracking-tighter">
              The Silent <br /> <span className="not-italic opacity-80">Verdict</span>
            </h1>
            <p className="max-w-lg text-lg md:text-xl leading-relaxed font-light text-brand-primary/60 mb-16">
              Clear legal strategy for family disputes, criminal defense, and complex property matters. 
              Bridging the gap between law and justice with architectural precision.
            </p>
            
            <div className="flex flex-wrap gap-20">
              <div>
                <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold mb-4">Address</div>
                <div className="text-sm font-medium tracking-wide">Supreme Court of India, Lawyers Chambers</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold mb-4">Principal</div>
                <div className="text-lg font-serif italic">Adv. Abhishek Jaiswal</div>
              </div>
            </div>
            
            <div className="mt-20 flex gap-4">
               <a 
                href="#consultation" 
                className="bg-brand-primary text-brand-bg px-12 py-6 text-[10px] font-bold tracking-[0.4em] hover:bg-brand-accent transition-all duration-700 uppercase"
              >
                Initiate Counsel
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Column */}
        <div className="hidden md:flex col-span-4 relative items-center justify-center p-16 bg-[#0F0F0F]">
          <div className="w-full aspect-[3/4] border border-brand-line relative group overflow-hidden">
            <img 
               src="https://d2z0o16i8xm8ak.cloudfront.net/web/direct-files/c59d511e02f60d4f813e75eb06c9c522/251be31e-906b-48a3-8af4-a49bdf01aede/e8c22121.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnowbzE2aTh4bThhay5jbG91ZGZyb250Lm5ldC93ZWIvZGlyZWN0LWZpbGVzL2M1OWQ1MTFlMDJmNjBkNGY4MTNlNzVlYjA2YzljNTIyLzI1MWJlMzFlLTkwNmItNDhhMy04YWY0LWE0OWJkZjAxYWVkZS9lOGMyMjEyMS5qcGc~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3ODc0NjIwMX19fV19&Signature=QZ2wx1pDHbqlxIiymzEzM3bBDdJyJYVSeEOGKFHgYLSPFIBqs~T4264IHyAZGxrxNSW9VUPikVc3wRg38f8LYBcCDHdQUpSS-xwi0x6t65PYAojJrrWAsnh8zMZ~YAXMEfZ3wi1dq6-1NJXvNSTwRLvwfioXv4Sy--a~U8z8VGG0bHPurtcjbS3ow1MSxFjjWUcwjN4AAfL7plg-O9rdzRDoAmvhN6NibFVhWvszsieizKWxabNUFNx2SXQgQcIDyMU4OQwILNgDZNFGk16H~MDFWZwcqoBzBfUSECodxKjj85VkT5SQkoQOUFl0u1pid0ypNskuatV586iGdYMZ6w__&Key-Pair-Id=K1BF7XGXAIMYNX&rnd=1778141744930&utm_source=perplexity" 
               alt="Advocate Abhishek Jaiswal"
               className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-12 border border-white/5 pointer-events-none"></div>
            <div className="absolute bottom-8 -left-12 bg-white text-brand-bg p-8 shadow-2xl max-w-[240px]">
              <div className="text-[9px] tracking-[0.3em] uppercase font-bold mb-2 opacity-60">Founding Partner</div>
              <div className="text-2xl font-serif italic leading-tight">Abhishek <br /> Jaiswal</div>
            </div>
          </div>
        </div>
      </main>

      {/* Hero Footer */}
      <footer className="px-12 py-10 border-y border-brand-line flex justify-between items-end">
        <div className="flex gap-16 md:gap-32">
          <div className="max-w-[240px] hidden sm:block">
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold mb-4 opacity-40 underline underline-offset-4 decoration-brand-accent">Perspective</div>
            <p className="text-[11px] leading-relaxed opacity-60 font-medium">
              Challenging the complexity of modern legal systems through intentional simplified strategy.
            </p>
          </div>
          <div className="max-w-[240px]">
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold mb-4 opacity-40">Philosophy</div>
            <p className="text-[11px] leading-relaxed opacity-60 font-medium">
              We focus on practical next steps, ensuring every client finds a clear path to resolution.
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-60 font-bold">Featured Practice</div>
          <a href="#services" className="text-3xl font-serif italic hover:text-brand-accent transition-colors">Family Law &rarr;</a>
        </div>
      </footer>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Family Law", code: "01", category: "MATRIMONIAL" },
    { title: "Criminal Law", code: "02", category: "DEFENSE" },
    { title: "Environment Law", code: "03", category: "REGULATORY" },
    { title: "Real Estate Law", code: "04", category: "LITIGATION" },
    { title: "Matrimonial Disputes", code: "05", category: "CIVIL" },
    { title: "Corporate Compliance", code: "06", category: "AUDIT" },
  ];

  return (
    <section id="services" className="py-32 border-b border-brand-line">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24 flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-40 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-accent/40"></span>
              Practice Areas
            </h2>
            <h3 className="text-6xl md:text-8xl font-serif italic leading-none tracking-tighter">Strategic<br />Advocacy.</h3>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] opacity-40 font-bold max-w-[120px] mb-2 leading-relaxed">
            Curated expertise for serious matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className={`p-12 border-brand-line flex flex-col group min-h-[320px] ${
                idx % 3 !== 2 ? "lg:border-r" : ""
              } ${idx < 3 ? "border-b" : ""} ${idx >= 3 ? "border-b md:border-b-0" : ""}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] tracking-[0.4em] font-bold opacity-40">{service.code}</span>
                <span className="text-[9px] tracking-[0.3em] uppercase font-bold px-2 py-1 border border-brand-line opacity-60 group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                  {service.category}
                </span>
              </div>
              <h4 className="text-3xl font-serif mb-6 group-hover:translate-x-3 transition-transform duration-500">
                {service.title}
              </h4>
              <p className="text-xs text-brand-primary/50 leading-relaxed mb-8 max-w-[220px]">
                Highly specialized legal guidance focused on results and absolute confidentiality.
              </p>
              <a href="#consultation" className="mt-auto inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold uppercase hover:text-brand-accent transition-colors">
                View Details <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 border-b border-brand-line">
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-1 hidden md:flex items-center justify-center">
           <span className="rotate-180 [writing-mode:vertical-rl] text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold whitespace-nowrap">
            Advocating for Truth
          </span>
        </div>
        
        <div className="md:col-span-5 relative group">
          <div className="aspect-[3/4] bg-neutral-900 border border-brand-line overflow-hidden relative">
            <img 
              src="https://d2z0o16i8xm8ak.cloudfront.net/web/direct-files/c59d511e02f60d4f813e75eb06c9c522/251be31e-906b-48a3-8af4-a49bdf01aede/e8c22121.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnowbzE2aTh4bThhay5jbG91ZGZyb250Lm5ldC93ZWIvZGlyZWN0LWZpbGVzL2M1OWQ1MTFlMDJmNjBkNGY4MTNlNzVlYjA2YzljNTIyLzI1MWJlMzFlLTkwNmItNDhhMy04YWY0LWE0OWJkZjAxYWVkZS9lOGMyMjEyMS5qcGc~KiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3ODc0NjIwMX19fV19&Signature=QZ2wx1pDHbqlxIiymzEzM3bBDdJyJYVSeEOGKFHgYLSPFIBqs~T4264IHyAZGxrxNSW9VUPikVc3wRg38f8LYBcCDHdQUpSS-xwi0x6t65PYAojJrrWAsnh8zMZ~YAXMEfZ3wi1dq6-1NJXvNSTwRLvwfioXv4Sy--a~U8z8VGG0bHPurtcjbS3ow1MSxFjjWUcwjN4AAfL7plg-O9rdzRDoAmvhN6NibFVhWvszsieizKWxabNUFNx2SXQgQcIDyMU4OQwILNgDZNFGk16H~MDFWZwcqoBzBfUSECodxKjj85VkT5SQkoQOUFl0u1pid0ypNskuatV586iGdYMZ6w__&Key-Pair-Id=K1BF7XGXAIMYNX&rnd=1778141744930&utm_source=perplexity" 
              alt="Advocate Abhishek Jaiswal"
              className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-brand-accent p-12 text-brand-bg flex flex-col justify-center shadow-2xl">
              <span className="text-6xl font-serif font-bold block mb-4 italic">VIII</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">Years of Continuous <br />Advocacy</span>
          </div>
        </div>

        <div className="md:col-span-6 md:pl-16">
          <h2 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.4em] mb-8">The Principal</h2>
          <h3 className="text-6xl md:text-7xl font-serif mb-10 leading-none">Abhishek <br /><span className="italic">Jaiswal</span></h3>
          <div className="space-y-8 text-brand-primary/60 leading-relaxed font-light text-lg">
            <p>
              Mr. Abhishek Jaiswal is a testament to the dedication required in the legal sector, bridging hard work with a profound commitment to the Courts and the nation. Born in Punjab in 1995, he holds a deep-rooted passion for public welfare and justice.
            </p>
            <p>
              After completing his early education at Assumption Convent School, Abohar, he obtained his Arts and Law degrees from Punjabi University, Patiala. In 2018, he joined the Delhi Bar, training as a young advocate under the tutelage of the legendary Late Madam Lily Thomas.
            </p>
            <p>
              Today, as a member of the Supreme Court Bar Association, he continues to act as lead counsel in path-breaking matters. A champion of Criminology, he has successfully defended high-profile cases in the Supreme Court of India and Delhi High Court, while maintaining a steadfast commitment to providing free legal service to the weaker sections of society.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-brand-line">
              <div>
                <span className="block text-brand-primary font-bold text-2xl mb-2 italic">8+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold">Years Experience</span>
              </div>
              <div>
                <span className="block text-brand-primary font-bold text-2xl mb-2 italic">SCBA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold">Lead Counsel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Inquiry Logged. Our chambers will issue a response within 24 business hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="consultation" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="text-[20vw] font-serif font-bold text-white/[0.01] absolute -bottom-20 -left-10 pointer-events-none select-none">
        CHAMBERS
      </div>
      
      <div className="max-w-7xl mx-auto px-12 relative z-10 grid md:grid-cols-12 gap-24">
        <div className="md:col-span-5">
          <h2 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.4em] mb-8">Engagement</h2>
          <h3 className="text-6xl md:text-7xl font-serif mb-12 italic leading-[0.9]">Secure <br />Counsel.</h3>
          <p className="text-brand-primary/60 mb-16 leading-relaxed font-light text-xl">
            We provide a structured path for serious inquiries. 
            Your preliminary details ensure we assign the correct expertise to your matter.
          </p>
          
          <div className="space-y-12 border-t border-brand-line pt-12">
            <div>
              <span className="block text-[9px] font-bold uppercase text-brand-primary/40 tracking-[0.3em] mb-4">Direct</span>
              <p className="font-serif text-2xl italic tracking-tight">+91 97808 43356</p>
            </div>
            <div>
              <span className="block text-[9px] font-bold uppercase text-brand-primary/40 tracking-[0.3em] mb-4">Digital</span>
              <p className="font-serif text-2xl italic tracking-tight">m.abhishekjaiswal@gmail.com</p>
            </div>
            <div>
              <span className="block text-[9px] font-bold uppercase text-brand-primary/40 tracking-[0.3em] mb-4">Address</span>
              <p className="font-serif text-xl opacity-80 leading-relaxed">Supreme Court of India, Lawyers Chambers</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border border-brand-line p-12 md:p-20 relative">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-accent/20"></div>
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-b border-brand-line pb-4 focus-within:border-brand-accent transition-colors">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-brand-primary/40 mb-2">Identify</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-none p-0 text-xl font-serif italic outline-none placeholder:opacity-20"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="border-b border-brand-line pb-4 focus-within:border-brand-accent transition-colors">
                  <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-brand-primary/40 mb-2">Communication</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-none p-0 text-xl font-serif italic outline-none placeholder:opacity-20"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="border-b border-brand-line pb-4 focus-within:border-brand-accent transition-colors">
                <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-brand-primary/40 mb-2">Matter Classification</label>
                <select 
                  className="w-full bg-transparent border-none p-0 text-xl font-serif italic outline-none appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="" className="bg-brand-bg">Select Area...</option>
                  <option value="family" className="bg-brand-bg">Family Law / Matrimonial</option>
                  <option value="criminal" className="bg-brand-bg">Criminal Defense</option>
                  <option value="property" className="bg-brand-bg">Property / Real Estate</option>
                  <option value="environmental" className="bg-brand-bg">Environmental Law</option>
                </select>
              </div>
              <div className="border-b border-brand-line pb-4 focus-within:border-brand-accent transition-colors">
                <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-brand-primary/40 mb-2">Narrative</label>
                <textarea 
                  rows={3} 
                  required
                  placeholder="Describe your situation..."
                  className="w-full bg-transparent border-none p-0 text-xl font-serif italic outline-none resize-none placeholder:opacity-20"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-primary text-brand-bg py-6 font-bold hover:bg-brand-accent hover:text-brand-bg transition-all duration-700 uppercase tracking-[0.4em] text-[11px]"
              >
                Log Inquiry &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-32 pb-16 text-brand-primary border-t border-brand-line">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <Scale className="text-brand-accent w-6 h-6" />
              <div className="text-[14px] tracking-[0.4em] font-bold uppercase leading-none">Verdict Chambers</div>
            </div>
            <p className="text-[11px] text-brand-primary/40 leading-relaxed uppercase tracking-widest max-w-xs">
              A premium chambers presentation designed with compliance-aware language and architectural rigor.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold mb-10 opacity-40 border-b border-brand-line w-fit pb-2">Navigation</div>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.3em]">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors">Journal</a></li>
              <li><a href="#about" className="hover:text-brand-accent transition-colors">Principal</a></li>
              <li><a href="#consultation" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <div className="text-[10px] tracking-[0.4em] uppercase font-bold mb-10 opacity-40 border-b border-brand-line w-fit pb-2">Protocol</div>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.3em] opacity-40">
              <li>Confidentiality</li>
              <li>24hr Response</li>
              <li>Transparent Fees</li>
              <li>Advocacy</li>
            </ul>
          </div>

          <div className="md:col-span-2 text-right">
             <div className="text-[10px] tracking-[0.4em] uppercase font-bold mb-10 opacity-40 border-b border-brand-line w-fit ml-auto pb-2">Edition</div>
             <div className="text-6xl font-serif italic opacity-10">v.IV</div>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-line flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[9px] opacity-30 uppercase tracking-[0.5em] font-bold">
            © 2026 Verdict Chambers — AJ & Associates
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[9px] opacity-30 uppercase tracking-[0.3em] font-bold hover:text-brand-accent transition-colors">Briefing</a>
            <a href="#" className="text-[9px] opacity-30 uppercase tracking-[0.3em] font-bold hover:text-brand-accent transition-colors">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-[10px] text-brand-primary/30 leading-relaxed max-w-4xl mx-auto italic font-serif">
              Compliance Note: As per the Bar Council of India rules, advocacy chambers are strictly restricted from advertisement. 
              This digital presentation serves as a purely informational repository for established clients and professional inquiries only.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ConsultationForm />
      <Footer />
      
      {/* Scroll to Top Decorator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 z-40 hidden lg:block"
      >
        <a 
          href="#" 
          className="w-12 h-24 border border-brand-primary/10 flex flex-col items-center justify-center gap-2 group transform hover:-translate-y-4 transition-transform duration-500"
        >
          <div className="w-[1px] h-12 bg-brand-accent group-hover:h-16 transition-all duration-500" />
          <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase font-bold tracking-widest">TOP</span>
        </a>
      </motion.div>
    </div>
  );
}
