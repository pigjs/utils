import { formatMoney } from '../index';

describe('formatMoney', () => {
    it('should format positive numbers correctly', () => {
        expect(formatMoney(0)).toBe('0');
        expect(formatMoney(999)).toBe('999');
        expect(formatMoney(1000)).toBe('1,000');
        expect(formatMoney(999999)).toBe('999,999');
        expect(formatMoney(1000000)).toBe('1,000,000');
        expect(formatMoney(1000.1234)).toBe('1,000.1234');
        expect(formatMoney(1000000.1234)).toBe('1,000,000.1234');
    });

    it('should format negative numbers correctly', () => {
        expect(formatMoney(-999)).toBe('-999');
        expect(formatMoney(-1000)).toBe('-1,000');
        expect(formatMoney(-999999)).toBe('-999,999');
        expect(formatMoney(-1000000)).toBe('-1,000,000');
        expect(formatMoney(-1000.1234)).toBe('-1,000.1234');
        expect(formatMoney(-1000000.1234)).toBe('-1,000,000.1234');
    });

    it('should return undefined for null or undefined input', () => {
        expect(formatMoney(null)).toBe(undefined);
        expect(formatMoney(undefined)).toBe(undefined);
    });

    it('should throw an error for invalid input', () => {
        expect(() => formatMoney('not a number')).toThrowError(
            'Invalid input "not a number", expected number or string'
        );
        expect(() => formatMoney(NaN)).toThrowError('Invalid input "NaN", expected number or string');
        expect(() => formatMoney({})).toThrowError('Invalid input "[object Object]", expected number or string');
    });
});
