import { useEffect, useState } from 'react';

export const useAnimationYear = (
  activeYear: number,
  prevYear: number,
): number => {
  const [year, setYear] = useState<number>(prevYear);

  useEffect(() => {
    if (activeYear > year) {
      setTimeout(() => setYear(year + 1), 30);
    }

    if (activeYear < year) {
      setTimeout(() => setYear(year - 1), 30);
    }
  }, [activeYear, year]);

  return year;
};
