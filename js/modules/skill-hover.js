export default function initSkillHover() {
   const desc = document.querySelector(".skill-info");
   const initialText = desc.innerText;
   const skillList = document.querySelectorAll(".skill");
   let timerId;

   if (window.innerWidth <= 800) desc.innerText = desc.dataset.mobile;

   skillList.forEach((skill) => {
      skill.addEventListener("mouseover", () => {
         clearTimeout(timerId);
         desc.innerText = skill.dataset.description;
      });
      skill.addEventListener("mouseout", () => {
         timerId = setTimeout(() => {
            desc.innerText = initialText;
            if (window.innerWidth <= 960) desc.innerText = desc.dataset.mobile;
         }, 300);
      });
   });
}
