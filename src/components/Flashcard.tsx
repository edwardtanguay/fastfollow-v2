"use client";

import { useState } from "react";

interface FlashcardProps {
	front: string;
	back: string;
	category: string;
}

export default function Flashcard({ front, back, category }: FlashcardProps) {
	const [showBack, setShowBack] = useState(false);

	return (
		<div
			className="group perspective-1000 w-full h-48 cursor-pointer"
			onClick={() => setShowBack(!showBack)}
		>
			<div
				className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${showBack ? "rotate-y-180" : ""
					}`}
			>
				{/* Front Side */}
				<div
					className={`absolute inset-0 backface-hidden bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col justify-between items-center text-center transition-opacity duration-300 ${showBack ? 'opacity-0' : 'opacity-100'}`}
					style={{ transform: "translateZ(1px)" }}
				>
					<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
						{category}
					</span>
					<h3 className="text-xl font-medium text-gray-100">
						{front}
					</h3>
					<div className="text-xs text-gray-500 italic">Click to reveal</div>
				</div>

				{/* Back Side */}
				<div
					className={`absolute inset-0 backface-hidden bg-indigo-900/60 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 ${showBack ? 'opacity-100' : 'opacity-0'}`}
					style={{ transform: "rotateY(180deg) translateZ(1px)" }}
				>
					<h3 className="text-2xl font-semibold text-indigo-200">
						{back}
					</h3>
				</div>
			</div>
		</div>
	);
}
