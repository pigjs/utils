import { formatMoney } from '../index';

describe('formatMoney', () => {
    it('positive numbers should be converted correctly', () => {
        expect(formatMoney(1000)).toBe('1,000');
        expect(formatMoney(1000.9999)).toBe('1,000.9999');
        expect(formatMoney(99999999)).toBe('99,999,999');
        expect(formatMoney(999.99)).toBe('999.99');
        expect(formatMoney(0.99)).toBe('0.99');
        expect(formatMoney(0)).toBe('0');
    });

    it('negative numbers also need support', () => {
        expect(formatMoney(-1000)).toBe('-1,000');
        expect(formatMoney(-1000.9999)).toBe('-1,000.9999');
        expect(formatMoney(-99999999)).toBe('-99,999,999');
        expect(formatMoney(-999.99)).toBe('-999.99');
        expect(formatMoney(-0.99)).toBe('-0.99');
    });
});
