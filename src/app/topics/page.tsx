import topics from "../../../parseddata/topics.json";
import { ExternalLink, Star, Calendar } from "lucide-react";

interface Topic {
  suuid: string;
  title: string;
  url: string;
  rating: number;
  timestamp: string;
}

export default function TopicsPage() {
  return (
    <div className="min-h-screen text-gray-100 p-8 md:p-12">
      <div className="max-w-5xl mx-auto mt-16 md:mt-8">
        <header className="mb-16 relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            AI Ecosystem
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl border-l-2 border-blue-500/30 pl-6">
            A curated list of state-of-the-art tools and resources shaping the future of artificial intelligence.
          </p>
        </header>

        <div className="grid gap-6">
          {(topics as Topic[]).map((topic, index) => (
            <div
              key={topic.suuid}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-gray-900/40 border border-gray-800/50 hover:border-blue-500/50 hover:bg-gray-800/40 transition-all duration-500 backdrop-blur-md overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span className="text-xs font-bold text-blue-300">
                      {typeof topic.rating === 'number' && topic.rating > 10 ? 'N/A' : topic.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="truncate max-w-xs text-gray-600 font-mono">
                    {topic.url.split(' ')[0]}
                  </span>
                  {topic.timestamp && (
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(topic.timestamp).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative z-10 mt-4 sm:mt-0">
                <a
                  href={topic.url.split(' ')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-100 text-gray-950 font-bold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-500/10"
                >
                  Explore
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

