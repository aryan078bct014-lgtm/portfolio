import { useState, useEffect, useCallback } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState(sectionIds[0]);

  const onScroll = useCallback(() => {
    const offset = window.scrollY + 120;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= offset) current = id;
    }
    setActive(current);
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return { active, scrollTo };
};

export default useActiveSection;
