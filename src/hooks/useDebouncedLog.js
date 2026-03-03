import { useEffect, useRef } from "react";

const useDebouncedLog = (value, delay, callback) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    console.log("Debounce hook running with", value);
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

// const useDebouncedLog = (term, resultsCount, delay, callback) => {
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     console.log("Debounce hook running with", { term, resultsCount });
//     if (!term || term.trim().length < 3) return;

//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       callback({ term, resultsCount });
//     }, delay);

//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [term, resultsCount, delay, callback]);
// };

// export default useDebouncedLog;
