import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { useEvent } from '../../useEvent';
import { useUpdate } from '../index';

describe('useUpdate', () => {
    const setUp = () => {
        return renderHook(() => {
            const update = useUpdate();
            const count = React.useRef(0);
            return {
                update,
                count: count.current,
                onChange: useEvent(() => {
                    count.current++;
                    update();
                }),
                addCount: useEvent(() => {
                    count.current++;
                })
            };
        });
    };

    it('should initialize count to 0', () => {
        const hook = setUp();
        expect(hook.result.current.count).toBe(0);
    });

    it('should update count after calling onChange', () => {
        const hook = setUp();

        act(hook.result.current.onChange);
        expect(hook.result.current.count).toBe(1);
    });

    it('should not update count after calling addCount', () => {
        const hook = setUp();

        act(hook.result.current.addCount);
        expect(hook.result.current.count).toBe(0);
    });
});
