const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value >= '0' && value <= '9' || value === '.') {
			if (value === '.' && currentInput.includes('.')) {
			return; 
			}
            currentInput += value;
            display.value = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput !== '' && firstNumber === '') {
                firstNumber = currentInput;
                operator = value;
                currentInput = '';
            }
        } else if (value === '=') {
            if (firstNumber !== '' && operator !== '' && currentInput !== '') {
                const result = calculate(firstNumber, operator, currentInput);
                display.value = result;
                currentInput = result;
                firstNumber = '';
                operator = '';
            }
        } else if (value === 'C') {
            currentInput = '';
            firstNumber = '';
            operator = '';
            display.value = '';
        }
    });
});

function calculate(num1, operator, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (operator === '+') return n1 + n2;
    if (operator === '-') return n1 - n2;
    if (operator === '*') return n1 * n2;
    if (operator === '/') return n2 !== 0 ? n1 / n2 : 'Ошибка';
}