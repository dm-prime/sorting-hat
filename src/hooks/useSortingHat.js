import { useState, useCallback } from 'react';
import { questions, houseData, hatMutterings } from '../data/questions';

const initialScores = {
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0
};

export function useSortingHat() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [phase, setPhase] = useState('welcome'); // welcome, quiz, thinking, reveal
  const [result, setResult] = useState(null);
  const [isHatstall, setIsHatstall] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const startQuiz = useCallback(() => {
    setPhase('quiz');
    setCurrentQuestionIndex(0);
    setScores(initialScores);
    setResult(null);
    setIsHatstall(false);
  }, []);

  const answerQuestion = useCallback((answer) => {
    // Add points from this answer
    const newScores = { ...scores };
    Object.keys(answer.points).forEach((house) => {
      newScores[house] += answer.points[house];
    });
    setScores(newScores);

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz complete - determine house
      determineHouse(newScores);
    }
  }, [currentQuestionIndex, scores]);

  const determineHouse = useCallback((finalScores) => {
    setPhase('thinking');

    // Find the winning house(s)
    const maxScore = Math.max(...Object.values(finalScores));
    const winners = Object.keys(finalScores).filter(
      house => finalScores[house] === maxScore
    );

    // Check for hatstall (tie)
    const isATie = winners.length > 1;
    setIsHatstall(isATie);

    // Pick winner (random if tie)
    const winningHouse = winners[Math.floor(Math.random() * winners.length)];
    
    // Get random reveal message
    const messages = houseData[winningHouse].revealMessages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setResult({
      house: winningHouse,
      houseData: houseData[winningHouse],
      scores: finalScores,
      message: randomMessage,
      isHatstall: isATie
    });

    // Delay before reveal for dramatic effect
    setTimeout(() => {
      setPhase('reveal');
    }, 4000);
  }, []);

  const retakeQuiz = useCallback(() => {
    setPhase('welcome');
    setCurrentQuestionIndex(0);
    setScores(initialScores);
    setResult(null);
    setIsHatstall(false);
  }, []);

  const triggerHatstall = useCallback(() => {
    // Easter egg: Konami code triggers instant hatstall
    setIsHatstall(true);
    setPhase('thinking');
    
    const houses = Object.keys(houseData);
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    const messages = houseData[randomHouse].revealMessages;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setResult({
      house: randomHouse,
      houseData: houseData[randomHouse],
      scores: initialScores,
      message: "The Konami Code has confused me! But I sense... " + randomMessage,
      isHatstall: true
    });

    setTimeout(() => {
      setPhase('reveal');
    }, 5000);
  }, []);

  return {
    phase,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    progress,
    scores,
    result,
    isHatstall,
    hatMutterings,
    startQuiz,
    answerQuestion,
    retakeQuiz,
    triggerHatstall
  };
}
