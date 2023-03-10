import { isNumber } from '@pigjs/type-utils';

/**
 * 金额中文大写
 *
 * @example
 *
 *  digitUppercase(128888); //=> 壹拾贰万捌仟捌佰捌拾捌元整
 *  digitUppercase(1288.88); //=> 壹仟贰佰捌拾捌元捌角捌分
 *  digitUppercase(0.88); //=> 捌角捌分
 *  digitUppercase(0); //=>零元整
 */
export function digitUppercase(money: number | string): undefined | string {
    let value = Number(money);
    if (!isNumber(value)) {
        return undefined;
    }
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    value = Math.abs(value);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(value * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    value = Math.floor(value);
    for (let i = 0; i < unit[0].length && value > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && value > 0; j++) {
            p = digit[value % 10] + unit[1][j] + p;
            value = Math.floor(value / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s
        .replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}
