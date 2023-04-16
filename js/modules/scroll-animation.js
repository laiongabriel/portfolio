export default function initScrollAnimation() {
   const sections = document.querySelectorAll(".js-scroll");
   const halfWindowHeight = window.innerHeight * 0.6;
   const contactSectionHeight = window.innerHeight * 0.9;

   if (sections.length) {
      animateSections();
      window.addEventListener("scroll", () =>
         requestAnimationFrame(animateSections)
      );
   }

   function animateSections() {
      const distance = [...sections].map((section) => {
         const offset = section.offsetTop;
         return {
            element: section,
            offset:
               Math.floor(offset) -
               (section.id === "contato"
                  ? contactSectionHeight
                  : halfWindowHeight),
         };
      });

      distance.forEach((item) => {
         if (window.scrollY > item.offset) item.element.classList.add("ativo");
      });
   }
}
