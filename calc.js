let a = ''; // первое число
let b = ''; // первое число
let sign = ''; // знак операции
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "00", '.'];
const action = ['-', '+', '×', '÷','%','del','^','!',"√"];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; 
    b = ''; 
    sign = ''; 
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка ac
    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }
     // если нажата клавиша + - / *
     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b , sign);
        return;
    }
    document.querySelector('.del').onclick = () => { 
        if (finish) { 
            // Если результат уже получен, удалить все 
            clearAll(); 
        } else if (b !== '') { 
            // Если второе число не пустое, удалить последнюю цифру во втором числе 
            b = b.slice(0, -1); 
            out.textContent = b || a; 
        } else if (sign !== '') { 
            // Если знак операции есть, удалить знак операции 
            sign = ''; 
            out.textContent = a; 
        } else { 
            // Удалить последнюю цифру из первого числа 
            a = a.slice(0, -1); 
            out.textContent = a; 
        } 
    } 
    // нажат =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "%":
                a = a / 100;
                break;
            case "÷":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b , sign);
    }
}
document.querySelector('.new-buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }
    if (key === '!') {
        let factorial = 1;
        for (let i = 1; i <= a; i++) {
            factorial *= i;
        }
        a = factorial;
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
    if (key === '^') {
        a = Math.pow(Number(a), 2);
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
    if (key === '√') {
        a = Math.sqrt(Number(a));
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
    if (key === 'sin') {
        a = Math.sin(Number(a));
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
    if (key === 'cos') {
        a = Math.cos(Number(a));
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
    if (key === 'tg') {
        a = Math.tan(Number(a));
        out.textContent = a;
        console.table(a, b, sign);
        return;
    }
}
