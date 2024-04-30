function factorial(n) {
  
    if (n === 0 || n === 1) {
        return 1;
    } 
    
    else {
        return n * factorial(n - 1);
    }
}

function main() {
  
    const n = parseInt(prompt("Ingrese un número entero positivo"));

   
    if (isNaN(n) || n < 1) {
        console.log("Por favor ingrese un número entero válido positivo >< ");
    } else {
      
        const result = factorial(n);
        console.log(`La factorial es ${n} is: ${result}`);
    }
}

main();