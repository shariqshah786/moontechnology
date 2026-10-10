"use client";

import { useEffect, useState } from "react";

/**
 * useCountUp hook
 * Animates a numeric counter from 0 up to the target value using requestAnimationFrame.
 *
 * @param {Object} options
 * @param {number} options.target - Final numeric value to reach
 * @param {boolean} [options.shouldStart=true] - Trigger flag
 * @param {number} [options.duration=1600] - Animation run time in milliseconds
 * @returns {number}
 */
export function useCountUp({ target, shouldStart = true, duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic: fast start, soft landing
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, shouldStart, duration]);

  return count;
}
