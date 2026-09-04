const hamburgerMenuContainer = document.getElementById("hamburger-menu-container");
const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");
const hamburgerMenuBg = document.getElementById("hamburger-menu-bg");

hamburgerMenuBtn.addEventListener("click", (e) => {
    ToggleHamburgerMenu(e.target.parentElement)
});

hamburgerMenuBg.addEventListener("click", (e) => {
    hamburgerMenuContainer.classList.remove("open")
});

function ToggleHamburgerMenu(){
    if(hamburgerMenuContainer.classList.contains("open")){
        hamburgerMenuContainer.classList.remove("open")
    }else{
        hamburgerMenuContainer.classList.add("open")
    }
}