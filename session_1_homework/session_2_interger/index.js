class Interger {
    constructor(output, firstSelector, secondSelector) {
        this.firstSelector = firstSelector;
        this.secondSelector = secondSelector;
        this.output = document.getElementById(output)
    }
    find = () => {
        let outputHTML = ''
        const firstNumber = parseInt(
            document.querySelector(this.firstSelector).value
        );
        const secondNumber = parseInt(
            document.querySelector(this.secondSelector).value
        );
        let content = `<p class="title"> Các số nguyên tố trong khoảng ${firstNumber} và ${secondNumber} là: </p>`
        outputHTML += content

        for (let i = firstNumber; i <= secondNumber; i++) {
            let result = 0
            if (i == 2) {
                let p1 = `<span class="text">${i}</span> `
                outputHTML += p1
            } else if (i > 2 && i % 2 != 0) {
                for (let j = 3; j <= Math.sqrt(i); j += 2) {
                    if (i % j == 0) {
                        result = 1
                        break;
                    }
                }
                if (i > 1 && result == 0) {
                    let p2 = `<span class="text">- ${i}</span> `
                    outputHTML += p2
                }
            }

        }
        this.output.innerHTML = outputHTML
    };
}

const interger = new Interger('output', '.first', '.second');

document.querySelector("button").addEventListener("click", () => {
    interger.find();
});
