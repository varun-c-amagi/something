import { useRef, useEffect } from 'react';

export default function useTimeout(callBack: () => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeoutRef.current = setTimeout(callBack, delay);
    const timeout = timeoutRef.current;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [callBack, delay]);
}
