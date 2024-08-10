// src/hooks/usePeriod.ts
import { useContext } from 'react';
import { PeriodContext } from '../context/PeriodContext';

// Créer un hook personnalisé pour utiliser le contexte plus facilement
export const usePeriod = () => {
    const context = useContext(PeriodContext);
    if (!context) {
        throw new Error('usePeriod doit être utilisé dans un PeriodProvider');
    }
    return context;
};
