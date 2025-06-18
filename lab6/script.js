// Застосування alert, prompt, confirm у функції діалогу з користувачем
function userDialog() {
    alert("Вітаємо на кулінарному блозі!");
    let name = prompt("Як вас звати?");
    if (!name || name.trim() === "") {
        name = "Гість";
    }
    let confirmEntry = confirm("Чи бажаєте переглянути рецепти, " + name + "?");

    if (confirmEntry) {
        alert("Чудово! Перейдіть до розділу «Рецепти».");
    } else {
        alert("Можливо, іншим разом :)");
    }

    for (let i = 1; i <= 3; i++) {
        console.log("Цикл демонстрації: крок " + i);
    }
}

// Функція з параметрами, один з яких має значення за замовчуванням
function showDeveloperInfo(surname, name, position = "студент") {
    alert("Розробник сторінки: " + surname + " " + name + " — " + position);
}

// Порівняння двох рядків за довжиною з виведенням через alert
function compareStrings() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");
    if (str1.length > str2.length) {
        alert("Перший рядок довший: " + str1);
    } else if (str2.length > str1.length) {
        alert("Другий рядок довший: " + str2);
    } else {
        alert("Рядки однакової довжини");
    }
}

// Зміна фону сторінки за допомогою об'єкта document
const originalBg = document.body.style.backgroundColor;
document.body.style.backgroundColor = "#FFC0CB";
setTimeout(() => {
    document.body.style.backgroundColor = originalBg;
}, 30000);

// Перенаправлення на іншу сторінку за допомогою об'єкта location
function redirectToTips() {
    location.href = "tips.html";
}

// Використання querySelectorAll для вибору всіх елементів списку
const listItems = document.querySelectorAll("ul li");
const originalWeights = [];

listItems.forEach((item, index) => {
    originalWeights[index] = item.style.fontWeight;
    item.style.fontWeight = "bold";
});

setTimeout(() => {
    listItems.forEach((item, index) => {
        item.style.fontWeight = originalWeights[index] || "normal";
    });
}, 10000);

// Отримання DOM-вузла за ID та використання властивостей innerHTML, outerHTML, textContent, nodeValue
const header = document.getElementById("purpose");
if (header) {
    console.log("innerHTML:", header.innerHTML);
    console.log("outerHTML:", header.outerHTML);
    console.log("textContent:", header.textContent);
    if (header.firstChild) {
        console.log("nodeValue:", header.firstChild.nodeValue);
    }
}

// Створення та вставка елементів: createElement, createTextNode, append, prepend, after, replaceWith
const newDiv = document.createElement("div");
const newText = document.createTextNode("Новий блок створено скриптом");
newDiv.appendChild(newText);
document.body.append(newDiv);

const strong = document.createElement("strong");
strong.textContent = "ВАЖЛИВО! ";
document.body.prepend(strong);

const afterSpan = document.createElement("span");
afterSpan.textContent = " — Це текст після створеного блоку";
newDiv.after(afterSpan);

setTimeout(() => {
    afterSpan.remove();
}, 10000);

const replaced = document.createElement("p");
replaced.textContent = "Блок було замінено";
newDiv.replaceWith(replaced);

setTimeout(() => {
    strong.remove();
    replaced.remove();
}, 10000);

// Вставка елемента за допомогою document.write
document.write("<p><em>Цей текст додано через document.write</em></p>");
