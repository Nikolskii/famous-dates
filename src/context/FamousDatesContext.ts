import { createContext } from 'react';
import { FamousDatesContextType } from '@/context/types';

export const FamousDatesContext = createContext<FamousDatesContextType | null>(
  null,
);
