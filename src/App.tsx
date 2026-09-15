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
          <div className="text-[15px] text-[#e0e0e0] tracking-[0.5em] font-bold uppercase leading-none">Verdict Chambers</div>
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
              Specializing in complex litigation and arbitration across civil and criminal jurisdictions. 
              A premier chamber of advocates and corporate legal experts practicing before the Delhi High Court and the Supreme Court of India.
            </p>
            
            <div className="flex flex-wrap gap-10 md:gap-16">
              <div>
                <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold mb-4">Address</div>
                <div className="text-sm font-medium tracking-wide max-w-[180px]">Supreme Court of India, Lawyers Chambers</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold mb-4">Principal</div>
                <div className="text-lg font-serif italic">Adv. Abhishek Jaiswal</div>
              </div>
              <div>
                <div className="text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold mb-4">Contact</div>
                <a href="mailto:m.abhishekjaiswal@gmail.com" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
                  m.abhishekjaiswal@gmail.com
                </a>
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
        <div className="hidden md:flex col-span-4 relative flex-col items-center justify-center p-16 bg-[#0F0F0F]">
          <div className="w-full aspect-[3/4] border border-brand-line relative group overflow-hidden mb-6">
            <img 
               src="/profile.jpg" 
               alt="Advocate Abhishek Jaiswal"
               className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
               referrerPolicy="no-referrer"
               fetchPriority="high"
               decoding="sync"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-transparent pointer-events-none opacity-50" />
            <div className="absolute inset-6 border border-white/5 pointer-events-none"></div>
          </div>
          <div className="text-center">
            <div className="text-[9px] text-brand-accent tracking-[0.3em] uppercase font-bold mb-1 opacity-90">Founding Partner</div>
            <div className="text-xl font-serif italic text-brand-primary">Abhishek Jaiswal</div>
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
              src="/profile.jpg" 
              alt="Advocate Abhishek Jaiswal"
              className="w-full h-full object-cover transition-all duration-1000"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-[140px] aspect-square bg-brand-accent p-6 text-brand-bg flex flex-col justify-center text-center shadow-2xl">
              <span className="text-4xl font-serif font-bold block mb-2 italic">VIII</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] leading-relaxed">Years of Continuous <br />Advocacy</span>
          </div>
        </div>

        <div className="md:col-span-6 md:pl-16">
          <h2 className="text-[15px] text-center font-bold text-brand-accent uppercase tracking-[0.4em] mb-8">The Principal</h2>
          <h3 className="text-[42px] text-center mb-10 leading-none" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Abhishek <span className="italic">Jaiswal</span></h3>
          <div className="space-y-8 text-brand-primary/60 leading-relaxed font-light text-lg text-justify">
            <p>
              Mr. Abhishek Jaiswal is a testament to the dedication required in the legal sector, bridging hard work with a profound commitment to the Courts and the nation. Born in Punjab in 1995, he holds a deep-rooted passion for public welfare and justice.
            </p>
            <p>
              After completing his early education at Assumption Convent School, Abohar, he obtained his Arts and Law degrees from Punjabi University, Patiala. In 2018, he joined the Delhi Bar, training as a young advocate under the tutelage of the legendary Late Madam Lily Thomas.
            </p>
            <p>
              Today, as a member of the Supreme Court Bar Association, he has successfully represented over 100 clients across civil, criminal, and corporate litigation before the Supreme Court of India, High Courts, and various Tribunals. With extensive expertise spanning high-stakes litigation—including Special Leave Petitions and Writ Petitions—commercial arbitration, and strategic contract negotiation, he seamlessly bridges rigorous legal research with effective dispute resolution.
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
  // @ts-ignore - emailjs is loaded via script tag in index.html
  window.emailjs.send(
    "service_ejm8izr",
    "template_poth73o",
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    },
    "x8yyVxVW4rHrQSSHO"
  ).then(
    () => {
      alert("Inquiry Logged. Our chambers will issue a response within 24 business hours.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    },
    (error: any) => {
      alert("Something went wrong. Please try again or call directly.");
      console.error(error);
    }
  );
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

const AssociatePartners = () => {
  const partners = [
    {
      name: "Babneet Singh",
      role: "Advocate | Punjab & Haryana High Court, Chandigarh",
      bio: [
        "Babneet Singh is a High Court litigator practising before the Hon’ble Punjab & Haryana High Court, Chandigarh, with a principal practice in criminal and service law, alongside constitutional and public-law litigation. His practice focuses on strategic preparation, effective courtroom advocacy and matters carrying significant personal, professional and public consequences.",
        "He has secured substantive relief in service-law matters concerning annual notional increments and full payscale entitlement during probation, and has represented accused persons in sensitive POCSO, Rape, Murder and Cyber-Crime matters.",
        "Mr. Singh also serves as Probono Legal Advisor to select NGOs, including Water Warriors Punjab, working in environmental protection and conservation of Punjab’s rivers and water resources, and the Crime Control and Research Organization, working against crime against women and for vulnerable and marginalised communities.",
        "His academic background includes B.A. (Law) from Punjabi University Patiala, LL.B. from Dr. B.R. Ambedkar Law University, and a PGD in IBM from Kingston University, Ontario, Canada.",
        "He belongs to a family with a distinguished public-service legacy. His professional philosophy rests on intellectual rigour, discretion and principled advocacy."
      ],
      image: "/babneet.jpg",
    }
  ];

  return (
    <section id="associates" className="py-32 border-b border-brand-line bg-brand-bg">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24 text-center">
          <span className="h-[1px] w-12 bg-brand-accent/40 block mx-auto mb-6"></span>
          <h2 className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.4em] mb-4">The Chamber</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Associate Partners</h3>
          <p className="text-brand-primary/50 font-light max-w-2xl mx-auto">
            Our distinguished counsel brings decades of combined experience across civil and criminal jurisdictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 aspect-[3/4] overflow-hidden relative border border-brand-line/50">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60" />
              </div>
              <div className="lg:col-span-7">
                <h4 className="text-3xl font-serif mb-2">{partner.name}</h4>
                <h5 className="text-[9px] font-bold text-brand-accent uppercase tracking-[0.3em] mb-6 leading-relaxed">{partner.role}</h5>
                <div className="space-y-4 text-sm text-brand-primary/70 leading-relaxed font-light text-justify">
                  {partner.bio.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <AssociatePartners />
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
