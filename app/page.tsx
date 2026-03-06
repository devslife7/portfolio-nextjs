'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
import { Toaster, toast } from 'sonner';
import sendMessage from '@/actions/contact';
import { ContactFormSchema } from '@/lib/validators/contact-form';

const { theme } = resolveConfig(tailwindConfig);
const primaryColor = (theme.colors as any).primary.DEFAULT as string;

export default function Prototype2() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isPending, setIsPending] = useState(false)
    const [activeTab, setActiveTab] = useState('all')

    const projects = [
        {
            alt: 'Cocktail App', src: '/companyTools.gif',
            title: 'Special Cocktails',
            badge: { text: 'COMPLETED', className: 'border-green-500 text-green-500' },
            type: 'B2B Utility', stack: 'React / G-Sheets', metric: 'Real-time Calc', core: 'PDF Automation',
            description: 'Batching tool for bartenders. Calculates large-scale quantities and generates reports from custom recipes.',
            demo: 'https://companytools.vercel.app/',
            source: 'https://github.com/devslife7/companytools',
            categories: ['featured', 'tools'],
        },
        {
            alt: 'Construction Website', src: '/dsbgeneral.webp',
            title: 'DSB Construction',
            badge: { text: 'MAINTENANCE', className: 'border-primary text-primary' },
            type: 'Enterprise Showcase', stack: 'Next.js / Postgres', metric: 'SSR Validation', core: 'Review CRUD',
            description: 'Business portal with admin media handling and server-side validation for customer interactions.',
            demo: 'https://dsbgeneralconstruction.vercel.app/',
            source: 'https://github.com/devslife7/dsbgeneralconstruction',
            categories: ['featured', 'commercial'],
        },
        {
            alt: 'Daycare Website', src: '/cdcdaycare.webp',
            title: 'CDC DayCare',
            badge: { text: 'COMPLETED', className: 'border-green-500 text-green-500' },
            type: 'CMS Portal', stack: 'Next.js / Tailwind', metric: 'Multi-Language', core: 'Lead Capture',
            description: 'Educational facility landing with i18n support and optimized mobile communication flows.',
            demo: 'https://cdcdaycare.vercel.app/en/home',
            source: 'https://github.com/devslife7/cdcdaycare',
            categories: ['commercial'],
        },
        {
            alt: 'Soccer App', src: 'https://media.giphy.com/media/HeeRZi4hagLEl3qPIY/giphy.gif',
            title: 'FutFriends',
            badge: { text: 'LEGACY', className: 'border-yellow-500 text-yellow-500' },
            type: 'Social Platform', stack: 'Rails / React', metric: 'JWT Secure', core: 'REST API',
            description: 'Match-finding platform for football enthusiasts. Custom database schema with complex user relationships.',
            demo: null,
            source: 'https://github.com/devslife7/FutHub',
            categories: ['legacy'],
        },
    ]

    const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.categories.includes(activeTab))

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('from_name') as string
        const email = formData.get('from_email') as string
        const message = formData.get('from_message') as string

        const validated = ContactFormSchema.safeParse({ name, email, message })
        if (!validated.success) {
            toast.error(
                <div className="text-sm">
                    {validated.error.issues.map((issue, idx) => (
                        <p key={idx}>&#183; {issue.message}</p>
                    ))}
                </div>
            )
            return
        }

        setIsPending(true)
        try {
            const resp = await sendMessage(validated.data)
            if (!resp.success) {
                toast.error('Server error. Check console for more details.')
                console.error(resp.error)
                return
            }
            toast.success(`Thanks ${name}, your message was sent successfully`)
            formRef.current?.reset()
        } finally {
            setIsPending(false)
        }
    }

    useEffect(() => {
        // Smooth scrolling logic
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }
                }
            });
        });
    }, []);

    return (
        <>
        <Toaster richColors />
        <div className="proto-root bg-[#0a0a0a] text-[#d4d4d4] antialiased selection:bg-primary selection:text-black min-h-screen font-mono">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;700;900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .proto-root {
            --primary: ${primaryColor};
            --bg-main: #0a0a0a;
            --border-heavy: #262626;
            --grid-line: #171717;
            font-family: 'JetBrains Mono', monospace;
        }
        .proto-root .brutalist-border {
            border: 2px solid var(--border-heavy);
        }
        .proto-root .grid-bg {
            background-image: 
                linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
                linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .proto-root .header-text {
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            letter-spacing: -0.05em;
        }
        .proto-root input, .proto-root textarea {
            background-color: transparent !important;
            border-radius: 0 !important;
            border: 1px solid var(--border-heavy) !important;
            color: white !important;
        }
        .proto-root input:focus, .proto-root textarea:focus {
            border-color: var(--primary) !important;
            box-shadow: none !important;
            outline: none !important;
        }
        .proto-root .skill-tag {
            border: 1px solid var(--border-heavy);
            padding: 4px 10px;
            font-size: 0.75rem;
            transition: all 0.2s;
        }
        .proto-root .skill-tag:hover {
            background-color: var(--primary);
            color: black;
            border-color: var(--primary);
        }
        
        /* Utility classes overrides for local scoping */
        .text-primary { color: var(--primary) !important; }
        .bg-primary { background-color: var(--primary) !important; }
        .border-primary { border-color: var(--primary) !important; }
        .hover\\:text-primary:hover { color: var(--primary) !important; }
        .hover\\:bg-primary:hover { background-color: var(--primary) !important; }
        .decoration-primary { text-decoration-color: var(--primary) !important; }
      `}} />

            <nav className="fixed w-full z-50 bg-black border-b-2 border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        <div className="flex-shrink-0 flex items-center">
                            <a className="text-xl font-black header-text tracking-tighter" href="#">
                                MV<span className="text-primary">.VIRTUAL</span>
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a className="text-xs font-bold hover:text-primary transition-colors uppercase" href="#projects">/projects</a>
                            <a className="text-xs font-bold hover:text-primary transition-colors uppercase" href="#skills">/stack</a>
                            <a className="text-xs font-bold hover:text-primary transition-colors uppercase" href="#about">/logs</a>
                            <a className="text-xs font-bold hover:text-primary transition-colors uppercase" href="#contact">/ping</a>
                        </div>
                        <div className="md:hidden">
                            <span className="material-symbols-outlined text-primary">terminal</span>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-14" id="home">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" style={{ opacity: 0.9 }}></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-4xl border-l-4 border-primary pl-6 md:pl-10">
                        <div className="inline-block bg-primary text-black text-[10px] font-bold px-2 py-0.5 mb-4">STATUS: ONLINE</div>
                        <h1 className="text-5xl md:text-8xl font-black header-text text-white leading-none mb-4">
                            MARCOS<br />Hello world
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-neutral-400 mb-8 max-w-2xl leading-tight">
                            <span className="text-white font-bold">TECHNICAL VIRTUOSO</span> <br />
                            Engineering high-performance full-stack systems with data-driven precision.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a className="px-6 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-primary transition-colors" href="#projects">
                                View manifest ↓
                            </a>
                            <div className="flex gap-4">
                                <a className="text-neutral-500 hover:text-white" href="https://github.com/devslife7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-xl"></i></a>
                                <a className="text-neutral-500 hover:text-white" href="https://www.linkedin.com/in/marcosvelasco/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
                    <div className="text-[10px] space-y-1 font-mono">
                        <p>&gt; SYSTEM: 64-BIT ARCHITECTURE</p>
                        <p>&gt; KERNEL: OPTIMIZED</p>
                        <p>&gt; LOCALIZATION: ALEXANDRIA, VA</p>
                        <p>&gt; UPTIME: 100%</p>
                    </div>
                </div>
            </header>

            <section className="py-20 bg-black" id="projects">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-6 border-b-2 border-neutral-900 pb-4">
                        <div>
                            <h2 className="text-3xl font-black header-text text-white">Project_Repository</h2>
                            <p className="text-xs text-neutral-500 mt-1 uppercase">Filtering: All_Assets / High_Impact</p>
                        </div>
                        <div className="text-xs font-mono text-primary hidden md:block">COUNT: {String(filteredProjects.length).padStart(2, '0')}</div>
                    </div>

                    <div className="flex border-b border-neutral-800 mb-8">
                        {['all', 'featured', 'commercial', 'tools', 'legacy'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-[10px] font-bold uppercase font-mono tracking-widest transition-colors ${
                                    activeTab === tab
                                        ? 'text-primary border-b-2 border-primary -mb-px'
                                        : 'text-neutral-500 hover:text-white'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-900 brutalist-border overflow-hidden" style={{ gap: '1px' }}>
                        {filteredProjects.map(project => (
                            <div key={project.title} className="bg-black p-6 group hover:bg-neutral-950 transition-colors">
                                <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                                    <img alt={project.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={project.src} />
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white header-text">{project.title}</h3>
                                    <span className={`text-[10px] font-bold border px-2 py-0.5 ${project.badge.className}`}>{project.badge.text}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-6 uppercase text-neutral-500">
                                    <div><span className="text-white block">TYPE:</span> {project.type}</div>
                                    <div><span className="text-white block">STACK:</span> {project.stack}</div>
                                    <div><span className="text-white block">METRIC:</span> {project.metric}</div>
                                    <div><span className="text-white block">CORE:</span> {project.core}</div>
                                </div>
                                <p className="text-sm text-neutral-400 mb-6 line-clamp-2">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.demo && (
                                        <a className="text-xs font-bold uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                    )}
                                    <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href={project.source} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Source</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-neutral-950 border-y border-neutral-900" id="skills">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black header-text text-white mb-12">System_Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xs font-bold text-primary uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Frontend_Dev</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag">HTML5_CSS3</span>
                                <span className="skill-tag">Javascript_ES6</span>
                                <span className="skill-tag">React_NextJS</span>
                                <span className="skill-tag">Tailwind_Architecture</span>
                                <span className="skill-tag">Typescript_Static</span>
                                <span className="skill-tag">SSR_Rendering</span>
                                <span className="skill-tag">PWA_Development</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-primary uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Backend_Eng</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag">Ruby_on_Rails</span>
                                <span className="skill-tag">Node_Runtime</span>
                                <span className="skill-tag">PostgreSQL_DB</span>
                                <span className="skill-tag">RESTful_Architecture</span>
                                <span className="skill-tag">JWT_Security</span>
                                <span className="skill-tag">OAuth_Integration</span>
                                <span className="skill-tag">Serverless_Functions</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold text-primary uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Technical_Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="skill-tag">Git_VersionControl</span>
                                <span className="skill-tag">AWS_Cloud_Infrastructure</span>
                                <span className="skill-tag">Figma_Prototyping</span>
                                <span className="skill-tag">Docker_Containers</span>
                                <span className="skill-tag">Agile_Workflows</span>
                                <span className="skill-tag">Vercel_Deployment</span>
                                <span className="skill-tag">Blob_Storage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-black overflow-hidden" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-[10px] font-bold text-neutral-600 mb-2">// BIOS_INIT</div>
                        <h2 className="text-3xl font-black header-text text-white mb-6">About_Developer</h2>
                        <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
                            <p>
                                I am Marcos Velasco, a Full Stack Software Developer specialized in building scalable Ruby on Rails and JavaScript ecosystems. My approach is rooted in data integrity and performance efficiency.
                            </p>
                            <p>
                                I excel in designing RESTful architectures and complex database schemas. My focus is on creating digital tools that prioritize functional utility and architectural elegance. Every line of code is written with maintenance and performance as primary metrics.
                            </p>
                        </div>
                        <div className="mt-8">
                            <a className="inline-block brutalist-border px-8 py-3 font-bold uppercase text-xs hover:bg-white hover:text-black transition-all" href="https://docs.google.com/document/d/17uI6lYjB1E6AioHoP3Cc6fBPmfFkutp2KXSefHKYsa8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                                Download_Manifest (CV) ↗
                            </a>
                        </div>
                    </div>
                    <div className="relative brutalist-border p-8 bg-neutral-950">
                        <div className="absolute -top-3 -right-3 bg-primary text-black text-[10px] font-bold px-2 py-0.5">ENTITY_ID: 10443</div>
                        <div className="font-mono text-[11px] leading-6">
                            <p className="text-primary font-bold">const dev = {'{'}</p>
                            <p className="pl-4">name: "Marcos Velasco",</p>
                            <p className="pl-4">role: "Full Stack Developer",</p>
                            <p className="pl-4">focus: ["Performance", "Scalability", "Utility"],</p>
                            <p className="pl-4">location: "Alexandria, VA",</p>
                            <p className="pl-4">languages: ["ES6", "Ruby", "SQL", "TS"],</p>
                            <p className="pl-4">passion: "Solving Complex Inefficiencies"</p>
                            <p className="text-primary font-bold">{'}'};</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-neutral-950" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-black header-text text-white mb-8">Establish_Link</h2>
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                    <div className="text-xs uppercase font-mono">
                                        <span className="block text-neutral-500">Location</span>
                                        <span className="text-white">Alexandria, VA, US</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                                    <div className="text-xs uppercase font-mono">
                                        <span className="block text-neutral-500">Email</span>
                                        <span className="text-white underline decoration-primary">devslife@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">monitoring</span>
                                    <div className="text-xs uppercase font-mono">
                                        <span className="block text-neutral-500">Uptime</span>
                                        <span className="text-white">Active for Remote / On-Site</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="brutalist-border p-1 bg-black">
                            <div className="bg-neutral-900/50 p-6 md:p-8">
                                <h3 className="text-sm font-bold text-white uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Direct_Message</h3>
                                <form ref={formRef} className="space-y-4" onSubmit={handleFormSubmit}>
                                    <div>
                                        <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">User_Identifier</label>
                                        <input className="w-full text-sm py-2 px-3 text-white focus:outline-none" placeholder="FULL NAME" type="text" name="from_name" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">Communication_Node</label>
                                        <input className="w-full text-sm py-2 px-3 text-white focus:outline-none" placeholder="EMAIL_ADDRESS" type="email" name="from_email" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">Payload_Data</label>
                                        <textarea className="w-full text-sm py-2 px-3 text-white focus:outline-none resize-none" placeholder="MESSAGE_CONTENTS" rows={4} name="from_message"></textarea>
                                    </div>
                                    <div>
                                        <button className="w-full py-3 bg-primary text-black font-black uppercase text-xs hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isPending}>
                                            <span className="material-symbols-outlined text-sm">{isPending ? 'hourglass_empty' : 'send'}</span>
                                            {isPending ? 'TRANSMITTING...' : 'EXECUTE_SEND'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-black py-10 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white font-black header-text text-lg">MV.VIRTUAL</div>
                    <div className="text-neutral-500 text-[10px] font-mono">
                        © 2024 SERIAL_NO_889241. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex space-x-6 text-neutral-400">
                        <a className="hover:text-primary" href="https://github.com/devslife7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a className="hover:text-primary" href="https://www.linkedin.com/in/marcosvelasco/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a className="hover:text-primary" href="https://www.facebook.com/marcos.velasco.5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}
