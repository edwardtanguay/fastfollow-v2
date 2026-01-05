import topics from "../../../parseddata/topics.json";
import SingleTopic from "@/components/SingleTopic";

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
            <SingleTopic key={topic.suuid} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
