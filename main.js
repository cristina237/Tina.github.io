(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelectorAll(".nav-link");
  const panels = document.querySelectorAll(".panel");

  function showSection(id) {
    panels.forEach((panel) => {
      const match = panel.id === id;
      panel.hidden = !match;
      panel.classList.toggle("is-visible", match);
    });

    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });

    if (nav && toggle) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    history.replaceState(null, "", `#${id}`);
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const initial = location.hash.replace("#", "") || "about";
  const valid = ["about", "cv", "portfolio", "art"];
  showSection(valid.includes(initial) ? initial : "about");
})();
