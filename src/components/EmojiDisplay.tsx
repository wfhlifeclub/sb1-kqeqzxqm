import React from 'react';

interface EmojiDisplayProps {
  emoji: string;
  saying: string;
}

export function EmojiDisplay({ emoji, saying }: EmojiDisplayProps) {
  return (
    <>
      <div className="text-9xl mb-6 transition-all duration-300 transform hover:scale-110">
        {emoji}
      </div>
      <p className="text-xl text-green-800 font-medium min-h-[3rem]">
        {saying}
      </p>
    </>
  );
}