"use client";

import { ExternalLink, Star, Calendar } from "lucide-react";
import { Topic } from "@/types";

interface SingleTopicProps {
	topic: Topic;
	index: number;
}

export default function SingleTopic({ topic, index }: SingleTopicProps) {
	return (
		<div
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
	);
}
