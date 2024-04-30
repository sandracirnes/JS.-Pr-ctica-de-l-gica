function isPalindrome(str) {
   
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}

function main() {
   
    const userInput = prompt("Ingresa una palabra o una oración c:");
    
    if (isPalindrome(userInput)) {
        console.log("En efecto, ¡Es un palindromo!");
    } else {
        console.log("Lástima, no es un palindromo :(");
    }
}

main();
