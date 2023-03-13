import { attachPropertiesToComponent } from '../index';

describe('attachPropertiesToComponent', () => {
    it('test attachPropertiesToComponent', () => {
        const DF = () => {
            return 'attachPropertiesToComponent';
        };
        const data = {
            Input: 'pigjs',
            Text: 24
        };
        const FC = attachPropertiesToComponent(DF, data);
        expect(FC.Input).toBe('pigjs');
        expect(FC.Text).toBe(24);
    });
});
