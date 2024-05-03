document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const botones = document.querySelectorAll('.btn');
    let operaciones = '';
    let numero = '';
    let memoria = 0;

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const value = boton.textContent;

            if (!isNaN(parseInt(value))) {
                numero += value;
                screen.value = numero;
            } else if (value === 'C') {
                clearScreen();
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });

    function clearScreen() {
        numero = '';
        operaciones = '';
        screen.value = '';
    }

    function handleOperator(operator) {
        if (numero !== '') {
            if (operaciones !== '') {
                calculate();
            } else {
                memoria = parseFloat(numero);
            }

            operaciones = operator;
            numero = '';
        }
    }

    function calculate() {
        if (numero !== '') {
            const num = parseFloat(numero);
            switch (operaciones) {
                case '+':
                    memoria += num;
                    break;
                case '-':
                    memoria -= num;
                    break;
                case '*':
                    memoria *= num;
                    break;
                case '/':
                    if (num !== 0) {
                        memoria /= num;
                    } else {
                        alert('Cannot divide by zero!');
                    }
                    break;
                default:
                    break;
            }
            screen.value = memoria;
            numero = '';
            operaciones = '';
        }
    }
});
