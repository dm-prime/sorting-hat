// Quirky Sorting Hat Quiz Questions
// Each answer gives weighted points to houses (0-3 scale)

export const questions = [
  {
    id: 1,
    question: "It's 3am and you're wide awake. Why?",
    answers: [
      {
        text: "Planning tomorrow's adventure (or revenge)",
        points: { gryffindor: 2, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Down a Wikipedia rabbit hole about medieval cheese",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 1 }
      },
      {
        text: "Snacks. Obviously snacks.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      },
      {
        text: "Overthinking that thing I said in 2019",
        points: { gryffindor: 0, slytherin: 1, ravenclaw: 2, hufflepuff: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "You find a mysterious locked door. Your move?",
    answers: [
      {
        text: "Kick it down. Doors are suggestions.",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Find the key. There's always a key.",
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        text: "Study the lock mechanism for an hour",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Ask around. Someone knows something.",
        points: { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "Pick a sandwich filling:",
    answers: [
      {
        text: "Something spicy that might be too hot",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "The most expensive option available",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "An unusual combination I invented",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Classic comfort - can't go wrong",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Your friend is being INCREDIBLY annoying. You:",
    answers: [
      {
        text: "Tell them directly. Honesty is a policy.",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Start being subtly more annoying back",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 1, hufflepuff: 0 }
      },
      {
        text: "Psychoanalyze why they're being annoying",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Endure it. They probably need support.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "You witness someone cheating at a board game. React:",
    answers: [
      {
        text: "FLIP THE TABLE. Justice demands it.",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Note it. Use it against them later.",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Calculate if they even needed to cheat",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Let it go. It's just a game, right?",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 6,
    question: "What's your relationship with deadlines?",
    answers: [
      {
        text: "I work best under pressure (read: panic)",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "I delegate and manage others' panic",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "I start early, then restart 47 times",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Steady progress. Reliable. Like a badger.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "A stranger drops their wallet. Inside: $500 cash. You:",
    answers: [
      {
        text: "Chase them down heroically",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 1 }
      },
      {
        text: "...assess the situation carefully first",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Wonder about the ethics of finder's fees",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Return it immediately, no hesitation",
        points: { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 8,
    question: "Pick a pet you'd secretly want:",
    answers: [
      {
        text: "A phoenix. Go big or go home.",
        points: { gryffindor: 3, slytherin: 1, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "A snake that understands sarcasm",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "An owl with a library card",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "A chonky niffler (for cuddles, not gold)",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 9,
    question: "Your Boggart (worst fear) would probably be:",
    answers: [
      {
        text: "Being powerless to help someone",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 1 }
      },
      {
        text: "Public humiliation or failure",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 1, hufflepuff: 0 }
      },
      {
        text: "Being wrong about something important",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Being alone or abandoned",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "You're assembling IKEA furniture. Your strategy?",
    answers: [
      {
        text: "Instructions are for cowards. CHARGE!",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Pay someone else to do it",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Read instructions, watch 3 YouTube videos, make a plan",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Call friends! Make it a party!",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 11,
    question: "The Sorting Hat whispers: 'I could put you anywhere.' You think:",
    answers: [
      {
        text: "Put me where the action is!",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Put me where I'll succeed.",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Put me where I'll learn the most.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Put me with good people.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  },
  {
    id: 12,
    question: "You're at a party where you know nobody. You:",
    answers: [
      {
        text: "Become the life of the party anyway",
        points: { gryffindor: 3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Find the most important person to network with",
        points: { gryffindor: 0, slytherin: 3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        text: "Find the cat or bookshelf",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 3, hufflepuff: 0 }
      },
      {
        text: "Help in the kitchen. Instant friends.",
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 3 }
      }
    ]
  }
];

export const houseData = {
  gryffindor: {
    name: "Gryffindor",
    colors: ["#740001", "#D3A625"],
    motto: "Where dwell the brave at heart",
    emoji: "🦁",
    traits: ["Bravery", "Nerve", "Chivalry", "Daring"],
    revealMessages: [
      "You'd fight a dragon for a friend... or just for the story.",
      "Your heart is a lion - loud, proud, and occasionally reckless.",
      "You see 'Do Not Enter' signs as suggestions.",
      "Courage isn't the absence of fear - it's charging in anyway!"
    ]
  },
  slytherin: {
    name: "Slytherin",
    colors: ["#1A472A", "#AAAAAA"],
    motto: "Do what is necessary",
    emoji: "🐍",
    traits: ["Ambition", "Cunning", "Resourcefulness", "Determination"],
    revealMessages: [
      "You play chess while others play checkers.",
      "Ambition isn't a dirty word - it's a lifestyle.",
      "You always have a backup plan. And a backup backup plan.",
      "Success isn't given. You'll simply... take it."
    ]
  },
  ravenclaw: {
    name: "Ravenclaw",
    colors: ["#0E1A40", "#946B2D"],
    motto: "Wit beyond measure is man's greatest treasure",
    emoji: "🦅",
    traits: ["Intelligence", "Creativity", "Wisdom", "Wit"],
    revealMessages: [
      "Your brain has 47 browser tabs open. Always.",
      "You've corrected a teacher at least once. Maybe more.",
      "Sleep is for people who aren't in the middle of a thought.",
      "You're not weird, you're *limited edition intellectual*."
    ]
  },
  hufflepuff: {
    name: "Hufflepuff",
    colors: ["#FFD800", "#000000"],
    motto: "Those patient Hufflepuffs are true and unafraid of toil",
    emoji: "🦡",
    traits: ["Loyalty", "Patience", "Fairness", "Hard work"],
    revealMessages: [
      "You're the friend everyone deserves but few appreciate enough.",
      "Snacks are a personality trait. A GOOD one.",
      "You're proof that kindness is its own kind of power.",
      "The world needs more people who just... show up. That's you."
    ]
  }
};

export const hatMutterings = [
  "Hmm, difficult... very difficult...",
  "Plenty of courage, I see...",
  "Not a bad mind, either...",
  "There's talent, oh yes...",
  "A thirst to prove yourself...",
  "But where to put you?",
  "Interesting... very interesting...",
  "I wonder... could it be?",
  "The choice is becoming clearer...",
  "Yes, I think I know just the place..."
];
