import { renderHook } from '@testing-library/react';
import { useEvent } from '../index';

describe('useEvent', () => {
    it('should correctly capture the latest callback', () => {
        const { result, rerender } = renderHook(({ callback }) => useEvent(callback), {
            initialProps: { callback: () => 'initial' }
        });

        const callback1 = result.current;
        expect(callback1()).toBe('initial');

        rerender({ callback: () => 'updated' });

        // Ensure the same callback is returned after the update
        expect(result.current).toBe(callback1);

        // Ensure the callback now returns the updated value
        expect(callback1()).toBe('updated');
    });

    it('should not change the callback reference on unrelated updates', () => {
        const { result, rerender } = renderHook(({ callback }) => useEvent(callback), {
            initialProps: { callback: () => {} }
        });

        const initialCallback = result.current;

        // Re-render the hook with the same callback
        rerender({ callback: result.current });

        expect(result.current).toBe(initialCallback);
    });
});
