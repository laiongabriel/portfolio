export default function initMobileMenu() {
   const btnMobile = document.getElementById("btn-mobile");
   const linksInternos = document.querySelectorAll("a[href^='#']");
   const nav = document.querySelector("nav");

   btnMobile.addEventListener("click", () => {
      nav.classList.toggle("ativo");
   });

   linksInternos.forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("ativo"));
   });
}
