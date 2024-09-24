export default function initSmoothScroll() {
   const linksInternos = document.querySelectorAll("a[href^='#']");

   function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
         behavior: "smooth",
         block:
            window.innerWidth < 800 || section.id === "projetos"
               ? "start"
               : "center",
      });
   }

   linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
   });
}
