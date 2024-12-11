"use client";

import { useState } from "react";
import { Flashcard } from "@/components/flashcard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flashcard as FlashcardType } from "@/types/flashcard";

export const finnishFlashcards: FlashcardType[] = [
  { id: 1, front: "Hello", back: "Hei", known: false },
  { id: 2, front: "Thank you", back: "Kiitos", known: false },
  { id: 3, front: "Yes", back: "Kyllä", known: false },
  { id: 4, front: "No", back: "Ei", known: false },
  { id: 5, front: "Please", back: "Ole hyvä", known: false },
  { id: 6, front: "Goodbye", back: "Näkemiin", known: false },
  { id: 7, front: "How are you?", back: "Mitä kuuluu?", known: false },
  { id: 8, front: "Good morning", back: "Hyvää huomenta", known: false },
  { id: 9, front: "Good night", back: "Hyvää yötä", known: false },
  { id: 10, front: "Sorry", back: "Anteeksi", known: false },
];

export function FlashcardSystem() {
  const [flashcards, setFlashcards] = useState(finnishFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKnown = (id: number) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, known: true } : card
      )
    );
    goToNextCard();
  };

  const handleUnknown = (id: number) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, known: false } : card
      )
    );
    goToNextCard();
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const goToPrevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  const resetCards = () => {
    setFlashcards(flashcards.map((card) => ({ ...card, known: false })));
    setCurrentIndex(0);
  };

  const progress =
    (flashcards.filter((card) => card.known).length / flashcards.length) * 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">Finnish Flashcards</h1>
      <Flashcard
        flashcard={flashcards[currentIndex]}
        onKnown={handleKnown}
        onUnknown={handleUnknown}
      />
      <div className="flex space-x-2">
        <Button onClick={goToPrevCard}>Previous</Button>
        <Button onClick={goToNextCard}>Next</Button>
      </div>
      <div className="w-80">
        <Progress value={progress} className="w-full" />
        <p className="text-center mt-2">{Math.round(progress)}% Complete</p>
      </div>
      <Button onClick={resetCards}>Reset Progress</Button>
    </div>
  );
}
