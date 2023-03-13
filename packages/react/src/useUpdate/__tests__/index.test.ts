import { act, renderHook } from '@testing-library/react';
import { useEvent } from '../../useEvent';
import { useUpdate } from '../index';

describe('useUpdate', () => {
    it('test update', () => {
        let count = 0;
        const hook = renderHook(() => {
            const update = useUpdate();
            return {
                update,
                count,
                onChange: useEvent(() => {
                    count++;
                    update();
                }),
                addCount: useEvent(() => {
                    count++;
                })
            };
        });
        expect(hook.result.current.count).toBe(0);
        act(hook.result.current.onChange);
        expect(hook.result.current.count).toBe(1);
        act(hook.result.current.addCount);
        expect(hook.result.current.count).toBe(1);
    });
});
