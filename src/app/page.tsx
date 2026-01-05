'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import topicsData from "../../parseddata/topics.json";
import { Topic } from "@/types";

const allTopics = topicsData as Topic[];

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export default function Home() {
	const [shuffledTopics, setShuffledTopics] = useState<Topic[]>([]);
	const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

	useEffect(() => {
		const shuffled = shuffleArray(allTopics);
		setShuffledTopics(shuffled);

		const interval = setInterval(() => {
			setCurrentTopicIndex((prev) => (prev + 1) % shuffled.length);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<main className="relative min-h-dvh flex items-start md:items-center justify-center px-8 pt-20 md:pt-8 pb-32 md:p-8 md:pb-16 overflow-hidden bg-gray-950">
			{/* Dynamic Background Particles */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-[10%] left-[10%] w-[70%] h-[60%] bg-indigo-500/15 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
				<div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[80px] animate-pulse delay-1000" />
			</div>

			<div className="relative z-10 max-w-3xl w-full text-center space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-5 duration-1000">
				{/* Logo Section */}
				<div className="flex justify-center pt-2">
					<div className="relative w-48 h-48 md:w-56 md:h-56 animate-[float_4s_ease-in-out_infinite]">
						<Image
							src="/images/fff-logo.png"
							alt="Fast Follow Forum Logo"
							fill
							className="object-contain drop-shadow-[0_10px_40px_rgba(99,102,241,0.4)] transition-transform duration-300 hover:scale-105"
							priority
						/>
					</div>
				</div>
				{/* Content Section */}
				<div className="space-y-6">
					<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
						We are developers and business-oriented people using AI. Share what you are using and creating, what works, and what doesn't.
					</p>

					<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400">
						Discuss AI With Us
					</h1>

					<div className="h-12 flex items-center justify-center overflow-hidden">
						{shuffledTopics.length > 0 && (
							<Link
								href="/topics"
								key={currentTopicIndex}
								className="animate-swoop group flex items-center gap-3 px-6 py-2 rounded-full border border-transparent hover:border-indigo-500/10 hover:bg-indigo-500/5 transition-all duration-300"
							>
								<span className="text-2xl md:text-4xl font-bold text-indigo-300/80 tracking-wide group-hover:text-indigo-400">
									{shuffledTopics[currentTopicIndex]?.title}
								</span>
								<ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-indigo-400/40 group-hover:text-indigo-400 transition-colors" />
							</Link>
						)}
					</div>
				</div>

				{/* CTA Section */}
				<div className="space-y-6">
					<div className="pt-2">
						<a
							href="https://discord.gg/cHH9VjNF"
							className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
						>
							<span className="relative uppercase tracking-widest">Join Discord Server</span>
						</a>
					</div>

					<p className="text-sm text-slate-500 font-medium">
						See more projects by <a href="https://edwards-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">Edward Tanguay</a>
					</p>
				</div>
			</div>

			<style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes swoop {
          0% { 
            transform: translateX(-100%) scale(0.8); 
            opacity: 0; 
            filter: blur(10px);
          }
          15% { 
            transform: translateX(0) scale(1.1); 
            opacity: 1; 
            filter: blur(0);
          }
          25%, 75% { 
            transform: translateX(0) scale(1); 
            opacity: 1; 
            filter: blur(0);
          }
          85% { 
            transform: translateX(0) scale(1.1); 
            opacity: 1; 
            filter: blur(0);
          }
          100% { 
            transform: translateX(100%) scale(0.8); 
            opacity: 0; 
            filter: blur(10px);
          }
        }
        .animate-swoop {
          animation: swoop 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>
		</main>
	);
}
