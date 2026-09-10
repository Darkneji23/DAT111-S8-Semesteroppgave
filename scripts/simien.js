let isScrolling = false;
let currentSection = 1;
const pageContent = document.getElementById("simien-page-content");
const btnPrevious = document.getElementById("simien-btn-previous-slide");
const btnNext = document.getElementById("simien-btn-next-slide");

pageContent.addEventListener("wheel", (e) => {
    if (e.deltaY > 100) {
        NextSlide()
    }

    if (e.deltaY < -100) {
        PreviousSlide()
    }
});

btnPrevious?.addEventListener("click", () => PreviousSlide())
btnNext?.addEventListener("click", () => NextSlide())

document.addEventListener("keydown", (e) => {
    switch(e.key){
        case "ArrowDown":
            NextSlide();
            break;
        case "ArrowUp": 
            PreviousSlide();
            break;
        default:
            break;
    }
})

function PreviousSlide() {
    if (isScrolling || currentSection === 1)
        return;
    isScrolling = true;
    currentSection--;

    pageContent.classList.remove(`section-${currentSection + 1}`);
    pageContent.classList.add(`section-${currentSection}`);
    const oldFocus = document.querySelector(`.simien-page-content>section:nth-of-type(${currentSection + 1})`);
    const newFocus = document.querySelector(`.simien-page-content>section:nth-of-type(${currentSection})`);

    oldFocus.classList.remove("in-focus");
    oldFocus.classList.add("upcoming");
    newFocus.classList.remove("passed");
    newFocus.classList.add("in-focus");

    setTimeout(() => {
        isScrolling = false;
    }, 500);
}

function NextSlide() {
    if (isScrolling || currentSection === (pageContent.children.length - 2))
        return;
    isScrolling = true;
    currentSection++;

    pageContent.classList.remove(`section-${currentSection - 1}`);
    pageContent.classList.add(`section-${currentSection}`);
    const oldFocus = document.querySelector(`.simien-page-content>section:nth-of-type(${currentSection - 1})`);
    const newFocus = document.querySelector(`.simien-page-content>section:nth-of-type(${currentSection})`);

    oldFocus.classList.remove("in-focus");
    oldFocus.classList.add("passed");
    newFocus.classList.remove("upcoming");
    newFocus.classList.add("in-focus");

    setTimeout(() => {
        isScrolling = false;
    }, 500);
}