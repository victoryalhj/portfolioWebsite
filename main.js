const projects = document.querySelectorAll(".project");
const modal = document.getElementById("projectModal");
const closeBtn = modal.querySelector(".close");
const modalTitle = document.getElementById("modal-title");
const modalTech = document.getElementById("modal-tech");
const modalDescription = document.getElementById("modal-description");

const visitBtn = document.getElementById("visit-btn");

let currentLink = "";

projects.forEach(project => {
  project.addEventListener("click", ()=>{
    const title = project.dataset.title;
    const tech = project.dataset.tech;
    const link = project.dataset.link;
    const description = project.dataset.description;

    modalTitle.textContent = title;
    modalTech.textContent = tech;
    modalDescription.textContent = description;
    currentLink = link;

    modal.style.display = "flex"
  })
})

closeBtn.addEventListener("click", ()=>{
  modal.style.display = "none";
})

visitBtn.addEventListener("click",()=>{
  if(currentLink) {
    window.open(currentLink, "_blank");
  }else{
    alert("No site link available for this project.");
  }
})

window.addEventListener("click",(e)=>{
  if(e.target === modal) {
    modal.style.display = "none";
  }
})