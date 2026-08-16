import React from "react";
import {createRoot} from "react-dom/client";
import {ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Cloud, Sparkles, MapPin} from "lucide-react";
import "./styles.css";

const stats=[{value:"2.5+",label:"years of experience"},{value:"70+",label:"REST APIs shipped"},{value:"97%",label:"backend test coverage"},{value:"3",label:"enterprise domains"}];

const experience=[
{company:"Tata Consultancy Services",role:"Backend Developer — Scandinavian Airlines (SAS)",period:"Jun 2025 — Present",tag:"Current",description:"Building the enterprise Crew Bidding System for Scandinavian Airlines — backend and BFF services for crew preference bidding, administrative configuration, rule-driven validation and airline system integrations.",tech:["TypeScript","Node.js","Fastify","Prisma","PostgreSQL","Azure Service Bus","React","Jest","SOAP / XML"],points:["Designed and delivered the Admin Request Group API end to end — create, list with filters, get, update, patch, soft delete and bulk soft delete — with full request/response schema validation.","Led a primary-key redesign so the client could edit request group codes: introduced a surrogate auto-generated ID, authored the backfill migration, and updated every dependent foreign key and code reference across services.","Owned Prisma schema and PostgreSQL migrations on Azure — validated on a local database first, kept schema, migrations and `db pull` in sync for the team, then deployed cleanly to the shared environment.","Reworked the Stop Bid matching-pairings API to return a Figma-aligned pairing → duty → leg hierarchy, and added pagination that cut month-range responses from minutes to interactive load times.","Analysed crew-eligibility and bid-period rule alignment — carrier/AOC matching, base and annotation handling, and aircraft qualification mapping — and drove clarifications with the client product owner.","Delivered Bid Period, Bid Window, Priority Management and Request Group modules, including role-based admin access and audit-safe soft deletes.","Integrated external airline systems through SOAP/XML clients and Azure Service Bus messaging for catalog and roster data synchronisation.","Kept backend coverage at ~97% lines with Jest controller, route and service tests; resolved automated PR review findings and coverage-gate failures before merge.","Authored API test reports and UAT evidence used to close tickets and hand over to QA."]},
{company:"CSG Technosol",role:"Associate Developer",period:"Jan 2025 — Jun 2025",description:"Worked across backend and frontend components of payment gateway and settlement platforms.",tech:["Python","Django","REST APIs","JavaScript","WebSockets","Django Channels"],points:["Implemented role-based access control using middleware and custom decorators.","Developed and modified payment, settlement and dashboard APIs.","Contributed to real-time technical and transaction support functionality."]},
{company:"FaithCode Technologies",role:"Junior Software Engineer",period:"Feb 2024 — Jan 2025",description:"Built backend and frontend functionality for an Applicant Tracking System and recruitment workflows.",tech:["Python","Django","React","REST APIs","SQL","GPT"],points:["Developed 30+ Django REST APIs across candidate, interview and placement workflows.","Implemented GPT-based job-description parsing into structured job data.","Built React components, frontend functionality and automated email workflows."]}
];
const projects=[
{title:"Crew Bidding System",icon:"✈️",description:"Enterprise airline platform for crew preference submission, bidding workflows, admin configuration, business-rule validation and external system synchronisation. Monorepo with backend, BFF, batch jobs, queue listeners and a rule engine.",tech:["TypeScript","Node.js","Fastify","Prisma","PostgreSQL","Azure Service Bus"]},
{title:"Spring Boot Microservice Toolkit",icon:"☕",description:"Self-built Java service applying the same backend patterns I use at work: layered architecture, JPA entities and migrations, DTO validation, JWT-secured role-based endpoints, global exception handling and JUnit coverage.",tech:["Java","Spring Boot","Spring Data JPA","Hibernate","PostgreSQL","JUnit","Maven"]},
{title:"Applicant Tracking System",icon:"👥",description:"Multi-tenant recruitment platform covering candidate onboarding, job management, interviews, document parsing and placement workflows.",tech:["Python","Django","DRF","React","SQL","GPT"]},
{title:"Payment Gateway Platform",icon:"💳",description:"Payment and settlement dashboards with secure role-based access, API workflows and real-time support functionality.",tech:["Python","Django","REST APIs","JavaScript","WebSockets"]}
];
const skills={"Backend":["Node.js","Fastify","TypeScript","Python","Django","Django REST Framework","REST APIs"],"Java & Spring":["Java","Spring Boot","Spring MVC","Spring Data JPA","Hibernate","Spring Security","Maven","JUnit"],"Frontend":["React.js","JavaScript","HTML","CSS","jQuery"],"Data":["PostgreSQL","MySQL","SQL","Prisma ORM","Schema Migrations"],"Cloud & Integration":["AWS","Azure","Azure Service Bus","SOAP","XML","JSON"],"Engineering":["Microservices","RBAC","Middleware","WebSockets","Docker","Git","CI/CD","Jest","Unit Testing"],"AI & GenAI":["GitHub Copilot","AI Agents","GPT Integration","Prompt Engineering"]};

const Chips=({items})=><div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div>;

function App(){
return <div className="app">
<header className="nav"><a className="brand" href="#top">AK<span>.</span></a><nav><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="mailto:averma.sre@gmail.com">Let's talk <ArrowUpRight size={16}/></a></header>
<main id="top">
<section className="hero section"><div className="hero-copy"><div className="eyebrow"><span/>Backend-focused Full Stack Developer</div><h1>Building reliable<br/><em>software systems.</em></h1><p className="hero-text">I'm Aakash Kumar, a software developer with 2.5+ years of professional experience building backend-heavy full-stack applications with Node.js, TypeScript, Python, Java, React and PostgreSQL — currently shipping an airline crew bidding platform for Scandinavian Airlines.</p><div className="hero-actions"><a className="primary-btn" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="secondary-btn" href="/Aakash_Kumar_Resume.pdf" target="_blank" rel="noreferrer"><Download size={17}/> Resume</a></div><div className="socials"><a href="https://www.linkedin.com/in/avermasre" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a><a href="https://github.com/averma0001" target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a><a href="https://leetcode.com/avermasre" target="_blank" rel="noreferrer"><Code2 size={18}/>LeetCode</a></div></div>
<div className="hero-visual"><div className="glow"/><div className="code-card"><div className="code-top"><span/><span/><span/><small>backend.ts</small></div><pre>{`const developer = {
  name: "Aakash Kumar",
  focus: "Backend",
  stack: [
    "Node.js", "TypeScript",
    "Java", "Spring Boot",
    "Python", "PostgreSQL"
  ],
  mindset: "Build. Learn. Improve."
};`}</pre></div><div className="floating-card"><Sparkles size={17}/><div><strong>2.5+ years</strong><small>professional experience</small></div></div></div></section>

<section className="section stats-section"><div className="stats">{stats.map(s=><div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div></section>

<section id="about" className="section compact-section"><div className="section-label">01 / About</div><div className="about-grid"><h2>Backend is my strength.<br/><span>Full-stack is my range.</span></h2><div><p>I work primarily on backend services, APIs, business logic, data modelling and migrations, while staying comfortable contributing across the frontend.</p><p>Today I build rule-driven airline systems in TypeScript and Node.js on PostgreSQL and Azure, with earlier production experience in Python/Django and hands-on work in Java and Spring Boot. Integrations, microservices, testing discipline and AI-assisted development run through all of it.</p></div></div></section>

<section id="experience" className="section"><div className="section-label">02 / Experience</div><div className="timeline">{experience.map((item,i)=><article className="experience" key={item.company}><div className="timeline-dot">{String(i+1).padStart(2,"0")}</div><div className="exp-main"><div className="exp-head"><div><h3>{item.company}{item.tag&&<span className="tag">{item.tag}</span>}</h3><p>{item.role}</p></div><time>{item.period}</time></div><p className="muted">{item.description}</p><ul>{item.points.map(p=><li key={p}>{p}</li>)}</ul><Chips items={item.tech}/></div></article>)}</div></section>

<section id="projects" className="section"><div className="section-label">03 / Selected work</div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="project-top"><span className="project-icon">{p.icon}</span><span>0{i+1}</span></div><h3>{p.title}</h3><p>{p.description}</p><Chips items={p.tech}/></article>)}</div></section>

<section id="skills" className="section"><div className="section-label">04 / Toolkit</div><div className="skills-grid">{Object.entries(skills).map(([g,items])=><article className="skill-group" key={g}><h3>{g}</h3><Chips items={items}/></article>)}</div></section>

<section className="section credentials"><div className="credential-card"><Cloud size={24}/><div><strong>AWS Certified Developer — Associate</strong><span>DVA-C02</span></div></div><div className="credential-card"><Sparkles size={24}/><div><strong>Claude Certified Architect — Professional</strong><span>Anthropic</span></div></div></section>

<section id="contact" className="section contact"><div className="section-label">05 / Contact</div><div className="contact-box"><div><p className="eyebrow"><span/>Have a role or project?</p><h2>Let's build something<br/><em>worth shipping.</em></h2></div><div className="contact-links"><a href="mailto:averma.sre@gmail.com"><Mail size={18}/>averma.sre@gmail.com<ArrowUpRight size={16}/></a><a href="https://www.linkedin.com/in/avermasre" target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn<ArrowUpRight size={16}/></a><a href="https://github.com/averma0001" target="_blank" rel="noreferrer"><Github size={18}/>GitHub<ArrowUpRight size={16}/></a></div></div></section>
</main>
<footer><span>© {new Date().getFullYear()} Aakash Kumar</span><span><MapPin size={14}/>India</span><span>Built with React</span></footer>
</div>}

createRoot(document.getElementById("root")).render(<App/>);