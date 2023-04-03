import { act, renderHook } from '@testing-library/react';
import { useUrlParam } from '../index';

describe('useUrlParam', () => {
    // 保存原始 window.location
    const originalWindowLocation = window.location;

    // 在每个测试用例之前重置 window.location
    beforeEach(() => {
        // @ts-ignore
        delete window.location;
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home');
    });

    // 在所有测试用例结束后恢复原始 window.location
    afterAll(() => {
        window.location = originalWindowLocation;
    });
    it('should return the value of the specified URL parameter', () => {
        const { result } = renderHook(() => useUrlParam('id'));
        expect(result.current).toBe('');
    });
    it('should return an empty string when the key is not a string', () => {
        const { result } = renderHook(() => useUrlParam(undefined));
        expect(result.current).toBe('');
    });
    it('should return the value of the specified URL parameter', () => {
        const { result } = renderHook(() => useUrlParam('id'));
        expect(result.current).toBe('');

        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?id=123');
        const { result: result2 } = renderHook(() => useUrlParam('id'));
        expect(result2.current).toBe('123');
    });
    it('updates the value when the key changes', () => {
        // @ts-ignore
        window.location = new URL('https://www.pigjs.com/home?id=123&name=joe');
        const { result, rerender } = renderHook(({ key }) => useUrlParam(key), { initialProps: { key: 'id' } });
        expect(result.current).toBe('123');

        act(() => rerender({ key: 'name' }));

        expect(result.current).toBe('joe');
    });
});
