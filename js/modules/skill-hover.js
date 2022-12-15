export default function initSkillHover() {
   const desc = document.querySelector(".skill-info");
   const initialText = desc.innerText;
   const skillList = document.querySelectorAll(".skill");

   if (window.innerWidth <= 960) {
      desc.innerText = desc.dataset.mobile;
   }

   skillList.forEach((skill) => {
      skill.addEventListener("mouseover", () => {
         desc.innerText = skill.dataset.description;
      });
      skill.addEventListener("mouseout", () => {
         desc.innerText = initialText;
         if (window.innerWidth <= 960) {
            desc.innerText = desc.dataset.mobile;
         }
      });
   });
}
