export function createNav() {
  const nav = document.createElement("nav");

  const ul = document.createElement("ul");

  ["О нас", "Оплата и доставка", "Новости", "Контакты"].forEach((menuText) => {
    const li = document.createElement("li");
    li.textContent = menuText;
    ul.appendChild(li);
  });

  const accountDiv = document.createElement("div");
  accountDiv.classList.add("account-container");

  const logo = document.createElement("img");
  logo.src = "Logo-login.svg";
  logo.alt = "Логотип";
  logo.classList.add("logo");
  accountDiv.appendChild(logo);

  const accountLink = document.createElement("a");
  accountLink.href = "#";
  accountLink.textContent = "Личный кабинет";
  accountLink.classList.add("account-link");
  accountDiv.appendChild(accountLink);

  nav.appendChild(ul);
  nav.appendChild(accountDiv);

  return nav;
}
