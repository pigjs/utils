import { renderHook } from '@testing-library/react';
import { useUrlParam } from '../index';

describe('useUrlParam', () => {
    it('test useUrlParam', () => {
        const hook = renderHook(() => {
            const id = useUrlParam('id');
            return { id };
        });
        expect(hook.result.current.id).toBeNull();
    });
});
