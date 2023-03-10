import { digitUppercase } from '../index';

describe('digitUppercase', () => {
    it('whether the integer conversion is correct', () => {
        expect(digitUppercase(128888)).toBe('壹拾贰万捌仟捌佰捌拾捌元整');
        expect(digitUppercase(0)).toBe('零元整');
    });

    it('whether the decimal conversion is correct', () => {
        expect(digitUppercase(0.88)).toBe('捌角捌分');
        expect(digitUppercase(10.88)).toBe('壹拾元捌角捌分');
    });
});
