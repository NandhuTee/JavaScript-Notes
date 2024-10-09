const display = document.getElementById('display');
        const press = (val) => display.value += val;
        const calculate = () => display.value = eval(display.value) || 'Error';
        const clearDisplay = () => display.value = '';