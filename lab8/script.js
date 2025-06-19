// 1. Використання подій mouseover, mouseout, event.target, event.relatedTarget

const hoverList = document.getElementById("tips-list");

// Додаємо стилі при наведенні миші на елемент списку
hoverList.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI" && !event.relatedTarget?.contains(event.target)) {
        event.target.classList.add("highlight"); // додаємо клас для підсвічування
    }
});

// При виході курсора з елемента — прибираємо підсвічування
hoverList.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "LI" && !event.relatedTarget?.contains(event.target)) {
        event.target.classList.remove("highlight");
    }
});


// 2. Реалізування перетягування елемента за допомогою mousedown, mousemove, mouseup

// Отримуємо перетягуваний елемент
const draggable = document.getElementById("draggable");

let isDragging = false; // прапорець для фіксації, чи почалось перетягування
let offsetX, offsetY;   // зсув миші відносно елемента

// При натисканні миші починаємо перетягування
draggable.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.offsetLeft;
    offsetY = e.clientY - draggable.offsetTop;
    draggable.style.zIndex = 1000; // піднімаємо над іншими елементами
});

// Коли миша рухається — змінюємо позицію елемента
document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        draggable.style.left = `${e.pageX - offsetX}px`;
        draggable.style.top = `${e.pageY - offsetY}px`;
    }
});

// Коли відпускаємо мишу — зупиняємо перетягування
document.addEventListener("mouseup", () => {
    isDragging = false;
});
