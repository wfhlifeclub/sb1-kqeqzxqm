import { useState, useCallback } from 'react';
import { christmasEmojis, jollySayings } from '../utils/christmasData';

export function useEmojiGenerator() {
  const [remainingEmojis, setRemainingEmojis] = useState<string[]>([]);
  const [usedEmojis, setUsedEmojis] = useState<string[]>([]);
  const [isSessionMode, setIsSessionMode] = useState(false);

  const getRandomEmoji = useCallback(() => {
    if (isSessionMode) {
      if (remainingEmojis.length === 0) {
        // Reset the session with a new shuffled array
        const shuffled = [...christmasEmojis].sort(() => Math.random() - 0.5);
        setRemainingEmojis(shuffled.slice(1));
        setUsedEmojis([shuffled[0]]);
        return shuffled[0];
      }
      const nextEmojis = [...remainingEmojis];
      const emoji = nextEmojis.pop()!;
      setRemainingEmojis(nextEmojis);
      setUsedEmojis(prev => [...prev, emoji]);
      return emoji;
    }
    // Random mode
    return christmasEmojis[Math.floor(Math.random() * christmasEmojis.length)];
  }, [isSessionMode, remainingEmojis]);

  const getRandomSaying = useCallback(() => {
    return jollySayings[Math.floor(Math.random() * jollySayings.length)];
  }, []);

  const toggleSessionMode = useCallback(() => {
    setIsSessionMode(prev => {
      if (!prev) {
        // Starting session mode - initialize with shuffled array
        const shuffled = [...christmasEmojis].sort(() => Math.random() - 0.5);
        setRemainingEmojis(shuffled);
        setUsedEmojis([]);
      } else {
        // Turning off session mode - clear history
        setUsedEmojis([]);
      }
      return !prev;
    });
  }, []);

  return {
    getRandomEmoji,
    getRandomSaying,
    isSessionMode,
    toggleSessionMode,
    remainingCount: remainingEmojis.length,
    usedEmojis
  };
}