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


// const priorityBtn = document.querySelector(".priority");
// priorityBtn.innerHTML = localStorage.getItem("priority");

// if (priorityBtn.innerHTML == "") priorityBtn.innerHTML = "High";


// priorityBtn.addEventListener("click", () => {
//     if (priorityBtn.innerHTML == "High") {
//         priorityBtn.classList.remove("High");
//         priorityBtn.classList.add("Low");
//         priorityBtn.innerHTML = "Low";
//     }
//     else if (priorityBtn.innerHTML == "Low") {
//         priorityBtn.classList.remove("Low");
//         priorityBtn.classList.add("Medium");
//         priorityBtn.innerHTML = "Medium";
//     }
//     else if (priorityBtn.innerHTML == "Medium") {
//         priorityBtn.classList.remove("Medium");
//         priorityBtn.classList.add("High");
//         priorityBtn.innerHTML = "High";
//     }

//     localStorage.setItem("priority", priorityBtn.innerHTML)
// })

// const status = document.querySelector(".check");

// window.onload = () => {
//    if (status.innerHTML == "Done") {
//     status.classList.add("Done");
//     status.innerHTML = "Done";
//     } 
//     else if (status.innerHTML == "Undone") {
//         status.classList.add("UnDone")
//         status.innerHTML = "Undone"
//     }

//     if (priorityBtn.innerHTML == "High") priorityBtn.classList.add("High") 
//     else if (priorityBtn.innerHTML == "Medium") priorityBtn.classList.add("Medium")
//     else if (priorityBtn.innerHTML == "Low") priorityBtn.classList.add("Low")
// }



