import topics from "../../../parseddata/topics.json";
import SingleTopic from "@/components/SingleTopic";
import { Topic } from "@/types";

export default function TopicsPage() {
  return (
    <div className="min-h-dvh text-gray-100 p-8 md:p-12">
      <div className="max-w-6xl mx-auto mt-16 md:mt-8">
        <header className="mb-16 relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <h1 className="text-5xl md:text-7xl font-bold py-4 -my-4 mb-2 tracking-tight bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            AI Ecosystem
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl border-l-2 border-blue-500/30 pl-6">
            A curated list of tools and resources shaping the future of artificial intelligence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {(topics as Topic[])
            .sort((a, b) => b.rating - a.rating)
            .map((topic, index) => (
              <SingleTopic key={topic.suuid} topic={topic} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
