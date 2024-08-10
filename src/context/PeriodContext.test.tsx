// src/hooks/usePeriod.test.ts
import { renderHook, act } from '@testing-library/react';
import { PeriodProvider } from './PeriodContext.tsx';
import {usePeriod} from "../hooks/usePeriod.ts";

test('usePeriod devrait retourner l\'année et le mois actuels et permettre de les mettre à jour', () => {
    const { result } = renderHook(() => usePeriod(), { wrapper: PeriodProvider });

    // Vérifie les valeurs initiales
    expect(result.current.year).toBe(new Date().getFullYear());
    expect(result.current.month).toBe(new Date().getMonth() + 1);

    // Met à jour l'année
    act(() => {
        result.current.setYear(2025);
    });
    expect(result.current.year).toBe(2025);

    // Met à jour le mois
    act(() => {
        result.current.setMonth(12);
    });
    expect(result.current.month).toBe(12);
});
