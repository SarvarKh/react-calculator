import operate from './operate';

const calculate = (data, buttonName) => {
    if (buttonName == "+/-") {
        return data = {
            total: total * (-1),
            next: next * (-1)
        }
    } else if (buttonName == "AC") {
        return data = {
            total: 0,
            next: 0
        }
    } else {
        return data = {
            opera: operate(data.total, data.next, buttonName)
        }
    }
}

export default calculate
