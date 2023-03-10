import { sleep } from '../index';

describe('sleep', () => {
    it('whether sleep is normal', async () => {
        const startTime = Date.now();
        await sleep(1000);
        const endTime = Date.now();
        const time = endTime - startTime;
        expect(time > 1000).toBe(true);
    });
});
