import projectModal from "./modules/projectModal";
import taskModal from "./modules/taskModal";
import logic from "./modules/projectModalLogic"
import taskLogic from "./modules/taskModalLogic"

const addProjectBtn = document.querySelector(".addProject");
const addTaskBtn = document.querySelector(".addTask");


addProjectBtn.addEventListener("click", () => {
    document.querySelector(".popUpProject").style.display = "block"
})

addTaskBtn.addEventListener("click", () => {
    document.querySelector(".popUpTask").style.display = "block";
})


const priorityBtn = document.querySelector(".priority");
priorityBtn.innerHTML = localStorage.getItem("priority");

priorityBtn.addEventListener("click", () => {
    if (priorityBtn.innerHTML == "High") {
        priorityBtn.classList.remove("High");
        priorityBtn.classList.add("Low");
        priorityBtn.innerHTML = "Low";
    }
    else if (priorityBtn.innerHTML == "Low") {
        priorityBtn.classList.remove("Low");
        priorityBtn.classList.add("Medium");
        priorityBtn.innerHTML = "Medium";
    }
    else if (priorityBtn.innerHTML == "Medium") {
        priorityBtn.classList.remove("Medium");
        priorityBtn.classList.add("High");
        priorityBtn.innerHTML = "High";
    }

    localStorage.setItem("priority", priorityBtn.innerHTML)
})

const status = document.querySelector(".check");

window.onload = () => {
   if (status.innerHTML == "Done") {
    status.classList.add("Done");
    status.innerHTML = "Done";
    } 
    else if (status.innerHTML == "Undone") {
        status.classList.add("UnDone")
        status.innerHTML = "Undone"
    }
}



status.innerHTML = localStorage.getItem("status");

if (status.innerHTML == "") status.innerHTML = "Undone"


status.addEventListener("click", () => {
    if (status.innerHTML == "Undone") {
        status.classList.remove("UnDone");
        status.classList.add("Done");
        status.innerHTML = "Done";
    }
    else if (status.innerHTML == "Done") {
        status.classList.remove("Done");
        status.classList.add("UnDone");
        status.innerHTML = "Undone";
    }

    localStorage.setItem("status", status.innerHTML);
})