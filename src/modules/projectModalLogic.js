let projectLibrary = [
    {
        title: "Construction of a robot"
    }
]

class project {
    constructor(title) {
        this.title = title
    }
}

const submitBtn = document.querySelector(".submitProject");
const container = document.querySelector(".popUpProject");
const titleInput = document.querySelector("#titleProject");
const deleteBtn = document.querySelector(".delete-project");

let logic = () => {
    submitBtn.addEventListener("click", element => {
        if (rules()) {
            addProjectToLibrary();
            element.preventDefault();
        }
        else {
            element.preventDefault();
            alert("Enter a Title!")
        }
    
 })
}

function addProjectToLibrary() {
    container.style.display = "none";
    let newProject = new project(titleInput.value)
    projectLibrary.push(newProject);
    addToList()
    resetForm()
}

deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove()
    projectLibrary.pop()
})

function rules() {
    if (titleInput.value == "") return false;
    else return true;
}

function resetForm() {
    titleInput.value = ""
}

function addToList(array) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    
    ul.appendChild(li);
    li.appendChild(btn)
    btn.innerHTML = titleInput.value
    li.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-project")
    deleteBtn.innerHTML = "🗑️"
    deleteBtn.style.margin = "8px"

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
        projectLibrary.splice(projectLibrary.indexOf(array), 1)
    })

    btn.addEventListener("click", () => {
        console.log(task);
    })
}



export default logic();