import { ReactNode } from 'react';
import { FamousDatesType } from '@/types/FamousDates';

export interface FamousDatesProviderProps {
  children: ReactNode;
}

export interface FamousDatesContextType {
  famousDates: FamousDatesType[];
  activeStage: number;
  setActiveStage: (stage: number) => void;
  prevActiveStage: number;
  setPrevActiveStage: (stage: number) => void;
}
