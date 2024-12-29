import React from 'react';

interface EmojiHistoryProps {
  emojis: string[];
}

export function EmojiHistory({ emojis }: EmojiHistoryProps) {
  if (emojis.length === 0) return null;

  return (
    <div className="flex justify-center gap-2 flex-wrap mb-6">
      {emojis.map((emoji, index) => (
        <span
          key={`${emoji}-${index}`}
          className="text-2xl transition-all duration-300 transform hover:scale-110"
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}