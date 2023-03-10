import { isNumber } from '@pigjs/type-utils';

/**
 * 金额添加千分号
 *
 * @example
 *
 *  formatMoney(1000); //=> 1,000
 *  formatMoney(99999999); //=> 99,999,999
 *  formatMoney(999.99); //=> 999.99
 *  formatMoney(-1000); //=> -1,000
 *  formatMoney(-99999999); //=> -99,999,999
 *  formatMoney(-999.99); //=> -999.99
 *  formatMoney(0); //=> 0
 */
export function formatMoney(num: number | string): undefined | string | number {
    const value = Number(num);
    if (!isNumber(value)) {
        return undefined;
    }
    // TODO 小数点后14位数以上的存在精度问题
    const moneys = num.toString().split('.');
    const money = (+moneys[0]).toLocaleString();
    if (moneys.length > 1) {
        return `${money}.${moneys[1]}`;
    }
    return money;
}
