const taskLibrary = JSON.parse(localStorage.getItem("tasks")) || [];

const task = (task, description, dueDate, priority) => {

    taskLibrary.push({
        task,
        description,
        dueDate,
        priority
    })

    localStorage.setItem("tasks", JSON.stringify(taskLibrary));

    return {task, description, dueDate, priority}
}

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");
const taskContainer = document.querySelector("#tasks");


const container = document.querySelector(".popUpTask");
const submitBtn = document.querySelector(".submit");


let taskLogic = () => {
    submitBtn.addEventListener("click", element => {
        if (rules()) {
            addTaskToLibrary();
            element.preventDefault();
        }
        else {
            element.preventDefault();
            alert("We would like an input D:")
        }
    })
}

function addTaskToLibrary() {
    container.style.display = "none";
    let newTask = task(taskInput.value, descriptionInput.value, dueDateInput.value, getPriorityValue());
    showTask(newTask)
    resetForm();
}

function resetForm() {
    taskInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    document.querySelector("input[name='priority']:checked").checked = false;
}

function getPriorityValue() {
    if (document.querySelector("input[name='priority']:checked").value == "high") return "High";
    else if (document.querySelector("input[name='priority']:checked").value == "medium") return "Medium";
    else if (document.querySelector("input[name='priority']:checked").value == "low") return "Low";
    else return false; 
}

function rules() {
    if (taskInput.value == "" || dueDateInput.value == "" || getPriorityValue() == false) return false;
    else return true;
}

function showTask({task, description, dueDate, priority}) {
    const taskDiv = document.createElement("div");
    const btnPriority = document.createElement("button");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const dueDateDiv = document.createElement("div");
    const remove = document.createElement("button");
    const status = document.createElement("button");

    taskContainer.appendChild(taskDiv);
    taskDiv.classList.add("task");

    taskDiv.appendChild(btnPriority);
    btnPriority.classList.add("priority");
    btnPriority.classList.add(priority)
    btnPriority.innerHTML = priority;

    taskDiv.appendChild(titleDiv);
    titleDiv.innerHTML = task;
    titleDiv.classList.add("title");

    taskDiv.appendChild(descriptionDiv);
    descriptionDiv.innerHTML = description;
    descriptionDiv.classList.add("description");

    taskDiv.appendChild(dueDateDiv);
    dueDateDiv.innerHTML = dueDate;
    dueDateDiv.classList.add("due");

    taskDiv.appendChild(status);
    status.classList.add("UnDone");
    status.classList.add("check");
    status.innerHTML = "Undone"

    taskDiv.appendChild(remove);
    remove.classList.add("delete-task");
    remove.innerHTML = "Delete"

    remove.addEventListener("click", () => {
        remove.parentElement.remove();
        console.log(taskLibrary); /*write localStorage*/
    })

    btnPriority.addEventListener("click", () => {
        if (btnPriority.innerHTML == "High") {
            btnPriority.classList.remove("High");
            btnPriority.classList.add("Low");
            btnPriority.innerHTML = "Low";
        }
        else if (btnPriority.innerHTML == "Low") {
            btnPriority.classList.remove("Low");
            btnPriority.classList.add("Medium");
            btnPriority.innerHTML = "Medium";
        }
        else if (btnPriority.innerHTML == "Medium") {
            btnPriority.classList.remove("Medium")
            btnPriority.classList.add("High");
            btnPriority.innerHTML = "High" /*write localStorage*/
        }
    })


    if (status.innerHTML == "") status.innerHTML = "Undone"
    else if (status.innerHTML == "Done") status.parentElement.remove()

    const statusButtons = document.querySelectorAll(".check")

    statusButtons.forEach(e => {
        e.addEventListener("click", () => {
            if (e.innerHTML == "Undone") {
                e.parentElement.remove();
                e.innerHTML = "Done"
                taskLibrary.pop()
                console.log(taskLibrary);
            }
        })
    })

    // status.addEventListener("click", () => {
    //     if (status.innerHTML == "Undone") {
    //         status.parentElement.remove();
    //         status.innerHTML = "Done";
    //     }

    //     localStorage.setItem("status", "Undone")
    // })
}

taskLibrary.forEach(showTask)

export default taskLogic();
