import { MBTIQuestion } from '../types/mbti';

export const questions: MBTIQuestion[] = [
  {
    id: 1,
    text: "When working, do you prefer:",
    options: ["A quiet, focused environment", "An active, collaborative space"],
    dimension: "EI"
  },
  {
    id: 2,
    text: "How do you typically make decisions?",
    options: ["Based on logic and facts", "Based on feelings and values"],
    dimension: "TF"
  },
  {
    id: 3,
    text: "When planning your day, do you prefer:",
    options: ["Having a structured schedule", "Going with the flow"],
    dimension: "JP"
  },
  {
    id: 4,
    text: "When solving problems, do you focus more on:",
    options: ["Concrete details and facts", "Patterns and possibilities"],
    dimension: "SN"
  },
  {
    id: 5,
    text: "In social situations, you tend to:",
    options: ["Listen and observe", "Speak and participate"],
    dimension: "EI"
  }
  // Add more questions following the same pattern
];