let display = document.querySelector('.display');
        let buttons = document.querySelectorAll('.button');
        let clear = document.getElementById('clear');
        let AC = document.getElementById('AC');
        let CE = document.getElementById('CE');
        let equals = document.getElementById('=');
        let operatorButtons = document.querySelectorAll('.operator');
        let numberButtons = document.querySelectorAll('.button:not(.operator):not(.equals):not(#clear):not(#AC):not(#CE)');
        let currentNumber = '';
        let previousNumber = '';
        let operator = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.id === 'AC') {
                    currentNumber = '';
                    previousNumber = '';
                    operator = '';
                    display.textContent = '';
                } else if (button.id === 'CE') {
                    currentNumber = '';
                    display.textContent = '';
                } else if (button.classList.contains('operator')) {
                    operator = button.id;
                    previousNumber = currentNumber;
                    currentNumber = '';
                    display.textContent = previousNumber + operator;
                } else if (button.id === '=') {
                    let result = eval(previousNumber + operator + currentNumber);
                    display.textContent = result;
                    currentNumber = result;
                    previousNumber = '';
                    operator = '';
                } else if (button.id === 'clear') {
                    display.textContent = '';
                } else {
                    currentNumber += button.id;
                    display.textContent = currentNumber;
                }
            });
        });