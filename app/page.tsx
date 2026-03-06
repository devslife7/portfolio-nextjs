'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { Toaster, toast } from 'sonner';
import sendMessage from '@/actions/contact';
import { ContactFormSchema } from '@/lib/validators/contact-form';

export default function Prototype2() {
    const formRef = useRef<HTMLFormElement>(null)
    const touchStartX = useRef<number>(0)
    const [isPending, setIsPending] = useState(false)
    const [activeTab, setActiveTab] = useState('featured')

    const projects = [
        {
            alt: 'Cocktail App', src: '/companytools.webp',
            title: 'Internal Tools DC',
            badge: { text: 'FEATURED', className: 'border-featured text-featured' },
            type: 'B2B Utility', stack: 'React / G-Sheets', metric: 'Real-time Calc', core: 'PDF Automation',
            description: 'Batching tool for bartenders. Calculates large-scale quantities and generates reports from custom recipes.',
            demo: 'https://internaltoolsdc.com/',
            source: 'private',
            categories: ['featured', 'tools'],
        },
        {
            alt: 'Construction Website', src: '/dsbgeneralv3.webp',
            title: 'DSB Construction',
            badge: { text: 'MAINTENANCE', className: 'border-maintenance text-maintenance' },
            type: 'Enterprise Showcase', stack: 'Next.js / Postgres', metric: 'SSR Validation', core: 'Review CRUD',
            description: 'Business portal with admin media handling and server-side validation for customer interactions.',
            demo: 'https://dsbgeneralconstruction.vercel.app/',
            source: 'https://github.com/devslife7/dsbgeneralconstruction',
            categories: ['featured', 'commercial'],
        },
        {
            alt: 'Daycare Website', src: '/cdcdaycarev3.webp',
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
            badge: { text: 'LEGACY', className: 'border-legacy text-legacy' },
            type: 'Social Platform', stack: 'Rails / React', metric: 'JWT Secure', core: 'REST API',
            description: 'Match-finding platform for football enthusiasts. Custom database schema with complex user relationships.',
            demo: null,
            source: 'https://github.com/devslife7/FutHub',
            categories: ['legacy'],
        },
        {
            alt: 'ProTaskr App', src: 'https://media.giphy.com/media/0amLFjL4e8V4c05NBH/giphy.gif',
            title: 'proTaskr',
            badge: { text: 'LEGACY', className: 'border-legacy text-legacy' },
            type: 'Task Manager', stack: 'Rails / React', metric: 'JWT Secure', core: 'Full CRUD',
            description: 'Helps your teams organize, track, and manage their work. Built with a custom REST API and multi-user authentication.',
            demo: null,
            source: 'https://github.com/devslife7/taskManager',
            categories: ['legacy'],
        },
        {
            alt: 'Qatar 2022 Tracker', src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzE3MGMxOWE1ZWM3MmVjNjJlYzcwZmNmMTJlOTA2ZDdjODVlNDk2YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/iRTgPcLFK51zGgoUvw/giphy.gif',
            imgFit: 'object-contain',
            title: 'Qatar 2022',
            badge: { text: 'LEGACY', className: 'border-legacy text-legacy' },
            type: 'Live Tracker', stack: 'React / API', metric: '120 daily visits', core: 'Real-time Data',
            description: 'World Cup 2022 match tracker with real-time results via API-FOOTBALL. Peaked at 120+ visits per day during the tournament.',
            demo: 'https://main.d311px3iblll1g.amplifyapp.com/',
            source: 'https://github.com/devslife7/qatar2022',
            categories: ['legacy'],
        },
        {
            alt: 'JP Home Service', src: '/jphomeservicev2.webp',
            title: 'JP Home Services',
            badge: { text: 'MAINTENANCE', className: 'border-maintenance text-maintenance' },
            type: 'Commercial Site', stack: 'Next.js / Tailwind', metric: 'Multi-Service', core: 'Lead Capture',
            description: 'Professional home remodeling website for a Virginia/DC/MD contractor. Features service showcase, contact section with Google Maps, and mobile-first responsive design.',
            demo: 'https://www.jphomeservice.org/',
            source: 'https://github.com/devslife7/jphomeservice',
            categories: ['featured', 'commercial'],
        },
        {
            alt: 'Sams Inn Restaurant', src: '/samsinnrestaurantv2.webp',
            title: "Sam's Inn Restaurant",
            badge: { text: 'COMPLETED', className: 'border-green-500 text-green-500' },
            type: 'Restaurant Site', stack: 'Next.js / Tailwind', metric: 'Mobile-First', core: 'Lead Capture',
            description: "Restaurant website for Sam's Inn featuring menu showcase, location info, and a clean mobile-first design.",
            demo: 'https://samsinnrestaurant.com/',
            source: 'private',
            categories: ['featured', 'commercial'],
        },
    ]

    const tabs = ['all', 'featured', 'commercial', 'tools', 'legacy'] as const

    const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.categories.includes(activeTab))

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) < 50) return
        const currentIndex = tabs.indexOf(activeTab as any)
        if (diff > 0 && currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1])
        } else if (diff < 0 && currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1])
        }
    }

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
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
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

        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        const raf = requestAnimationFrame(() => {
            document.querySelectorAll('#projects .reveal').forEach(el => observer.observe(el));
        });
        return () => { cancelAnimationFrame(raf); observer.disconnect(); };
    }, [activeTab]);

    return (
        <>
            <Toaster richColors />
            <div className="proto-root bg-[#0a0a0a] text-[#d4d4d4] antialiased selection:bg-primary selection:text-black min-h-screen font-mono">
                <style dangerouslySetInnerHTML={{
                    __html: `
        .proto-root {
            --primary: #00FF2B;
            --bg-main: #0a0a0a;
            --border-heavy: #262626;
            --grid-line: #171717;
            font-family: var(--font-jetbrains-mono), monospace;
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
            font-family: var(--font-inter), sans-serif;
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUpSubtle {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 0.2; transform: translateY(0); }
        }
        @keyframes growDown {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .hero-fade { opacity: 0; animation: fadeInUp 0.6s ease forwards; }
        .hero-fade-subtle { opacity: 0; animation: fadeInUpSubtle 0.6s ease forwards; }
        .border-grow-wrapper { position: relative; }
        .border-grow-wrapper::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--primary);
          transform-origin: top;
          animation: growDown 0.6s ease forwards;
        }
        .blink-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: black; margin-right: 6px; animation: blink 1.2s ease infinite; vertical-align: middle; }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(4px); }
        }
        .arrow-bounce { display: inline-block; animation: bounceDown 1.6s ease-in-out infinite; }

        .reveal, .reveal-left, .reveal-right {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal { transform: translateY(24px); }
        .reveal-left { transform: translateX(-24px); }
        .reveal-right { transform: translateX(24px); }
        .reveal.visible, .reveal-left.visible, .reveal-right.visible {
          opacity: 1;
          transform: none;
        }
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
                        <div className="border-grow-wrapper max-w-4xl pl-6 md:pl-10">
                            <div className="inline-block bg-primary text-black text-[10px] font-bold px-2 py-0.5 mb-4 hero-fade" style={{ animationDelay: '0ms' }}>
                                <span className="blink-dot" />STATUS: ONLINE
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black header-text text-white leading-none mb-4 hero-fade" style={{ animationDelay: '150ms' }}>
                                MARCOS<br />VELASCO
                            </h1>
                            <p className="text-lg md:text-2xl font-light text-neutral-400 mb-8 max-w-2xl leading-tight hero-fade" style={{ animationDelay: '300ms' }}>
                                <span className="text-white font-bold">TECHNICAL VIRTUOSO</span> <br />
                                Engineering high-performance full-stack systems with data-driven precision.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center hero-fade" style={{ animationDelay: '450ms' }}>
                                <a className="px-6 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-primary transition-colors" href="#projects">
                                    View Projects <span className="arrow-bounce">↓</span>
                                </a>
                                <div className="flex gap-4">
                                    <a className="text-neutral-500 hover:text-white" href="https://github.com/devslife7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg className="text-xl" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
                                    <a className="text-neutral-500 hover:text-white" href="https://www.linkedin.com/in/marcosvelasco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="text-xl" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-10 right-10 hidden lg:block hero-fade-subtle" style={{ animationDelay: '600ms' }}>
                        <div className="text-[10px] space-y-1 font-mono">
                            <p>&gt; SYSTEM: 64-BIT ARCHITECTURE</p>
                            <p>&gt; KERNEL: OPTIMIZED</p>
                            <p>&gt; LOCALIZATION: ALEXANDRIA, VA</p>
                            <p>&gt; UPTIME: 100%</p>
                        </div>
                    </div>
                </header>

                <section className="py-20 bg-black" id="projects"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    style={{ touchAction: 'pan-y' }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="reveal flex justify-between items-end mb-6 border-b-2 border-neutral-900 pb-4">
                            <div>
                                <h2 className="text-3xl font-black header-text text-white">Project_Repository</h2>
                                <p className="text-xs text-neutral-500 mt-1 uppercase">Filtering: All_Assets / High_Impact</p>
                            </div>
                            <div className="text-xs font-mono text-primary hidden md:block">COUNT: {String(filteredProjects.length).padStart(2, '0')}</div>
                        </div>

                        <div className="reveal flex border-b border-neutral-800 mb-8" style={{ transitionDelay: '100ms' }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-[10px] font-bold uppercase font-mono tracking-widest transition-colors ${activeTab === tab
                                        ? 'text-primary border-b-2 border-primary -mb-px'
                                        : 'text-neutral-500 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 bg-neutral-900 brutalist-border overflow-hidden" style={{ gap: '1px' }}>
                            {filteredProjects.map((project, index) => (
                                <div key={project.title} className="reveal bg-black p-6 group hover:bg-neutral-950 transition-colors" style={{ transitionDelay: `${index * 80}ms` }}>
                                    <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                                        <img alt={project.alt} className={`w-full h-full transition-all duration-500 ${project.imgFit ?? 'object-cover'}`} src={project.src} loading={index < 2 ? 'eager' : 'lazy'} />
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
                                        {project.source && (
                                            project.source === 'private'
                                                ? <span className="text-xs font-bold uppercase text-neutral-600 flex items-center gap-1 cursor-default"><svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> Private</span>
                                                : <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href={project.source} target="_blank" rel="noopener noreferrer"><svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> Source</a>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {filteredProjects.length % 2 !== 0 && (
                                <div className="bg-black p-6 flex flex-col items-center justify-center text-center border border-dashed border-neutral-800 min-h-[400px]">
                                    <span className="material-symbols-outlined text-neutral-700 text-5xl mb-4">pending</span>
                                    <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest">More_Projects</p>
                                    <p className="text-[10px] text-neutral-700 mt-2 font-mono">{"// Currently in development"}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-neutral-950 border-y border-neutral-900" id="skills">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="reveal text-2xl font-black header-text text-white mb-12">System_Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="reveal">
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
                            <div className="reveal" style={{ transitionDelay: '150ms' }}>
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
                            <div className="reveal" style={{ transitionDelay: '300ms' }}>
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
                        <div className="reveal-left">
                            <div className="text-[10px] font-bold text-neutral-600 mb-2">{"// BIOS_INIT"}</div>
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
                        <div className="reveal-right relative brutalist-border p-8 bg-neutral-950">
                            <div className="absolute -top-3 -right-3 bg-primary text-black text-[10px] font-bold px-2 py-0.5">ENTITY_ID: 10443</div>
                            <div className="font-mono text-[11px] leading-6">
                                <p className="text-primary font-bold">const dev = {'{'}</p>
                                <p className="pl-4">name: &quot;Marcos Velasco&quot;,</p>
                                <p className="pl-4">role: &quot;Full Stack Developer&quot;,</p>
                                <p className="pl-4">focus: [&quot;Performance&quot;, &quot;Scalability&quot;, &quot;Utility&quot;],</p>
                                <p className="pl-4">location: &quot;Alexandria, VA&quot;,</p>
                                <p className="pl-4">languages: [&quot;ES6&quot;, &quot;Ruby&quot;, &quot;SQL&quot;, &quot;TS&quot;],</p>
                                <p className="pl-4">passion: &quot;Solving Complex Inefficiencies&quot;</p>
                                <p className="text-primary font-bold">{'}'};</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-neutral-950" id="contact">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="reveal-left">
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

                            <div className="reveal-right brutalist-border p-1 bg-black">
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

                <footer className="bg-black text-white border-t border-neutral-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Brand */}
                            <div className="flex flex-col gap-3">
                                <a className="text-xl font-black header-text tracking-tighter" href="#home">
                                    MV<span className="text-primary">.VIRTUAL</span>
                                </a>
                                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                                    Full Stack Software Developer specializing in building scalable web applications with Ruby on Rails and JavaScript ecosystems.
                                </p>
                                <a href="mailto:devslife7@gmail.com" className="text-neutral-400 hover:text-primary text-sm transition-colors">
                                    devslife7@gmail.com
                                </a>
                            </div>

                            {/* Navigation */}
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Navigation</div>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        { label: "Home", href: "#home" },
                                        { label: "Projects", href: "#projects" },
                                        { label: "Skills", href: "#skills" },
                                        { label: "About", href: "#about" },
                                        { label: "Contact", href: "#contact" },
                                    ].map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Connect */}
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Connect</div>
                                <div className="flex gap-4 text-2xl text-neutral-400">
                                    <a className="hover:text-primary transition-colors" href="https://github.com/devslife7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a>
                                    <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/marcosvelasco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                                    <a className="hover:text-primary transition-colors" href="https://www.facebook.com/marcos.velasco.5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                                </div>
                                <p className="text-neutral-500 text-xs mt-2 leading-relaxed">
                                    Open to new opportunities and collaborations. Feel free to reach out!
                                </p>
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
                            <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} Marcos Velasco. All rights reserved.</p>
                            <p className="text-neutral-600 text-xs">Built with Next.js &amp; Tailwind CSS</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
