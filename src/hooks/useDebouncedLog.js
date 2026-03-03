import { useEffect, useRef } from "react";

const useDebouncedLog = (value, delay, callback) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!value?.term || value.term.trim().length < 3) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, delay, callback]);
};

export default useDebouncedLog;
