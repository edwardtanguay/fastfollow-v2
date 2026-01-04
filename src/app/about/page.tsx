import { MessageSquare } from "lucide-react";

export default function About() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Fast Follow Forum
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Fast Follow Forum is a Discord server where we discuss AI tools and trends.
          </p>
          <div className="flex">
            <a
              href="https://discord.gg/fastfollowforum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 bg-indigo-500/5 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/10 hover:border-indigo-500/40 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
            >
              <MessageSquare size={18} />
              Join our Discord server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}