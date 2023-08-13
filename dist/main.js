/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/projectModal.js":
/*!*************************************!*\
  !*** ./src/modules/projectModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectModal = (() => {
    const container = document.querySelector(".popUpProject");

    container.innerHTML = 
    `
    <form id="project" name="project">
    <label for="titleProject">Title:</label>
    <input type="text" name="titleProject" id="titleProject" required maxlength="20" value="">
    <button type="submit" class="submitProject">Add project</button>
    </form>
    `
    
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal());

/***/ }),

/***/ "./src/modules/projectModalLogic.js":
/*!******************************************!*\
  !*** ./src/modules/projectModalLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logic());

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taskModal() {
    const container = document.querySelector(".popUpTask");

    container.innerHTML = `
    <form id="modal">
        <label for="task">Task:</label>
        <input type="text" name="task" id="task" maxlength="20" minlength="3" value="" required>

        <label for="description">Description:</label>
        <input type="text" name="description" id="description" maxlength="30" value="">

        <label for="due">Due date:</label>
        <input type="date" name="due" id="due" value="" required>

        <fieldset class="priority-group">
            <legend>Priority:</legend>
            <input type="radio" name="priority" id="high" value="high" required>
            <label for="priority">High</label>
            <input type="radio" name="priority" id="medium" value="medium" required>
            <label for="priority">Medium</label>
            <input type="radio" name="priority" id="low" value="low" required>
            <label for="priority">Low</label>
        </fieldset>
    
        <button type="submit" class="submit">Add Project</button>
    
    </form>`
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal());

/***/ }),

/***/ "./src/modules/taskModalLogic.js":
/*!***************************************!*\
  !*** ./src/modules/taskModalLogic.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const removeBtn = document.querySelector(".delete-task");


removeBtn.addEventListener("click", () => {
        removeBtn.parentElement.remove()
        taskLibrary.pop()
    })

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

    status.addEventListener("click", () => {
        if (status.innerHTML == "Undone") {
            status.classList.remove("UnDone");
            status.classList.add("Done");
            status.innerHTML = "Done";
        }
        else if (status.innerHTML == "Done") {
            status.classList.remove("Done");
            status.classList.add("UnDone");
            status.innerHTML = "Undone"; /*write localStorage*/
        }
    })
}

taskLibrary.forEach(showTask)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskLogic());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_projectModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectModal */ "./src/modules/projectModal.js");
/* harmony import */ var _modules_taskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskModal */ "./src/modules/taskModal.js");
/* harmony import */ var _modules_projectModalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectModalLogic */ "./src/modules/projectModalLogic.js");
/* harmony import */ var _modules_taskModalLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskModalLogic */ "./src/modules/taskModalLogic.js");





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

if (priorityBtn.innerHTML == "") priorityBtn.innerHTML = "High";


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

    if (priorityBtn.innerHTML == "High") priorityBtn.classList.add("High") 
    else if (priorityBtn.innerHTML == "Medium") priorityBtn.classList.add("Medium")
    else if (priorityBtn.innerHTML == "Low") priorityBtn.classList.add("Low")
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgIGBcbiAgICA8Zm9ybSBpZD1cInByb2plY3RcIiBuYW1lPVwicHJvamVjdFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVByb2plY3RcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVByb2plY3RcIiBpZD1cInRpdGxlUHJvamVjdFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjIwXCIgdmFsdWU9XCJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFByb2plY3RcIj5BZGQgcHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kYWwoKTsiLCJjb25zdCBwcm9qZWN0TGlicmFyeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIHByb2plY3RMaWJyYXJ5LnB1c2goe1xuICAgICAgICB0aXRsZVxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlicmFyeSkpO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUgfVxufVxuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFByb2plY3RcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlUHJvamVjdFwiKTtcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3RcIik7XG5cbmxldCBsb2dpYyA9ICgpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocnVsZXMoKSkge1xuICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlicmFyeSgpO1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBhIFRpdGxlIVwiKVxuICAgICAgICB9XG4gICAgXG4gfSlcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlicmFyeSgpIHtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKVxuICAgIGFkZFRvTGlzdChuZXdQcm9qZWN0KVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaWJyYXJ5KTtcbiAgICByZXNldEZvcm0oKVxufVxuXG5cbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZUJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgcHJvamVjdExpYnJhcnkucG9wKClcbn0pXG5cbmZ1bmN0aW9uIHJ1bGVzKCkge1xuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgICBlbHNlIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCJcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0xpc3Qoe3RpdGxlfSkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxuXG4gICAgYnRuLmlubmVySFRNTCA9IHRpdGxlO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwi8J+Xke+4j1wiXG4gICAgZGVsZXRlQnRuLnN0eWxlLm1hcmdpbiA9IFwiOHB4XCJcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlicmFyeS5wb3AoKVxuICAgICAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRlbGV0ZVwiKVxuICAgIH0pXG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0XCIpO1xuICAgIH0pXG59XG5cbnByb2plY3RMaWJyYXJ5LmZvckVhY2goYWRkVG9MaXN0KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbG9naWMoKTsiLCJmdW5jdGlvbiB0YXNrTW9kYWwoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGlkPVwibW9kYWxcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tcIj5UYXNrOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgaWQ9XCJ0YXNrXCIgbWF4bGVuZ3RoPVwiMjBcIiBtaW5sZW5ndGg9XCIzXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgbWF4bGVuZ3RoPVwiMzBcIiB2YWx1ZT1cIlwiPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlXCIgaWQ9XCJkdWVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxuXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInByaW9yaXR5LWdyb3VwXCI+XG4gICAgICAgICAgICA8bGVnZW5kPlByaW9yaXR5OjwvbGVnZW5kPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiaGlnaFwiIHZhbHVlPVwiaGlnaFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SGlnaDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+TWVkaXVtPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Mb3c8L2xhYmVsPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgIFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgXG4gICAgPC9mb3JtPmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza01vZGFsKCk7IiwiY29uc3QgdGFza0xpYnJhcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuXG5jb25zdCB0YXNrID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgdGFza0xpYnJhcnkucHVzaCh7XG4gICAgICAgIHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH0pXG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaWJyYXJ5KSk7XG5cbiAgICByZXR1cm4ge3Rhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XG5cblxubGV0IHRhc2tMb2dpYyA9ICgpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocnVsZXMoKSkge1xuICAgICAgICAgICAgYWRkVGFza1RvTGlicmFyeSgpO1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoXCJXZSB3b3VsZCBsaWtlIGFuIGlucHV0IEQ6XCIpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KCkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBnZXRQcmlvcml0eVZhbHVlKCkpO1xuICAgIHNob3dUYXNrKG5ld1Rhc2spXG4gICAgcmVzZXRGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5VmFsdWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJoaWdoXCIpIHJldHVybiBcIkhpZ2hcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibWVkaXVtXCIpIHJldHVybiBcIk1lZGl1bVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJsb3dcIikgcmV0dXJuIFwiTG93XCI7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7IFxufVxuXG5mdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAodGFza0lucHV0LnZhbHVlID09IFwiXCIgfHwgZHVlRGF0ZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZ2V0UHJpb3JpdHlWYWx1ZSgpID09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtdGFza1wiKTtcblxuXG5yZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgdGFza0xpYnJhcnkucG9wKClcbiAgICB9KVxuXG5mdW5jdGlvbiBzaG93VGFzayh7dGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fSkge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJ0blByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuUHJpb3JpdHkpO1xuICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KVxuICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IHByaW9yaXR5O1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gdGFzaztcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICBkZXNjcmlwdGlvbkRpdi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICAgIGR1ZURhdGVEaXYuaW5uZXJIVE1MID0gZHVlRGF0ZTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJVbkRvbmVcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJVbmRvbmVcIlxuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG4gICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiRGVsZXRlXCJcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpOyAvKndyaXRlIGxvY2FsU3RvcmFnZSovXG4gICAgfSlcblxuICAgIGJ0blByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChidG5Qcmlvcml0eS5pbm5lckhUTUwgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJIaWdoXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIkxvd1wiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiTWVkaXVtXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChidG5Qcmlvcml0eS5pbm5lckhUTUwgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcIk1lZGl1bVwiKVxuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIkhpZ2hcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBcIkhpZ2hcIiAvKndyaXRlIGxvY2FsU3RvcmFnZSovXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiVW5kb25lXCIpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiVW5Eb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJEb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJEb25lXCIpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiRG9uZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCI7IC8qd3JpdGUgbG9jYWxTdG9yYWdlKi9cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbnRhc2tMaWJyYXJ5LmZvckVhY2goc2hvd1Rhc2spXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2dpYygpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbFwiO1xuaW1wb3J0IHRhc2tNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbFwiO1xuaW1wb3J0IGxvZ2ljIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWNcIlxuaW1wb3J0IHRhc2tMb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljXCJcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XG5cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbn0pXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG5wcmlvcml0eUJ0bi5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW9yaXR5XCIpO1xuXG5pZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiXCIpIHByaW9yaXR5QnRuLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuXG5cbnByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByaW9yaXR5QnRuLmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xuICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIkxvd1wiKTtcbiAgICAgICAgcHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiTG93XCIpIHtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcIkxvd1wiKTtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIk1lZGl1bVwiKTtcbiAgICAgICAgcHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcIk1lZGl1bVwiKTtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIkhpZ2hcIik7XG4gICAgICAgIHByaW9yaXR5QnRuLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJpb3JpdHlcIiwgcHJpb3JpdHlCdG4uaW5uZXJIVE1MKVxufSlcblxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja1wiKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiRG9uZVwiKSB7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJEb25lXCIpO1xuICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIkRvbmVcIjtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJVbmRvbmVcIikge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIlVuRG9uZVwiKVxuICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJVbmRvbmVcIlxuICAgIH1cblxuICAgIGlmIChwcmlvcml0eUJ0bi5pbm5lckhUTUwgPT0gXCJIaWdoXCIpIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoXCJIaWdoXCIpIFxuICAgIGVsc2UgaWYgKHByaW9yaXR5QnRuLmlubmVySFRNTCA9PSBcIk1lZGl1bVwiKSBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwiTWVkaXVtXCIpXG4gICAgZWxzZSBpZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiTG93XCIpIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoXCJMb3dcIilcbn1cblxuXG5cbnN0YXR1cy5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0YXR1c1wiKTtcblxuaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJcIikgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCJcblxuXG5zdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc3RhdHVzLmlubmVySFRNTCA9PSBcIlVuZG9uZVwiKSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiVW5Eb25lXCIpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIkRvbmVcIik7XG4gICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIkRvbmVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdHVzLmlubmVySFRNTCA9PSBcIkRvbmVcIikge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcIkRvbmVcIik7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpO1xuICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJVbmRvbmVcIjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c1wiLCBzdGF0dXMuaW5uZXJIVE1MKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9