export default function initScrollAnimation() {
   const sections = document.querySelectorAll(".js-scroll");
   const halfWindowHeight = window.innerHeight * 0.6;

   if (sections.length) {
      function animateSections() {
         sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - halfWindowHeight < 0;
            if (isSectionVisible) section.classList.add("ativo");
            // else if (section.classList.contains("ativo"))
            //    section.classList.remove("ativo");
         });
         requestAnimationFrame(animateSections);
      }
      animateSections();
   }
}
