function getHighestNumber() {
    let highest = -Infinity;
    for (let i = 0; i < 10; i++) {
        const number = parseFloat(prompt(`Ingresa número ${i + 1}:`));
        if (!isNaN(number) && number > highest) {
            highest = number;
        }
    }
    return highest;
}

const highestNumber = getHighestNumber();
console.log(`El número más grande es: ${highestNumber}`);