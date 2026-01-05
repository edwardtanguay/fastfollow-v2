"use client";

import { ExternalLink, Star } from "lucide-react";
import { Topic } from "@/types";

interface SingleTopicProps {
	topic: Topic;
	index: number;
}

export default function SingleTopic({ topic, index }: SingleTopicProps) {
	const url = topic.url.split(' ')[0];

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex items-center justify-between p-4 rounded-xl 
				bg-gray-800 border-gray-600 
				md:bg-gray-900/40 md:border-gray-800/50 
				hover:border-blue-500/50 hover:bg-gray-800/60 
				transition-all duration-300 backdrop-blur-md overflow-hidden"
			style={{ animationDelay: `${index * 50}ms` }}
		>
			{/* Subtle hover gradient */}
			<div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<div className="relative z-10 flex items-center gap-3">
				<h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
					{topic.title}
				</h3>
				<ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
			</div>

			<div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
				<Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
				<span className="text-sm font-bold text-blue-300">
					{typeof topic.rating === 'number' && topic.rating > 10
						? 'N/A'
						: topic.rating.toFixed(2)}
				</span>
			</div>
		</a>
	);
}
