import { createNav } from "./nav.js";
import { createMain } from "./main.js";
import { createFooter } from "./footer.js";

// Найти корневой элемент
const root = document.getElementById("root");

// Создать и добавить навигацию
const nav = createNav();
root.appendChild(nav);

// Создать и добавить основной контент
const main = createMain();
root.appendChild(main);

// Создать и добавить подвал
const footer = createFooter();
root.appendChild(footer);
