AddFooterToDOM();

function AddFooterToDOM() {

    let pathToRoot = document.getElementById("path-to-root")?.innerText ?? "./";

    const footerLinkLists = [
        {
            title: "BIB",
            links: [
                { text: "Om Oss", url: "pages/om-bib.html" },
                { text: "Kontakt Oss", url: "pages/kontakt-oss.html" }
            ]
        },
        {
            title: "Tjenester",
            links: [
                { text: "Utvendig", url: "pages/utvendig.html" },
                { text: "Oppussing", url: "pages/oppussing.html" }
            ]
        },
        {
            title: "lovlig",
            links: [
                {text: "Personversnerklering", url: ""},
                {text: "Informasjonskapsler", url: ""}
            ]
        }
    ]

    let body = document.querySelector("body");
    let footer = document.createElement("footer");
    let nav = document.createElement("nav");

    footerLinkLists.forEach(footerLinkList => {
        const div = document.createElement("div");
        div.className = "footer-link-list"
        const h2 = document.createElement("h2");
        h2.innerText = footerLinkList.title;
        div.appendChild(h2);

        const ul = document.createElement("ul");
        footerLinkList.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = pathToRoot + link.url;
            a.innerText = link.text;
            li.appendChild(a);
            ul.appendChild(li);
        })
        div.appendChild(ul);
        nav.appendChild(div);
    });

    footer.appendChild(nav)
    body.appendChild(footer);

}