// src/util/format.test.ts
import { describe, test, expect } from 'vitest';
import { formatCurrency, formatDate } from './format';

describe('formatCurrency', () => {
    test('devrait formater correctement les nombres en euros', () => {
        expect(formatCurrency(1000)).toBe('1 000,00 €');
        expect(formatCurrency(1234567.89)).toBe('1 234 567,89 €');
        expect(formatCurrency(0)).toBe('0,00 €');
        expect(formatCurrency(-500)).toBe('-500,00 €');
    });
});

describe('formatDate', () => {
    test('devrait formater correctement les dates en français', () => {
        const date = new Date(2023, 7, 10); // 10 août 2023
        expect(formatDate(date)).toBe('10 août 2023');

        const date2 = new Date(2024, 0, 1); // 1 janvier 2024
        expect(formatDate(date2)).toBe('1 janvier 2024');

        const date3 = new Date(2000, 11, 31); // 31 décembre 2000
        expect(formatDate(date3)).toBe('31 décembre 2000');
    });

    test('devrait gérer correctement les dates invalides', () => {
        const invalidDate = new Date('invalid-date');
        expect(formatDate(invalidDate)).toBe('Invalid Date');
    });
});
