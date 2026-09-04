const pathToRoot = document.getElementById("path-to-root")?.innerText ?? "./";

//List of links shown directly on the header
const headerLinks = [
    { href: "index.html", text: "Hjem" },
    { href: "pages/om-bib.html", text: "Om-oss" },
    // { href: "", text: "Oppusing" },
    // { href: "", text: "Utvendig" },
];

//List of links added to the hamburger menu
const menuLinks = [
    { href: "", text: "Hjem" },
    { href: "pages/om-bib.html", text: "Om-oss" },
    { href: "pages/Kontakt-oss.html", text: "Kontakt-oss" },
    // { href: "", text: "Oppusing" },
    // { href: "", text: "Utvendig" },
];

//Creates logo element
const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = pathToRoot + "images/logo.png";

//Creates nav element with links directly on the header
const nav = document.createElement("nav");
headerLinks.forEach(link => {
    const el = document.createElement("a");
    el.append(link.text);
    el.href = pathToRoot + link.href;
    nav.appendChild(el);
});

//Creates the hamburger menu button
const hamburgerMenuBtn = document.createElement("button");
hamburgerMenuBtn.classList.add("hamburger-icon");
hamburgerMenuBtn.appendChild(document.createElement("div"));
hamburgerMenuBtn.appendChild(document.createElement("div"));
hamburgerMenuBtn.appendChild(document.createElement("div"));

//Creates the hamburger menu that opens
const hamburgerMenuBg = document.createElement("div");
hamburgerMenuBg.classList.add("menu-background");
const menu = document.createElement("div");
menu.classList.add("menu");
const menuList = document.createElement("ul");
menu.appendChild(menuList);
menuLinks.forEach(link => {
    const a = document.createElement("a");
    a.append(link.text);
    a.href = pathToRoot + link.href;
    const li = document.createElement("li");
    li.appendChild(a);
    menuList.appendChild(li);
});

const hamburgerMenuContainer = document.createElement("div");
hamburgerMenuContainer.classList.add("hamburger-menu");
hamburgerMenuContainer.appendChild(hamburgerMenuBtn);
hamburgerMenuContainer.appendChild(hamburgerMenuBg);
hamburgerMenuContainer.appendChild(menu);

//Creates and adds elements to the header itself
const headerContent = document.createElement("div");
headerContent.classList.add("header-content");
headerContent.appendChild(logo);
headerContent.appendChild(nav);
headerContent.appendChild(hamburgerMenuContainer);

const header = document.createElement("header");
header.appendChild(headerContent)

//Ads header to the body
const body = document.querySelector("body");
body.insertBefore(header, body.firstChild);

//Adds eventlistneres listening for clicks
hamburgerMenuBtn.addEventListener("click", (e) => {
    ToggleHamburgerMenu(e.target.parentElement)
});

hamburgerMenuBg.addEventListener("click", (e) => {
    hamburgerMenuContainer.classList.remove("open")
});

function ToggleHamburgerMenu() {
    if (hamburgerMenuContainer.classList.contains("open")) {
        hamburgerMenuContainer.classList.remove("open")
    } else {
        hamburgerMenuContainer.classList.add("open")
    }
}