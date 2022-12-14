export default function initSkillHover() {
   const desc = document.querySelector(".skill-info");
   const skillList = document.querySelectorAll(".skill");

   if (window.matchMedia("(max-width: 960px)").matches) {
      desc.innerText = "Toque em um dos cards para ler :)";
   }

   skillList.forEach((skill) => {
      skill.addEventListener("mouseover", () => {
         desc.innerText = skill.dataset.description;
      });
      skill.addEventListener("mouseout", () => {
         desc.innerText = "Coloque o cursor sobre um dos cards para ler :)";
         if (window.matchMedia("(max-width: 960px)").matches) {
            desc.innerText = "Toque em um dos cards para ler :)";
         }
      });
   });
}
