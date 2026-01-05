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
				bg-gray-800/60 border-gray-100/20
				md:bg-gray-800/40 md:border-gray-100/10 
				hover:border-purple-500/40 hover:bg-gray-700/60 
				transition-all duration-300 backdrop-blur-md overflow-hidden"
			style={{ animationDelay: `${index * 50}ms` }}
		>
			<div className="absolute inset-0 
				bg-linear-to-r from-purple-500/5 via-purple-500/10 to-transparent opacity-100
				md:opacity-0 md:group-hover:opacity-100 
				transition-opacity duration-300" />

			<div className="relative z-10 flex items-center gap-3">
				<h3 className="text-lg font-semibold text-gray-400">
					{topic.title}
				</h3>
				<ExternalLink className="w-4 h-4 text-gray-600" />
			</div>

			<div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 transition-colors duration-300">
				<Star className="w-3.5 h-3.5 text-purple-400/60 fill-purple-400/40" />
				<span className="text-sm font-bold text-gray-400">
					{typeof topic.rating === 'number' && topic.rating > 10
						? 'N/A'
						: topic.rating.toFixed(2)}
				</span>
			</div>
		</a>
	);
}
