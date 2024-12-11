import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flashcard as FlashcardType } from "@/types/flashcard";

interface FlashcardProps {
  flashcard: FlashcardType;
  onKnown: (id: number) => void;
  onUnknown: (id: number) => void;
}

export function Flashcard({ flashcard, onKnown, onUnknown }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card
      className="w-80 h-48 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <CardContent
        className={`w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        } flex items-center justify-center`}
      >
        <div
          className={`absolute backface-hidden ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {isFlipped ? flashcard.back : flashcard.front}
        </div>
      </CardContent>
      <div className="absolute bottom-2 left-2 right-2 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onUnknown(flashcard.id);
          }}
        >
          Don't Know
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onKnown(flashcard.id);
          }}
        >
          Know
        </Button>
      </div>
    </Card>
  );
}
