var name = prompt('Введіть ваше ім\'я', '');
var position = prompt('Введіть вашу посаду', '');
var phone = prompt('Введіть ваш номер телефону', '');

//Створення візитної картки
var visitcard = '<table width="100%" border="0">'
              + '<tr>'
              + '<td align="center" valign="center">'
              + '<img src="images/firefox2.png" alt="Логотип"/>'
              + '</td>'
              + '<td align="center">'
              + '<b>' + name + '</b><br>'
              + '<i>' + position + '</i><br>'
              + '<font color="blue">' + phone + '</font>'
              + '</td>'
              + '</tr>'
              + '</table>';

//Створення таблиці 12×3
document.write('<table width="100%" border="0" align="center">');
for (var y = 0; y < 12; y++) {
    document.write('<tr>');
    for (var x = 0; x < 3; x++) {
        document.write('<td align="center" style="border-style: dashed; border-width: thin;">');
        document.write(visitcard);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

function showQuote(author) {
    var quote;
    switch (author) {
        case 'Цицерон':
            quote = "Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».";
            break;
        case 'Гольбах':
            quote = "Щоб мати мрію, треба спочатку її побачити.";
            break;
        case 'Шевченко':
            quote = "Так давайте ж ми будем жить, діти, мовчки в убозтві, бо така буде наша воля.";
            break;
        case 'Павличко':
            quote = "Треба викликати у собі радість і сподівання, треба творити, бо творити - це життя.";
            break;
        case 'Костенко':
            quote = "Хто кохає книги, той кохає життя.";
            break;
        default:
            quote = "Вислів не знайдено";
    }
    alert(quote);
}
function showQuote1(author) {
    var quote1;
    switch (author) {
        case 'е':
            quote1 = Math.exp(1);
            break;
        case 'π':
            quote1 = Math.PI;
            break;
        case 'log(e)':
            quote1 = Math.log10(Math.exp(1));
            break;
        case 'log2(e)':
            quote1 = Math.log2(Math.exp(1));
            break;
        case 'ln(10)':
            quote1 = Math.log(10);
            break;
        case 'ln(2)':
            quote1 = Math.log(2);
            break;
        case '√2':
            quote1 = Math.sqrt(2);
            break;
        case '√(1/2)':
            quote1 = Math.sqrt(1/2);
            break;
        case '4^2':
            quote1 = Math.pow(4, 2);
            break;
        case '√4':
            quote1 = Math.sqrt(4);
            break;
        case '√-9':
            quote1 = Math.sqrt(-9);
            break;
        case '|9|':
            quote1 = Math.abs(-9);
            break;
        case 'cos(0)':
            quote1 = Math.cos(0);
            break;
        case '[0;1]':
            quote1 = Math.random();
            break;
        default:
            quote1 = "Вислів не знайдено";
    }
    alert(quote1);
}
document.write("<h3>КОНСТАНТИ</h3>");
document.write("1. Значення константи е = " + Math.E + "<br>");
document.write("2. Значення константи π = " + Math.PI + "<br>");
document.write("3. Десятковий логарифм постійної Ейлера (е) = " + Math.log10(Math.E) + "<br>");
document.write("4. Двійковий логарифм постійної Ейлера (е) = " + Math.log2(Math.E) + "<br>");
document.write("5. Натуральний логарифм числа 10 = " + Math.log(10) + "<br>");
document.write("6. Натуральний логарифм числа 2 = " + Math.log(2) + "<br>");
document.write("7. Корінь квадратний із двох = " + Math.sqrt(2) + "<br>");
document.write("8. Корінь квадратний з однієї другої = " + Math.sqrt(1/2) + "<br><br>");

// Функції
document.write("<h3>ФУНКЦІЇ</h3>");
document.write("1. Результат зведення в степінь 4^2 = " + Math.pow(4, 2) + "<br>");
document.write("2. Результат добування квадратного кореня з 4: " + Math.sqrt(4) + "<br>");
document.write("3. Результат добування квадратного кореня з -9: " + Math.sqrt(-9) + "<br>");
document.write("4. Результат обчислення модуля |-9|: " + Math.abs(-9) + "<br>");
document.write("5. Результат обчислення косинуса нуля радіан: " + Math.cos(0) + "<br><br>");

// Генератор випадкових чисел
document.write("<h3>ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ</h3>");
document.write("Формування випадкових чисел в інтервалі [0;1]: " + Math.random() + "<br>");

function calculateFunction(x) {
    if (x < 4) {
        return Math.pow(x, 2) + Math.exp(x);
    } else if (x === 4) {
        return x + 2;
    } else {
        return Math.pow(Math.log(x), 2) + Math.log(x);
    }
}

function main() {
    const xStart = parseFloat(prompt('Введіть початкове значення x:'));
    const xEnd = parseFloat(prompt('Введіть кінцеве значення x:'));
    const xStep = parseFloat(prompt('Введіть крок зміни значень x:'));

    document.write('<pre>');
    document.write('x\t\tf(x)\n');
    for (let x = xStart; x <= xEnd; x += xStep) {
        const result = calculateFunction(x);
        document.write(`${x.toFixed(2)}\t\t${result.toFixed(4)}\n`);
    }
    document.write('</pre>');
}

main();