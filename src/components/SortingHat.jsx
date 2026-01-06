import { useEffect, useRef, useState } from 'react';
import { useSortingHat } from '../hooks/useSortingHat';
import './SortingHat.css';

// Floating particles component
function MagicalParticles() {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="particle" 
          style={{
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${3 + Math.random() * 4}s`,
            '--x-start': `${Math.random() * 100}%`,
            '--x-end': `${Math.random() * 100}%`,
            '--size': `${2 + Math.random() * 4}px`
          }}
        />
      ))}
    </div>
  );
}

// Welcome screen component
function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen fade-in">
      <div className="hat-icon">🎩</div>
      <h1 className="title">The Sorting Hat</h1>
      <p className="subtitle">Awaits Your Mind</p>
      <div className="welcome-text">
        <p>
          <em>"Ah, another curious soul...</em>
        </p>
        <p>
          <em>I've sorted thousands before you,<br />
          and I'll sort thousands more.</em>
        </p>
        <p>
          <em>But you... you're different, aren't you?<br />
          Let's find out where you truly belong."</em>
        </p>
      </div>
      <button className="start-button" onClick={onStart}>
        Place the Hat Upon Your Head
      </button>
    </div>
  );
}

// Question screen component
function QuestionScreen({ question, questionNumber, total, progress, onAnswer }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswer = (answer, index) => {
    setSelectedIndex(index);
    setIsTransitioning(true);
    
    setTimeout(() => {
      onAnswer(answer);
      setSelectedIndex(null);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className={`question-screen ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-text">{questionNumber} of {total}</span>
      </div>
      
      <div className="question-card fade-in" key={question.id}>
        <p className="question-text">{question.question}</p>
        
        <div className="answers-grid">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(answer, index)}
              disabled={selectedIndex !== null}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Thinking screen component
function ThinkingScreen({ mutterings, isHatstall }) {
  const [currentMuttering, setCurrentMuttering] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMuttering(prev => (prev + 1) % mutterings.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [mutterings]);

  return (
    <div className="thinking-screen">
      <div className="hat-thinking">🎩</div>
      {isHatstall && <div className="hatstall-badge">⚡ HATSTALL ⚡</div>}
      <p className="muttering fade-in" key={currentMuttering}>
        "{mutterings[currentMuttering]}"
      </p>
      <div className="thinking-dots">
        <span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  );
}

// Reveal screen component
function RevealScreen({ result, isHatstall, onRetake }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { house, houseData, message, scores } = result;

  return (
    <div 
      className={`reveal-screen ${showContent ? 'show' : ''}`}
      style={{ '--house-primary': houseData.colors[0], '--house-secondary': houseData.colors[1] }}
    >
      <div className="reveal-flash" />
      
      {isHatstall && (
        <div className="hatstall-announcement">
          ⚡ A HATSTALL! The hat deliberated for over 5 minutes! ⚡
        </div>
      )}
      
      <div className="house-emoji">{houseData.emoji}</div>
      
      <h1 className="house-name">{houseData.name.toUpperCase()}!</h1>
      
      <p className="house-motto">"{houseData.motto}"</p>
      
      <div className="traits">
        {houseData.traits.map((trait, i) => (
          <span key={i} className="trait-badge">{trait}</span>
        ))}
      </div>
      
      <p className="reveal-message">"{message}"</p>
      
      <div className="score-breakdown">
        <h3>Your Magical Profile:</h3>
        <div className="score-bars">
          {Object.entries(scores).map(([h, score]) => (
            <div key={h} className="score-bar-container">
              <span className="score-house-name">{h}</span>
              <div className="score-bar">
                <div 
                  className="score-bar-fill"
                  style={{ 
                    width: `${(score / Math.max(...Object.values(scores))) * 100}%`,
                    backgroundColor: h === house ? houseData.colors[0] : '#444'
                  }}
                />
              </div>
              <span className="score-value">{score}</span>
            </div>
          ))}
        </div>
      </div>
      
      <button className="retake-button" onClick={onRetake}>
        🔄 Try the Hat Again
      </button>
    </div>
  );
}

// Main component
export default function SortingHat() {
  const {
    phase,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    result,
    isHatstall,
    hatMutterings,
    startQuiz,
    answerQuestion,
    retakeQuiz,
    triggerHatstall
  } = useSortingHat();

  // Konami code easter egg
  const konamiCode = useRef([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      konamiCode.current.push(e.key);
      konamiCode.current = konamiCode.current.slice(-10);
      
      if (konamiCode.current.join(',') === konamiSequence.join(',')) {
        triggerHatstall();
        konamiCode.current = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerHatstall]);

  return (
    <div className="sorting-hat-container">
      <MagicalParticles />
      
      {phase === 'welcome' && (
        <WelcomeScreen onStart={startQuiz} />
      )}
      
      {phase === 'quiz' && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          total={totalQuestions}
          progress={progress}
          onAnswer={answerQuestion}
        />
      )}
      
      {phase === 'thinking' && (
        <ThinkingScreen mutterings={hatMutterings} isHatstall={isHatstall} />
      )}
      
      {phase === 'reveal' && result && (
        <RevealScreen result={result} isHatstall={isHatstall} onRetake={retakeQuiz} />
      )}
    </div>
  );
}
