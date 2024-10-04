export function createMain() {
  const main = document.createElement("main");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Kvartira";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Main content goes here.";

  main.appendChild(heading);
  main.appendChild(paragraph);
  return main;
}
