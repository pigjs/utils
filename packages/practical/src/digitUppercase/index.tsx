import { isEmptyString, isNumber, isString } from '@pigjs/type-utils';

// 最大值
const MAXIMUM_NUMBER = 99999999999.99;
// 为输出预定义基数字符和货币符号
const CN_ZERO = '零';
const CN_ONE = '壹';
const CN_TWO = '贰';
const CN_THREE = '叁';
const CN_FOUR = '肆';
const CN_FIVE = '伍';
const CN_SIX = '陆';
const CN_SEVEN = '柒';
const CN_EIGHT = '捌';
const CN_NINE = '玖';
const CN_TEN = '拾';
const CN_HUNDRED = '佰';
const CN_THOUSAND = '仟';
const CN_TEN_THOUSAND = '万';
const CN_HUNDRED_MILLION = '亿';
const CN_SYMBOL = '';
const CN_DOLLAR = '元';
const CN_TEN_CENT = '角';
const CN_CENT = '分';
const CN_INTEGER = '整';

/**
 * 将给定的数字转换成金额中文大写
 *
 * @example
 *
 *  digitUppercase(128888); //=> 壹拾贰万捌仟捌佰捌拾捌元整
 *  digitUppercase(1288.88); //=> 壹仟贰佰捌拾捌元捌角捌分
 *  digitUppercase(0); //=>零元整
 *  digitUppercase('1000,0'); //=>零元整
 *  digitUppercase('123,456,789.01'); //=> 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零壹分
 */
export function digitUppercase(money: string | number): string {
    if ((!isNumber(money) && !isString(money)) || isEmptyString(money)) {
        return '';
    }

    // 表示数字的整数部分
    let integral;
    // 表示数字数的十进制部分
    let decimal;
    // 输出结果
    let outputCharacters;
    let zeroCount;
    let i, p, d, ds;
    let quotient, modulus;

    let currencyDigits = money.toString();

    if (currencyDigits.match(/[^,.\d]/) !== null) {
        // 输入字符串中的字符无效
        return '';
    }
    if (currencyDigits.match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) === null) {
        // 不是正确的数字金额
        return '';
    }

    // 删除逗号分隔符
    currencyDigits = currencyDigits.replace(/,/g, '');
    // 在开头修剪零
    currencyDigits = currencyDigits.replace(/^0+/, '');
    if (Number(currencyDigits) > MAXIMUM_NUMBER) {
        // 数值太大无法转换
        return '';
    }

    // 处理从货币数字到字符的转换:
    // 在处理转换前，将整数部分和小数部分分开
    const parts = currencyDigits.split('.');
    if (parts.length > 1) {
        integral = parts[0];
        decimal = parts[1];
        // 删去第二位之后多余的十进制数字
        decimal = decimal.substr(0, 2);
    } else {
        integral = parts[0];
        decimal = '';
    }
    // 准备与数字对应的字符
    const digits = [CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE];
    const radices = ['', CN_TEN, CN_HUNDRED, CN_THOUSAND];
    const bigRadices = ['', CN_TEN_THOUSAND, CN_HUNDRED_MILLION];
    const decimals = [CN_TEN_CENT, CN_CENT];
    outputCharacters = '';
    // 如果大于0，则处理积分部分
    if (Number(integral) > 0) {
        zeroCount = 0;
        for (i = 0; i < integral.length; i++) {
            p = integral.length - i - 1;
            d = integral.substr(i, 1);
            quotient = p / 4;
            modulus = p % 4;
            if (d == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    outputCharacters += digits[0];
                }
                zeroCount = 0;
                outputCharacters += digits[Number(d)] + radices[modulus];
            }
            if (modulus == 0 && zeroCount < 4) {
                outputCharacters += bigRadices[quotient];
            }
        }
        outputCharacters += CN_DOLLAR;
    }
    // 如果有，处理小数部分
    if (decimal !== '') {
        for (i = 0; i < decimal.length; i++) {
            d = decimal.substr(i, 1);
            ds = decimal.substr(-1, 1);
            if (d == 0) {
                if (ds == 0) {
                    outputCharacters += '';
                } else {
                    outputCharacters += digits[Number(d)];
                }
            } else {
                outputCharacters += digits[Number(d)] + decimals[i];
            }
        }
    }
    // 确认并返回最终输出字符串
    if (outputCharacters === '') {
        outputCharacters = CN_ZERO + CN_DOLLAR;
    }
    if (decimal === '') {
        outputCharacters += CN_INTEGER;
    }
    outputCharacters = CN_SYMBOL + outputCharacters;
    return outputCharacters;
}
