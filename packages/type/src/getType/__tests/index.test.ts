import { getType } from '../index';

describe('getType', () => {
    it('should return correct for type', () => {
        expect(getType([])).toBe('Array');
        expect(getType({})).toBe('Object');
    });

    it('should return error for non-type', () => {
        expect(getType([])).not.toBe('[object Array]');
        expect(getType({})).not.toBe('[object Object]');
    });
});
