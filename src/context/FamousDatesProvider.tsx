import { useState } from 'react';
import {
  FamousDatesContextType,
  FamousDatesProviderProps,
} from '@/context/types';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { famousDatesData } from '@/data/famous-dates';

export const FamousDatesProvider = ({ children }: FamousDatesProviderProps) => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [prevActiveStage, setPrevActiveStage] = useState<number>(1);

  const FamousDatesContextValue: FamousDatesContextType = {
    famousDates: famousDatesData,
    activeStage,
    setActiveStage,
    prevActiveStage,
    setPrevActiveStage,
  };

  return (
    <FamousDatesContext.Provider value={FamousDatesContextValue}>
      {children}
    </FamousDatesContext.Provider>
  );
};
