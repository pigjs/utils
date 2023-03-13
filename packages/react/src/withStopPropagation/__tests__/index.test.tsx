import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withStopPropagation } from '../index';

describe('withStopPropagation', () => {
    it('test withStopPropagation', async () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const Demo = () => {
            return (
                <div>
                    <div onClick={fn2}>{withStopPropagation(<div onClick={fn}>fn</div>)}</div>
                </div>
            );
        };
        const { getByText } = render(<Demo />);
        await userEvent.click(getByText('fn'));
        expect(fn).toBeCalledTimes(1);
        expect(fn2).toBeCalledTimes(0);
    });
});
