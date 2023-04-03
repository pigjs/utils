import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { withStopPropagation } from '../index';

describe('withStopPropagation', () => {
    it('should stop event propagation for the specified event types', async () => {
        const onClick = jest.fn();
        const onMouseMove = jest.fn();
        const TestComponent = () => (
            <div onClick={onClick} onMouseMove={onMouseMove}>
                Test Component
            </div>
        );
        const WrappedComponent = withStopPropagation(<TestComponent />, ['click', 'mousemove']);

        const { getByText } = render(<>{WrappedComponent}</>);
        const testComponent = getByText('Test Component');

        await fireEvent.click(testComponent);
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onMouseMove).toHaveBeenCalledTimes(0);

        await fireEvent.mouseMove(testComponent);
        expect(onMouseMove).toHaveBeenCalledTimes(1);
    });

    it('should render the original component with the additional props', () => {
        const TestComponent = () => <div>Test Component</div>;
        const WrappedComponent = withStopPropagation(<TestComponent />);

        const { getByText } = render(<>{WrappedComponent}</>);
        const testComponent = getByText('Test Component');

        expect(testComponent).toBeInTheDocument();
    });
});
