'use client';

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-8 pt-24 pb-32 md:p-8 md:pb-16 overflow-hidden bg-gray-950">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] left-[10%] w-[70%] h-[60%] bg-indigo-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[80px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-linear-to-br from-indigo-400 via-purple-300 to-pink-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            About Us
          </h1>

          <div className="space-y-6 text-base md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              We are a group of people who use and discuss AI tools and trends. Whether you're a developer, a creator, or just curious, we share what we're learning, building, and breaking.
            </p>
            <p className="text-purple-400/90 italic font-medium">
              Online and Berlin based.
            </p>
            <p>
              We occasionally meet up at cafes or bars in Berlin to hang out, co-work, and talk tech in person.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a
            href="https://discord.gg/cHH9VjNF"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-5 font-bold text-white transition-all duration-300 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] uppercase tracking-widest"
          >
            Join Discord Server
          </a>

        </div>
      </div>
    </div>
  );
}
