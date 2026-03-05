import './prototype.css'

export default function PrototypePage() {
  return (
    <div className="prototype-wrapper antialiased selection:bg-orange-500 selection:text-black">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black border-b-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0 flex items-center">
              <a className="text-xl font-black header-text tracking-tighter" href="#">
                MV<span className="text-[#f97316]">.VIRTUAL</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-6">
              <a className="text-xs font-bold hover:text-[#f97316] transition-colors uppercase" href="#projects">/projects</a>
              <a className="text-xs font-bold hover:text-[#f97316] transition-colors uppercase" href="#skills">/stack</a>
              <a className="text-xs font-bold hover:text-[#f97316] transition-colors uppercase" href="#about">/logs</a>
              <a className="text-xs font-bold hover:text-[#f97316] transition-colors uppercase" href="#contact">/ping</a>
            </div>
            <div className="md:hidden">
              <span className="material-symbols-outlined text-[#f97316]">terminal</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-14" id="home">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl border-l-4 border-[#f97316] pl-6 md:pl-10">
            <div className="inline-block bg-[#f97316] text-black text-[10px] font-bold px-2 py-0.5 mb-4">STATUS: ONLINE</div>
            <h1 className="text-5xl md:text-8xl font-black header-text text-white leading-none mb-4">
              MARCOS<br />VELASCO
            </h1>
            <p className="text-lg md:text-2xl font-light text-neutral-400 mb-8 max-w-2xl leading-tight">
              <span className="text-white font-bold">TECHNICAL VIRTUOSO</span> <br />
              Engineering high-performance full-stack systems with data-driven precision.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a className="px-6 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-[#f97316] transition-colors" href="#projects">
                View manifest
              </a>
              <div className="flex gap-4">
                <a className="text-neutral-500 hover:text-white" href="#"><i className="fab fa-github text-xl"></i></a>
                <a className="text-neutral-500 hover:text-white" href="#"><i className="fab fa-linkedin text-xl"></i></a>
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

      {/* Projects */}
      <section className="py-20 bg-black" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b-2 border-neutral-900 pb-4">
            <div>
              <h2 className="text-3xl font-black header-text text-white">Project_Repository</h2>
              <p className="text-xs text-neutral-500 mt-1 uppercase">Filtering: All_Assets / High_Impact</p>
            </div>
            <div className="text-xs font-mono text-[#f97316] hidden md:block">COUNT: 04</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 brutalist-border overflow-hidden">

            {/* Special Cocktails */}
            <div className="bg-black p-6 group hover:bg-neutral-950 transition-colors border-b md:border-b-0 md:border-r border-neutral-900">
              <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Cocktail App"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpH99MTNz4GHgAGz73R4wut7ASBPn7kWfbAq9ejEqnXqJCfATIMhA7j7jASrkSB3mV1YMY325NzH1Y2s5lOGa5KAfCFahjIqGrxZvKfmcT0JqI-gLU74RQxgyy7bE1e7xkhh_-Vk9GXKqopOC3Ghjb3FvFtHO0HNmQtvlyDF1A13HTJ2rZzu8Qha4O-LEyN1iWu436ss1djKFzEt4nlZSnxnuejVMzB3iVzLmSEcIvr7ovkuLr-sHDYGd9qWtpyjm_wnw1CfwvJLAV"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white header-text">Special Cocktails</h3>
                <span className="text-[10px] font-bold border border-green-500 text-green-500 px-2 py-0.5">COMPLETED</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-6 uppercase text-neutral-500">
                <div><span className="text-white block">TYPE:</span> B2B Utility</div>
                <div><span className="text-white block">STACK:</span> React / G-Sheets</div>
                <div><span className="text-white block">METRIC:</span> Real-time Calc</div>
                <div><span className="text-white block">CORE:</span> PDF Automation</div>
              </div>
              <p className="text-sm text-neutral-400 mb-6 line-clamp-2">Batching tool for bartenders. Calculates large-scale quantities and generates reports from custom recipes.</p>
              <div className="flex gap-4">
                <a className="text-xs font-bold uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">Demo</a>
                <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href="#"><i className="fab fa-github"></i> Source</a>
              </div>
            </div>

            {/* DSB Construction */}
            <div className="bg-black p-6 group hover:bg-neutral-950 transition-colors">
              <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Construction Website"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1eavStpU_Ve4_0pIxKwiySCisKJRzY17gbePdUCBf9jKiPs2mnlUwdl4xSMMvHT_gXdnE7KN0n-LfrvPk1WStajGJzpG4igAihpwHGhanXL4O7GL6UeKmw_xDaPkZqkv7yj3Bh1YahZhjmwpRsk4W6rJIbfEGCLY7bYBShm_luE_8nnMw9R7rrk3m92S_GAeZT2eCOHrHfimXkByyRmAE0n3XD6PiA8IFhTQDhZ_KxUomSsEaheTEqIJqv1pm9HYeQAgiHtGesg_O"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white header-text">DSB Construction</h3>
                <span className="text-[10px] font-bold border border-[#f97316] text-[#f97316] px-2 py-0.5">MAINTENANCE</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-6 uppercase text-neutral-500">
                <div><span className="text-white block">TYPE:</span> Enterprise Showcase</div>
                <div><span className="text-white block">STACK:</span> Next.js / Postgres</div>
                <div><span className="text-white block">METRIC:</span> SSR Validation</div>
                <div><span className="text-white block">CORE:</span> Review CRUD</div>
              </div>
              <p className="text-sm text-neutral-400 mb-6 line-clamp-2">Business portal with admin media handling and server-side validation for customer interactions.</p>
              <div className="flex gap-4">
                <a className="text-xs font-bold uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">Demo</a>
                <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href="#"><i className="fab fa-github"></i> Source</a>
              </div>
            </div>

            {/* CDC DayCare */}
            <div className="bg-black p-6 group hover:bg-neutral-950 transition-colors border-t border-neutral-900 md:border-r">
              <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Daycare Website"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb8ygZdipdofVyExm7maGncCldBnj8Pn0H46HvUIWktr7zX9F4SsyRWIgztBtroqJRIXuuBEfUXkhAsKZvnBC9_DHXEIUEgrVwwy9znLxje3n-hbTwCzrwQrBLWcP3tTEua4mG_Ff-sYRYEBNC7bI6uRSa50nMBN3Yee5LiTLQ_gsjRncobs2pUsONNnO8qJF3WJWHyQH0jD5O2eh3h1OLYNSPYFFatv1-JLEcq5M7trryyHDY7LxmODorcWovi2NsakMUohbCZTMH"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white header-text">CDC DayCare</h3>
                <span className="text-[10px] font-bold border border-green-500 text-green-500 px-2 py-0.5">COMPLETED</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-6 uppercase text-neutral-500">
                <div><span className="text-white block">TYPE:</span> CMS Portal</div>
                <div><span className="text-white block">STACK:</span> Next.js / Tailwind</div>
                <div><span className="text-white block">METRIC:</span> Multi-Language</div>
                <div><span className="text-white block">CORE:</span> Lead Capture</div>
              </div>
              <p className="text-sm text-neutral-400 mb-6 line-clamp-2">Educational facility landing with i18n support and optimized mobile communication flows.</p>
              <div className="flex gap-4">
                <a className="text-xs font-bold uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">Demo</a>
                <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href="#"><i className="fab fa-github"></i> Source</a>
              </div>
            </div>

            {/* FutFriends */}
            <div className="bg-black p-6 group hover:bg-neutral-950 transition-colors border-t border-neutral-900">
              <div className="aspect-video mb-6 overflow-hidden border border-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Soccer App"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvpAreMXIUZMi0tfiYOdpiyiukQG-t08aXjmOubFILH229jcQG5uaWkQBfHIX7x7_D6FlasL6kcFF_M6mRh0UiPkoA2UdAQIzEFVsnlkLFhGUgkxttF6GZLmyFSmYcaZsQlvm4H_FfaflnL_kIA6xkbtL2DvQFJWjzGNyNBvBFM-PjLVsySC2tfZpMHag_7To2qQ7JKK4IU6KPcHd4bMttEsbCrxc4D-ZHqfDABPT_r7e32tzm3CMUjtAYW4Gj_vikGUbsRVZBQu_7"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white header-text">FutFriends</h3>
                <span className="text-[10px] font-bold border border-yellow-500 text-yellow-500 px-2 py-0.5">LEGACY</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-mono mb-6 uppercase text-neutral-500">
                <div><span className="text-white block">TYPE:</span> Social Platform</div>
                <div><span className="text-white block">STACK:</span> Rails / React</div>
                <div><span className="text-white block">METRIC:</span> JWT Secure</div>
                <div><span className="text-white block">CORE:</span> REST API</div>
              </div>
              <p className="text-sm text-neutral-400 mb-6 line-clamp-2">Match-finding platform for football enthusiasts. Custom database schema with complex user relationships.</p>
              <div className="flex gap-4">
                <a className="text-xs font-bold uppercase text-neutral-500 hover:text-white flex items-center gap-1" href="#"><i className="fab fa-github"></i> Source</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-neutral-950 border-y border-neutral-900" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black header-text text-white mb-12">System_Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xs font-bold text-[#f97316] uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Frontend_Dev</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">HTML5_CSS3</span>
                <span className="skill-tag">Javascript_ES6</span>
                <span className="skill-tag">React_NextJS</span>
                <span className="skill-tag">Tailwind_Architecture</span>
                <span className="skill-tag">Typescript_Static</span>
                <span className="skill-tag">Bootstrap_Framework</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#f97316] uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Backend_Eng</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Ruby_on_Rails</span>
                <span className="skill-tag">Node_Runtime</span>
                <span className="skill-tag">PostgreSQL_DB</span>
                <span className="skill-tag">RESTful_Architecture</span>
                <span className="skill-tag">JWT_Security</span>
                <span className="skill-tag">Express_Framework</span>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#f97316] uppercase mb-6 tracking-widest border-b border-neutral-800 pb-2">Technical_Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Git_VersionControl</span>
                <span className="skill-tag">AWS_Cloud_Infrastructure</span>
                <span className="skill-tag">Figma_Prototyping</span>
                <span className="skill-tag">Docker_Containers</span>
                <span className="skill-tag">Agile_Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
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
              <a className="inline-block brutalist-border px-8 py-3 font-bold uppercase text-xs hover:bg-white hover:text-black transition-all" href="#">
                Download_Manifest (CV)
              </a>
            </div>
          </div>
          <div className="relative brutalist-border p-8 bg-neutral-950">
            <div className="absolute -top-3 -right-3 bg-[#f97316] text-black text-[10px] font-bold px-2 py-0.5">ENTITY_ID: 10443</div>
            <div className="font-mono text-[11px] leading-6">
              <p className="text-[#f97316] font-bold">const dev = {'{'}</p>
              <p className="pl-4">name: &quot;Marcos Velasco&quot;,</p>
              <p className="pl-4">role: &quot;Full Stack Developer&quot;,</p>
              <p className="pl-4">focus: [&quot;Performance&quot;, &quot;Scalability&quot;, &quot;Utility&quot;],</p>
              <p className="pl-4">location: &quot;Alexandria, VA&quot;,</p>
              <p className="pl-4">languages: [&quot;ES6&quot;, &quot;Ruby&quot;, &quot;SQL&quot;, &quot;TS&quot;],</p>
              <p className="pl-4">passion: &quot;Solving Complex Inefficiencies&quot;</p>
              <p className="text-[#f97316] font-bold">{'};'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-neutral-950" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black header-text text-white mb-8">Establish_Link</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#f97316]">location_on</span>
                  <div className="text-xs uppercase font-mono">
                    <span className="block text-neutral-500">Location</span>
                    <span className="text-white">Alexandria, VA, US</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#f97316]">alternate_email</span>
                  <div className="text-xs uppercase font-mono">
                    <span className="block text-neutral-500">Email</span>
                    <span className="text-white underline decoration-[#f97316]">devslife@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#f97316]">monitoring</span>
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
                <form action="#" className="space-y-4" method="POST">
                  <div>
                    <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">User_Identifier</label>
                    <input className="w-full text-sm py-2 px-3 text-white focus:outline-none" placeholder="FULL NAME" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">Communication_Node</label>
                    <input className="w-full text-sm py-2 px-3 text-white focus:outline-none" placeholder="EMAIL_ADDRESS" type="email" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-neutral-500 uppercase mb-1 font-mono">Payload_Data</label>
                    <textarea className="w-full text-sm py-2 px-3 text-white focus:outline-none resize-none" placeholder="MESSAGE_CONTENTS" rows={4}></textarea>
                  </div>
                  <div>
                    <button className="w-full py-3 bg-[#f97316] text-black font-black uppercase text-xs hover:bg-white transition-all flex items-center justify-center gap-2" type="submit">
                      <span className="material-symbols-outlined text-sm">send</span> EXECUTE_SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white font-black header-text text-lg">MV.VIRTUAL</div>
          <div className="text-neutral-500 text-[10px] font-mono">
            © 2024 SERIAL_NO_889241. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 text-neutral-400">
            <a className="hover:text-[#f97316]" href="#"><i className="fab fa-github"></i></a>
            <a className="hover:text-[#f97316]" href="#"><i className="fab fa-linkedin"></i></a>
            <a className="hover:text-[#f97316]" href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>

    </div>
  )
}
