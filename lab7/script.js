// Подія через атрибут onclick у HTML
function attributeHandler() {
    alert("Вітаємо у нашому кулінарному блозі! Смачного перегляду :)");
}

// Призначення обробника події через властивість
const propertyBtn = document.getElementById("property-btn");
propertyBtn.onclick = function () {
    alert("Порада: додайте дрібку любові до кожної страви ❤️");
};

// Призначення кількох обробників одній події через addEventListener
const multiBtn = document.getElementById("multi-event-btn");

function showSurpriseMessage() {
    alert("Сюрприз! Це не торт, а кнопка :)");
}

function showFunFact() {
    alert("Цікавий факт: смак і запах — це 80% враження від їжі!");
}

multiBtn.addEventListener("click", showSurpriseMessage);
multiBtn.addEventListener("click", showFunFact);

// Призначення обробника об’єкту з методом handleEvent
const objectBtn = document.getElementById("object-btn");

const elementLogger = {
    handleEvent(event) {
        alert("Натиснуто кулінарну кнопку! (Елемент: " + event.currentTarget.tagName.toLowerCase() + ")");
    }
};

objectBtn.addEventListener("click", elementLogger);

// Видалення обробника після одноразового використання
const removableBtn = document.getElementById("removable-btn");

function onceHandler(event) {
    alert("Це було одноразове повідомлення :)");
    removableBtn.removeEventListener("click", onceHandler);
    removableBtn.remove();
}

removableBtn.addEventListener("click", onceHandler);

// Підсвічування елементів списку при кліку (делегування + event.target)
const tipsList = document.getElementById("tips-list");

tipsList.onclick = function(event) {
    if (event.target.tagName === "LI") {
        tipsList.querySelectorAll("li").forEach(li => li.classList.remove("highlight"));
        event.target.classList.add("highlight");
    }
};

// Поведінка через атрибути data-* (behavior pattern)
const menu = document.getElementById("menu");

menu.onclick = function(event) {
    const action = event.target.dataset.action;
    if (!action) return;

    if (action === "alert") {
        alert("Не забудь пообідати!");
    } else if (action === "changeBg") {
        document.body.style.backgroundColor = "#fefbd8";
    } else if (action === "addNote") {
        const note = document.createElement("p");
        note.textContent = "Нотатка: сьогодні варто приготувати щось нове!";
        document.body.append(note);
    }
};
