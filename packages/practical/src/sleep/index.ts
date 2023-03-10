/**
 * 睡眠函数
 *
 * @example
 *
 *  await sleep(1000); //=> 等待 1000毫秒
 */
export function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
