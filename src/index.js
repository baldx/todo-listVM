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


const priorityBtn = document.querySelectorAll(".priority");

priorityBtn.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "High") {
            e.classList.remove("High");
            e.classList.add("Low");
            e.innerHTML = "Low";
        }
        else if (e.innerHTML == "Low") {
            e.classList.remove("Low");
            e.classList.add("Medium");
            e.innerHTML = "Medium";
        }
        else if ( e.innerHTML == "Medium") {
            e.classList.remove("Medium")
            e.classList.add("High");
            e.innerHTML = "High"
        }
    })
});

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