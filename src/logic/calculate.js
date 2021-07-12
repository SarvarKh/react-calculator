import operate from './operate';

const calculate = (data, buttonName) => {
    if (buttonName == "+/-") {
        return data = {
            total: total * (-1),
            next: next * (-1)
        }
    } else if (buttonName == "+") {
        return data = {
            total: operate()
        }
    } else if (buttonName == "-") {
        return data = {
            // Do something
        }
    } else if (buttonName == "X") {
        return data = {
            // Do something
        }
    } else if (buttonName == "÷") {
        return data = {
            // Do something
        }
    } else if (buttonName == "%") {
        return data = {
            // Do something
        }
    }
}

export default calculate
