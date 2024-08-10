// src/hooks/usePeriod.test.ts
import { renderHook, act } from '@testing-library/react';
import { PeriodProvider } from '../context/PeriodContext';
import {usePeriod} from "./usePeriod.ts";

describe('usePeriod', () => {
    test('doit retourner l\'année et le mois actuels par défaut', () => {
        const { result } = renderHook(() => usePeriod(), {
            wrapper: PeriodProvider,
        });

        // Vérifie les valeurs initiales
        expect(result.current.year).toBe(new Date().getFullYear());
        expect(result.current.month).toBe(new Date().getMonth() + 1);
    });

    test('doit permettre de mettre à jour l\'année', () => {
        const { result } = renderHook(() => usePeriod(), {
            wrapper: PeriodProvider,
        });

        // Met à jour l'année
        act(() => {
            result.current.setYear(2025);
        });

        // Vérifie que l'année a bien été mise à jour
        expect(result.current.year).toBe(2025);
    });

    test('doit permettre de mettre à jour le mois', () => {
        const { result } = renderHook(() => usePeriod(), {
            wrapper: PeriodProvider,
        });

        // Met à jour le mois
        act(() => {
            result.current.setMonth(12); // Décembre
        });

        // Vérifie que le mois a bien été mis à jour
        expect(result.current.month).toBe(12);
    });

    test('doit gérer le changement d\'année et de mois ensemble', () => {
        const { result } = renderHook(() => usePeriod(), {
            wrapper: PeriodProvider,
        });

        // Met à jour l'année et le mois
        act(() => {
            result.current.setYear(2023);
            result.current.setMonth(6); // Juin
        });

        // Vérifie que l'année et le mois ont bien été mis à jour
        expect(result.current.year).toBe(2023);
        expect(result.current.month).toBe(6);
    });
});
