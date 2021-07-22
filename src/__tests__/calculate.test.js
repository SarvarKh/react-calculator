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

describe("Calculate methods: '%'", () => {
    test('Returns parcentage of the integer onClick of %', () => {
        const newObject = {
            next: '56'
        };
        const button = '%';
        const result = {
            next: 0.56
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    });

    test('Returns parcentage of the negatie integer onClick of %', () => {
        const newObject = {
            next: '-25'
        };
        const button = '%';
        const result = {
            next: -0.25
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    });

    test('Returns parcentage of the negatie decimal number onClick of %', () => {
        const newObject = {
            next: '-0.85'
        };
        const button = '%';
        const result = {
            next: -0.0085
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
    });
})
