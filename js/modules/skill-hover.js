export default function initSkillHover() {
   const desc = document.querySelector(".skill-info");
   const skillList = document.querySelectorAll(".skill");
   if (window.matchMedia("(max-width: 960px)").matches) {
      desc.innerText = "Toque em um dos cards para ler :)";
   }

   skillList[0].addEventListener("mouseover", () => {
      desc.innerText = "HTML (HyperText Markup Language) é uma linguagem de marcação utilizada na construção de páginas na Web.";
   });

   skillList[1].addEventListener("mouseover", () => {
      desc.innerText = "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a uma página na Web.";
   });

   skillList[2].addEventListener("mouseover", () => {
      desc.innerText = "JavaScript é a linguagem de programação compilada interpretada mais popular do mundo. Junto com HTML e CSS, é uma das três principais tecnologias da Web.";
   });

   skillList[3].addEventListener("mouseover", () => {
      desc.innerText = "TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.";
   });

   skillList[4].addEventListener("mouseover", () => {
      desc.innerText = "React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
   });

   skillList[5].addEventListener("mouseover", () => {
      desc.innerText = "WordPress é um Content Management System (Sistema de Gerenciamento de Conteúdo) baseado em PHP e MySql usado para criar sites dinâmicos.";
   });

   skillList.forEach((skill) => {
      skill.addEventListener("mouseout", () => {
         desc.innerText = "Coloque o cursor sobre um dos cards para ler :)"
         if (window.matchMedia("(max-width: 960px)").matches) {
            desc.innerText = "Toque em um dos cards para ler :)";
         }
      })
   })
}