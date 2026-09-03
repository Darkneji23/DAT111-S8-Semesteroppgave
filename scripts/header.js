const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");
const hamburgerMenuBg = document.getElementById("hamburger-menu-bg");

hamburgerMenuBtn.addEventListener("click", (e) => {
    ToggleHamburgerMenu(e.target.parentElement)
});

hamburgerMenuBg.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("open")
});

function ToggleHamburgerMenu(menu){
    if(menu.classList.contains("open")){
        menu.classList.remove("open")
    }else{
        menu.classList.add("open")
    }
}