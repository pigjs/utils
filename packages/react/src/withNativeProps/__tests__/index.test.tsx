import { render } from '@testing-library/react';
import React from 'react';
import { withNativeProps } from '../index';

describe('withNativeProps', () => {
    const Demo = (
        <div className='wrap' style={{ width: 100 }}>
            app
        </div>
    );

    it('className should support merging', () => {
        const { getByText } = render(withNativeProps({ className: 'page' }, Demo));
        expect(getByText('app')).toHaveClass('wrap page');
    });
    it('style should support merging', () => {
        const { getByText } = render(withNativeProps({ style: { height: 50, width: 50 } }, Demo));
        expect(getByText('app')).toHaveStyle({ height: '50px', width: '50px' });
    });

    it('no className and style should be displayed normally', () => {
        const { getByText } = render(withNativeProps({}, Demo));
        expect(getByText('app')).toHaveClass('wrap');
        expect(getByText('app')).toHaveStyle({ width: '100px' });
    });
});
