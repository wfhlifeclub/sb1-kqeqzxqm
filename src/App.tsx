import React, { useState } from 'react';
import { Snowflake, Gift } from 'lucide-react';
import { EmojiDisplay } from './components/EmojiDisplay';
import { EmojiHistory } from './components/EmojiHistory';
import { useEmojiGenerator } from './hooks/useEmojiGenerator';

function App() {
  const { getRandomEmoji, getRandomSaying, isSessionMode, toggleSessionMode, remainingCount, usedEmojis } = useEmojiGenerator();
  const [currentEmoji, setCurrentEmoji] = useState('🎄');
  const [currentSaying, setCurrentSaying] = useState('Click for Christmas magic! ✨');

  const generateRandom = () => {
    setCurrentEmoji(getRandomEmoji());
    setCurrentSaying(getRandomSaying());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-green-800 flex items-center justify-center p-4">
      <div className="relative">
        <Snowflake className="absolute -top-10 -left-10 text-white/30 w-20 h-20 animate-spin-slow" />
        <Gift className="absolute -bottom-10 -right-10 text-white/30 w-20 h-20 animate-bounce" />
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
          
          <h1 className="text-4xl font-bold text-red-700 mb-6">
            Welcome to holiday Bingo!
          </h1>
          <h1 className="text-xl font-bold text-red-700 mb-6">
            Holiday Spirit Generator
          </h1>

          <div className="flex justify-center items-center gap-2 text-sm">
            <span className="text-green-800">Generator Session:</span>
            <button
              onClick={toggleSessionMode}
              className={`px-3 py-1 rounded-full transition-colors ${
                isSessionMode 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isSessionMode ? 'On' : 'Off'}
            </button>
            {isSessionMode && (
              <span className="text-green-800">
                ({remainingCount} emojis remaining)
              </span>
            )}
          </div>
          
          <EmojiDisplay emoji={currentEmoji} saying={currentSaying} />
          
          <button
            onClick={generateRandom}
            className="bg-gradient-to-r from-red-600 to-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1 active:translate-y-0"
          >
            Spread Holiday Joy!
          </button>

                    {isSessionMode && <EmojiHistory emojis={usedEmojis} />}
        </div>
      </div>
    </div>
  );
}

export default App;