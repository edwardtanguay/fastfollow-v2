import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";
import Flashcard from "@/components/Flashcard";

interface FlashcardData {
	suuid: string;
	category: string;
	front: string;
	back: string;
}


export default function Home() {
	const filePath = path.join(process.cwd(), "parseddata", "flashcards.json");
	const fileContent = fs.readFileSync(filePath, "utf8");
	const flashcards: FlashcardData[] = JSON.parse(fileContent);

	return (
		<div className="p-8 md:p-12 max-w-4xl">
			<div className="space-y-12">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
						Flashcards
					</h1>
					<p className="text-lg text-gray-400 leading-relaxed mb-8">
						This is a demonstration of the text-parsing feature: change the /data/flashcards.txt file and run the command "npm run pd" to update the flashcards.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{flashcards.map((card) => (
							<Flashcard
								key={card.suuid}
								front={card.front}
								back={card.back}
								category={card.category}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
