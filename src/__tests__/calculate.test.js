/**
 * @jest-environment jsdom
 */

import calculate from '../logic/calculate';

describe("Calculate methods: 'AC' and '+/-'", () => {
    const wrongResult = {
        next: '5',
        total: '5',
        operation: null
    };

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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    })
})

describe("Calculate methods: '%'", () => {
    const wrongResult = {
        next: '5',
        total: '5',
        operation: null
    };
    
    test('Returns parcentage of the integer onClick of %', () => {
        const newObject = {
            next: '56'
        };
        const button = '%';
        const result = {
            next: 0.56
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });
})

describe("Calculate methods: operational '+, -, x, ÷'", () => {
    const wrongResult = {
        next: '5',
        total: '5',
        operation: null
    };

    test('Btn +: Keeps 1st number in total and waits for the second making it 0', () => {
        const newObject = {
            next: '71',
            total: null,
            operation: '+'
        };
        const button = '+';
        const result = {
            next: '0',
            total: '71',
            operation: '+'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Btn -: Keeps 1st and Cumulative numbers and waits for the 2nd making it 0', () => {
        const newObject = {
            next: '9',
            total: '2',
            operation: '-'
        };
        const button = '-';
        const result = {
            next: '0',
            total: '9',
            operation: '-'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Btn -: Keeps 1st and Cumulative numbers and waits for the 2nd making it 0 - negative case', () => {
        const newObject = {
            next: '-9',
            total: '-2',
            operation: '-'
        };
        const button = '-';
        const result = {
            next: '0',
            total: '-9',
            operation: '-'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Btn X: Keeps 1st and Cumulative numbers and waits for the 2nd making it 0', () => {
        const newObject = {
            next: '945',
            total: '-0.232432423',
            operation: 'X'
        };
        const button = 'X';
        const result = {
            next: '0',
            total: '945',
            operation: 'X'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Btn ÷: Keeps 1st and Cumulative numbers and waits for the 2nd making it 0', () => {
        const newObject = {
            next: '123456789',
            total: '-5',
            operation: '÷'
        };
        const button = '÷';
        const result = {
            next: '0',
            total: '123456789',
            operation: '÷'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Btn ÷: Keeps 1st and Cumulative negative decimals and waits for the 2nd making it 0', () => {
        const newObject = {
            next: '-0.123456789',
            total: '0.54',
            operation: '÷'
        };
        const button = '÷';
        const result = {
            next: '0',
            total: '-0.123456789',
            operation: '÷'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });
})

describe("Calculate methods: 'AC' and '+/-'", () => {
    const wrongResult = {
        next: '5',
        total: '5',
        operation: null
    };

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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
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
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    })
})

describe("Calculate methods: '='", () => {
    const wrongResult = {
        next: '5',
        total: '5',
        operation: null
    };

    test('Adds 5 to 13', () => {
        const newObject = {
            next: '13',
            total: '5',
            operation: '+'
        };
        const button = '=';
        const result = {
            next: '18',
            total: '18',
            operation: '+'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Adds negative integer -5 to decimal 1.5', () => {
        const newObject = {
            next: '-5',
            total: '1.5',
            operation: '+'
        };
        const button = '=';
        const result = {
            next: '-3.5',
            total: '-3.5',
            operation: '+'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Subtract 25 from 525', () => {
        const newObject = {
            next: '25',
            total: '525',
            operation: '-'
        };
        const button = '=';
        const result = {
            next: '500',
            total: '500',
            operation: '-'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });


    test('Subtract 2.5 from -5.25', () => {
        const newObject = {
            next: '2.5',
            total: '-5.25',
            operation: '-'
        };
        const button = '=';
        const result = {
            next: '-7.75',
            total: '-7.75',
            operation: '-'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Multiply 6 to -3', () => {
        const newObject = {
            next: '-3',
            total: '6',
            operation: 'X'
        };
        const button = '=';
        const result = {
            next: '-18',
            total: '-18',
            operation: 'X'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Multiply -0.5 to -2.5', () => {
        const newObject = {
            next: '-2.5',
            total: '-0.5',
            operation: 'X'
        };
        const button = '=';
        const result = {
            next: '1.25',
            total: '1.25',
            operation: 'X'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Divide 93 by 3', () => {
        const newObject = {
            next: '3',
            total: '93',
            operation: '÷'
        };
        const button = '=';
        const result = {
            next: '31',
            total: '31',
            operation: '÷'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });

    test('Divide -9.3 by 3', () => {
        const newObject = {
            next: '3',
            total: '-9.3',
            operation: '÷'
        };
        const button = '=';
        const result = {
            next: '-3.1',
            total: '-3.1',
            operation: '÷'
        };
    
        expect(calculate(newObject, button)).toStrictEqual(result);
        expect(calculate(newObject, button)).not.toStrictEqual(wrongResult);
    });
})
