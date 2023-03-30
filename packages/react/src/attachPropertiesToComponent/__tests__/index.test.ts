import { attachPropertiesToComponent } from '../index';

describe('attachPropertiesToComponent', () => {
    const DummyComponent = () => {
        return 'attachPropertiesToComponent';
    };

    it('should attach properties to the given component', () => {
        const propertiesToAttach = {
            Input: 'pigjs',
            Text: 24
        };
        const EnhancedComponent = attachPropertiesToComponent(DummyComponent, propertiesToAttach);
        expect(EnhancedComponent.Input).toBe('pigjs');
        expect(EnhancedComponent.Text).toBe(24);
    });

    it('should attach an empty object without errors', () => {
        const propertiesToAttach = {};
        const EnhancedComponent = attachPropertiesToComponent(DummyComponent, propertiesToAttach);
        const originalComponentKeys = Object.keys(DummyComponent);
        const enhancedComponentKeys = Object.keys(EnhancedComponent);
        expect(enhancedComponentKeys).toEqual(originalComponentKeys);
    });

    it('should not overwrite existing properties on the component', () => {
        const ExistingComponent = () => {
            return 'attachPropertiesToComponent';
        };
        ExistingComponent.Text = 42;
        const propertiesToAttach = {
            Input: 'pigjs',
            NewText: 24
        };
        const EnhancedComponent = attachPropertiesToComponent(ExistingComponent, propertiesToAttach);
        expect(EnhancedComponent.Input).toBe('pigjs');
        expect(EnhancedComponent.Text).toBe(42);
        expect(EnhancedComponent.NewText).toBe(24);
    });

    it('should attach properties with various types', () => {
        const propertiesToAttach = {
            stringProp: 'pigjs',
            numberProp: 24,
            booleanProp: true,
            objectProp: { key: 'value' },
            arrayProp: [1, 2, 3],
            functionProp: () => 'test'
        };
        const EnhancedComponent = attachPropertiesToComponent(DummyComponent, propertiesToAttach);
        expect(EnhancedComponent.stringProp).toBe('pigjs');
        expect(EnhancedComponent.numberProp).toBe(24);
        expect(EnhancedComponent.booleanProp).toBe(true);
        expect(EnhancedComponent.objectProp).toEqual({ key: 'value' });
        expect(EnhancedComponent.arrayProp).toEqual([1, 2, 3]);
        expect(EnhancedComponent.functionProp()).toBe('test');
    });
});
