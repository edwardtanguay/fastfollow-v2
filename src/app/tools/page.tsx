import flashcards from "../../../parseddata/flashcards.json";
import Flashcard from "@/components/Flashcard";

interface FlashcardData {
  suuid: string;
  category: string;
  front: string;
  back: string;
}

export default function InfoPage() {
  return (
    <div className="p-8 md:p-12 max-w-4xl">
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            AI Tools
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Sometimes success is just finding the right tool at the right time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(flashcards as FlashcardData[]).map((card) => (
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

