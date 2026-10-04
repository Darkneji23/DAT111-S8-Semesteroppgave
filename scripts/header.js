let pathToRoot = document.getElementById("path-to-root")?.innerText ?? "./";

//List of links shown directly on the header
const headerLinks = [
  { href: "index.html", text: "Hjem" },
  { href: "pages/om-bib.html", text: "Om-oss" },
  { href: "pages/kontakt-oss.html", text: "Kontakt-oss" },
  { href: "pages/oppussing.html", text: "Oppussing" },
  { href: "pages/utvendig.html", text: "Utvendig" },
  { href: "pages/konsultasjon.html", text: "Konsultasjon" },
];

//List of links added to the hamburger menu
const menuLinks = [
  { href: "index.html", text: "Hjem" },
  { href: "pages/om-bib.html", text: "Om-oss" },
  { href: "pages/kontakt-oss.html", text: "Kontakt-oss" },
  { href: "pages/oppussing.html", text: "Oppussing" },
  { href: "pages/utvendig.html", text: "Utvendig" },
  { href: "pages/konsultasjon.html", text: "Konsultasjon" },
];

//Creates logo element
let logo = document.createElement("img");
logo.classList.add("header__logo");
logo.src = pathToRoot + "images/logo.png";

//Creates nav element with links directly on the header
let nav = document.createElement("nav");
nav.classList.add("header__nav");
headerLinks.forEach((link) => {
  const el = document.createElement("a");
  el.append(link.text);
  el.href = pathToRoot + link.href;
  nav.appendChild(el);
});

//Creates the hamburger menu button
const hamburgerMenuBtn = document.createElement("button");
hamburgerMenuBtn.classList.add("header__hamburger-btn");
hamburgerMenuBtn.appendChild(document.createElement("div"));
hamburgerMenuBtn.appendChild(document.createElement("div"));
hamburgerMenuBtn.appendChild(document.createElement("div"));

//Creates the hamburger menu that opens
const hamburgerMenuBg = document.createElement("div");
hamburgerMenuBg.classList.add("header__overlay");

const menu = document.createElement("div");
menu.classList.add("header__menu");

const menuList = document.createElement("ul");
menuList.classList.add("header__menu-list");
menu.appendChild(menuList);

menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.append(link.text);
  a.href = pathToRoot + link.href;
  const li = document.createElement("li");
  li.appendChild(a);
  menuList.appendChild(li);
});

const hamburgerMenuContainer = document.createElement("div");
hamburgerMenuContainer.classList.add("header__hamburger");
hamburgerMenuContainer.appendChild(hamburgerMenuBtn);
hamburgerMenuContainer.appendChild(hamburgerMenuBg);
hamburgerMenuContainer.appendChild(menu);

//Creates and adds elements to the header itself
const headerContent = document.createElement("div");
headerContent.classList.add("header__content");
headerContent.appendChild(logo);
headerContent.appendChild(nav);
headerContent.appendChild(hamburgerMenuContainer);

const header = document.createElement("header");
header.classList.add("header");
header.appendChild(headerContent);

//Ads header to the body
const body = document.querySelector("body");
body.insertBefore(header, body.firstChild);

//Adds eventlistneres listening for clicks
hamburgerMenuBtn.addEventListener("click", () => {
  ToggleHamburgerMenu();
});

hamburgerMenuBg.addEventListener("click", () => {
  hamburgerMenuContainer.classList.remove("header__hamburger--open");
});

function ToggleHamburgerMenu() {
  hamburgerMenuContainer.classList.toggle("header__hamburger--open");
}
