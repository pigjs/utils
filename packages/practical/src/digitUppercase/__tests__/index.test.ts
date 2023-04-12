import { digitUppercase } from '..';

describe('digitUppercase', () => {
    it('should convert integer correctly', () => {
        expect(digitUppercase(0)).toBe('零元整');
        expect(digitUppercase(1)).toBe('壹元整');
        expect(digitUppercase(10)).toBe('壹拾元整');
        expect(digitUppercase(20)).toBe('贰拾元整');
        expect(digitUppercase(101)).toBe('壹佰零壹元整');
        expect(digitUppercase(1001)).toBe('壹仟零壹元整');
        expect(digitUppercase(10001)).toBe('壹万零壹元整');
        expect(digitUppercase(100001)).toBe('壹拾万零壹元整');
        expect(digitUppercase(200001)).toBe('贰拾万零壹元整');
        expect(digitUppercase(300001)).toBe('叁拾万零壹元整');
        expect(digitUppercase(1000001)).toBe('壹佰万零壹元整');
        expect(digitUppercase(2000001)).toBe('贰佰万零壹元整');
        expect(digitUppercase(10000001)).toBe('壹仟万零壹元整');
        expect(digitUppercase(20000001)).toBe('贰仟万零壹元整');
        expect(digitUppercase(100000001)).toBe('壹亿零壹元整');
        expect(digitUppercase(200000001)).toBe('贰亿零壹元整');
    });

    it('should convert decimal correctly', () => {
        expect(digitUppercase(0.88)).toBe('捌角捌分');
        expect(digitUppercase(10.88)).toBe('壹拾元捌角捌分');
        expect(digitUppercase(10.0)).toBe('壹拾元整');
        expect(digitUppercase(100.0)).toBe('壹佰元整');
        expect(digitUppercase(1000.0)).toBe('壹仟元整');
        expect(digitUppercase(10000.0)).toBe('壹万元整');
        expect(digitUppercase(100000.0)).toBe('壹拾万元整');
        expect(digitUppercase(1000000.0)).toBe('壹佰万元整');
        expect(digitUppercase(10000000.0)).toBe('壹仟万元整');
        expect(digitUppercase(100000000.0)).toBe('壹亿元整');
        expect(digitUppercase(1000000000.0)).toBe('壹拾亿元整');
        expect(digitUppercase(0.01)).toBe('零壹分');
        expect(digitUppercase(0.1)).toBe('壹角');
        expect(digitUppercase(0.0)).toBe('零元整');
        expect(digitUppercase(1.01)).toBe('壹元零壹分');
        expect(digitUppercase(10.1)).toBe('壹拾元壹角');
        expect(digitUppercase(100.01)).toBe('壹佰元零壹分');
        expect(digitUppercase(123456789.01)).toBe('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零壹分');
    });

    it('The semicolon amount should be converted correctly', () => {
        expect(digitUppercase('1000,0')).toBe('壹万元整');
        expect(digitUppercase('123,456,789.01')).toBe('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零壹分');
    });

    it('should handle invalid input', () => {
        expect(digitUppercase(undefined)).toBe('');
        expect(digitUppercase(null)).toBe('');
        expect(digitUppercase('')).toBe('');
        expect(digitUppercase(' ')).toBe('');
        expect(digitUppercase('abc')).toBe('');
        expect(digitUppercase([])).toBe('');
        expect(digitUppercase({})).toBe('');
        expect(digitUppercase(NaN)).toBe('');
    });
});
