export default function initSmoothScroll() {
   const linksInternos = document.querySelectorAll("a[href^='#']");

   function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });

      if (window.innerWidth < 800) {
         section.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
   }

   linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
   });
}