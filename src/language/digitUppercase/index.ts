import { isNumber } from '../../type/isNumber';

/** 金额大写 */
export function digitUppercase(money: number | string): undefined | string {
    let data = Number(money);
    if (isNumber(data)) {
        return undefined;
    }
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    data = Math.abs(data);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(data * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    data = Math.floor(data);
    for (let i = 0; i < unit[0].length && money > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && money > 0; j++) {
            p = digit[data % 10] + unit[1][j] + p;
            data = Math.floor(data / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s
        .replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}
