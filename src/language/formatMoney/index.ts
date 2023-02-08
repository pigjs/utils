import { isNumber } from '../../type/isNumber';

/** 金额添加千分号 */
export function formatMoney(money: number | string): undefined | string {
    const value = Number(money);
    if (!isNumber(value)) {
        return undefined;
    }
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
