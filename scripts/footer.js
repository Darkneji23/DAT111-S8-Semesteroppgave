AddFooterToDOM();

function AddFooterToDOM() {
  let pathToRoot = document.getElementById("path-to-root")?.innerText ?? "./";

  const footerLinkLists = [
    {
      title: "BIB",
      links: [
        { href: "pages/om-bib.html", text: "Om oss" },
        { href: "pages/kontakt-oss.html", text: "Kontakt oss" },
      ],
    },
    {
      title: "Tjenester",
      links: [
        { href: "pages/oppussing.html", text: "Oppussing" },
        { href: "pages/utvendig.html", text: "Utvendig" },
        { href: "pages/konsultasjon.html", text: "Konsultasjon" },
      ],
    },
    {
      title: "lovlig",
      links: [
        { url: "", text: "Personversnerklering" },
        { url: "", text: "Informasjonskapsler" },
      ],
    },
  ];

  let body = document.querySelector("body");
  let footer = document.createElement("footer");
  let nav = document.createElement("nav");

  footerLinkLists.forEach((footerLinkList) => {
    const div = document.createElement("div");
    div.className = "footer-link-list";
    const h2 = document.createElement("h2");
    h2.innerText = footerLinkList.title;
    div.appendChild(h2);

    const ul = document.createElement("ul");
    footerLinkList.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = pathToRoot + link.url;
      a.innerText = link.text;
      li.appendChild(a);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    nav.appendChild(div);
  });

  footer.appendChild(nav);
  body.appendChild(footer);
}
