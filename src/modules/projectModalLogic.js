const projectLibrary = JSON.parse(localStorage.getItem("projects")) || [];


const project = (title) => {
    projectLibrary.push({
        title
    });

    localStorage.setItem("projects", JSON.stringify(projectLibrary));

    return { title }
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
    let newProject = project(titleInput.value)
    addToList(newProject)
    console.log(projectLibrary);
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


function addToList({title}) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    
    ul.appendChild(li);
    li.appendChild(btn)

    btn.innerHTML = title;

    li.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-project")
    deleteBtn.innerHTML = "🗑️"
    deleteBtn.style.margin = "8px"

    deleteBtn.addEventListener("click", () => {
        projectLibrary.pop()
        deleteBtn.parentElement.remove()
        localStorage.removeItem("delete")
    })

    btn.addEventListener("click", () => {
        console.log("project");
    })
}

projectLibrary.forEach(addToList)



export default logic();