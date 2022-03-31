import { useEffect, useRef, useState } from 'react';

export default function useTicker(callback = () => {}, interval) {
  const [started, setStarted] = useState(true);
  const ref = useRef();
  ref.current = callback;

  useEffect(
    () => {
      if (started) {
        const intervalId = setInterval(() => {
          if (ref && ref.current) {
            ref.current()
          }
        }, interval);
        return () => clearInterval(intervalId);
      }
    },
    [started,
     interval],
  );

  return {
    started,
    toggle() {
      setStarted(state => !state);
    },
  };
}
