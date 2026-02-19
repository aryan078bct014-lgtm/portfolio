import { useEffect, useRef, useState, useCallback } from 'react';

// const useScrollReveal = (options = {}) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const handleIntersect = useCallback(([entry]) => {
//     if (entry.isIntersecting) {
//       setIsVisible(true);
//     }
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersect, {
//       threshold: options.threshold || 0.15,
//       rootMargin: options.rootMargin || '0px',
//     });
//     const current = ref.current;
//     if (current) observer.observe(current);
//     return () => {
//       if (current) observer.unobserve(current);
//     };
//   }, [handleIntersect, options.threshold, options.rootMargin]);

//   return { ref, isVisible };
// };

// export default useScrollReveal;

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const onIntersect = useCallback(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold });
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [onIntersect, threshold]);

  return { ref, isVisible };
};

export default useScrollReveal;
