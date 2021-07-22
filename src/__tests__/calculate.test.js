/**
 * @jest-environment jsdom
 */

import calculate from '../logic/calculate';

describe("Calculate methods: 'AC' and '+/-'", () => {
    test('Turns object next value to 0 if btn is AC', () => {
        const newObject = {
            next: '9',
            total: '5',
            operation: null
        };
        const button = 'AC';
        const result = {
            next: '0',
            total: '5',
            operation: null
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    });

    test('Turns the integer to opposite format +/-', () => {
        const newObject = {
            next: '-3',
            total: '15',
            operation: null
        };
        const button = '+/-';
        const result = {
            next: '3',
            total: '15',
            operation: null
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    })

    test('Turns the decimal to opposite format +/-', () => {
        const newObject = {
            next: '0.3',
            total: '1',
            operation: null
        };
        const button = '+/-';
        const result = {
            next: '-0.3',
            total: '1',
            operation: null
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    })
})