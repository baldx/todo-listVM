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
class task {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let taskLibrary = [
    {
        task: "Task",
        description: "Some interesting stuff",
        dueDate: "06/04/23",
        priority: "High"
    }
]

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");

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
    let newTask = new task(taskInput.value, descriptionInput.value, dueDateInput.value, getPriorityValue());
    taskLibrary.push(newTask);
    showTask();
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

const removeBtn = document.querySelectorAll(".delete-task");

removeBtn.forEach(e => {
    e.addEventListener("click", () => {
        e.parentElement.remove()
        taskLibrary.pop()
        console.log(taskLibrary);
    })
})


function showTask(array) {
    const container = document.querySelector("#tasks");
    const task = document.createElement("div");
    const btnPriority = document.createElement("button");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const dueDateDiv = document.createElement("div");
    const remove = document.createElement("button");
    const status = document.createElement("button");

    container.appendChild(task);
    task.classList.add("task");

    task.appendChild(btnPriority);
    btnPriority.classList.add("priority");
    btnPriority.classList.add(getPriorityValue())
    btnPriority.innerHTML = getPriorityValue();

    task.appendChild(titleDiv);
    titleDiv.innerHTML = taskInput.value;
    titleDiv.classList.add("title");

    task.appendChild(descriptionDiv);
    descriptionDiv.innerHTML = descriptionInput.value;
    descriptionDiv.classList.add("description");

    task.appendChild(dueDateDiv);
    dueDateDiv.innerHTML = dueDateInput.value;
    dueDateDiv.classList.add("due");

    task.appendChild(status);
    status.classList.add("UnDone");
    status.classList.add("check");
    status.innerHTML = "Undone"

    task.appendChild(remove);
    remove.classList.add("delete-task");
    remove.innerHTML = "Delete"

    remove.addEventListener("click", () => {
        remove.parentElement.remove();
        taskLibrary.splice(taskLibrary.indexOf(array), 1)
        console.log(taskLibrary);
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
            btnPriority.innerHTML = "High"
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
            status.innerHTML = "Undone";
        }
})
}

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
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgIGBcbiAgICA8Zm9ybSBpZD1cInByb2plY3RcIiBuYW1lPVwicHJvamVjdFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVByb2plY3RcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVByb2plY3RcIiBpZD1cInRpdGxlUHJvamVjdFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjIwXCIgdmFsdWU9XCJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFByb2plY3RcIj5BZGQgcHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kYWwoKTsiLCJsZXQgcHJvamVjdExpYnJhcnkgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb25zdHJ1Y3Rpb24gb2YgYSByb2JvdFwiXG4gICAgfVxuXVxuXG5jbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG59XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVQcm9qZWN0XCIpO1xuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdFwiKTtcblxubGV0IGxvZ2ljID0gKCkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChydWxlcygpKSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9MaWJyYXJ5KCk7XG4gICAgICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgVGl0bGUhXCIpXG4gICAgICAgIH1cbiAgICBcbiB9KVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9MaWJyYXJ5KCkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKVxuICAgIHByb2plY3RMaWJyYXJ5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgYWRkVG9MaXN0KClcbiAgICByZXNldEZvcm0oKVxufVxuXG5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIHByb2plY3RMaWJyYXJ5LnBvcCgpXG59KVxuXG5mdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiXG59XG5cbmZ1bmN0aW9uIGFkZFRvTGlzdChhcnJheSkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIGJ0bi5pbm5lckhUTUwgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpXG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwi8J+Xke+4j1wiXG4gICAgZGVsZXRlQnRuLnN0eWxlLm1hcmdpbiA9IFwiOHB4XCJcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWxldGVCdG4ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgcHJvamVjdExpYnJhcnkuc3BsaWNlKHByb2plY3RMaWJyYXJ5LmluZGV4T2YoYXJyYXkpLCAxKVxuICAgIH0pXG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljKCk7IiwiZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybSBpZD1cIm1vZGFsXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrXCI+VGFzazo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1wiIGlkPVwidGFza1wiIG1heGxlbmd0aD1cIjIwXCIgbWlubGVuZ3RoPVwiM1wiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjMwXCIgdmFsdWU9XCJcIj5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlXCI+RHVlIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZVwiIGlkPVwiZHVlXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cblxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwcmlvcml0eS1ncm91cFwiPlxuICAgICAgICAgICAgPGxlZ2VuZD5Qcmlvcml0eTo8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkhpZ2g8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPk1lZGl1bTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+TG93PC9sYWJlbD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIj5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgIFxuICAgIDwvZm9ybT5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2RhbCgpOyIsImNsYXNzIHRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmxldCB0YXNrTGlicmFyeSA9IFtcbiAgICB7XG4gICAgICAgIHRhc2s6IFwiVGFza1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGludGVyZXN0aW5nIHN0dWZmXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMDYvMDQvMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiXG4gICAgfVxuXVxuXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuXG5sZXQgdGFza0xvZ2ljID0gKCkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudCA9PiB7XG5cbiAgICAgICAgaWYgKHJ1bGVzKCkpIHtcbiAgICAgICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoKTtcbiAgICAgICAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiV2Ugd291bGQgbGlrZSBhbiBpbnB1dCBEOlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvTGlicmFyeSgpIHtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGdldFByaW9yaXR5VmFsdWUoKSk7XG4gICAgdGFza0xpYnJhcnkucHVzaChuZXdUYXNrKTtcbiAgICBzaG93VGFzaygpO1xuICAgIHJlc2V0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikuY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcmlvcml0eVZhbHVlKCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwiaGlnaFwiKSByZXR1cm4gXCJIaWdoXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcIm1lZGl1bVwiKSByZXR1cm4gXCJNZWRpdW1cIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibG93XCIpIHJldHVybiBcIkxvd1wiO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAodGFza0lucHV0LnZhbHVlID09IFwiXCIgfHwgZHVlRGF0ZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZ2V0UHJpb3JpdHlWYWx1ZSgpID09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcblxucmVtb3ZlQnRuLmZvckVhY2goZSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgdGFza0xpYnJhcnkucG9wKClcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xuICAgIH0pXG59KVxuXG5cbmZ1bmN0aW9uIHNob3dUYXNrKGFycmF5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidG5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQoYnRuUHJpb3JpdHkpO1xuICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKGdldFByaW9yaXR5VmFsdWUoKSlcbiAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBnZXRQcmlvcml0eVZhbHVlKCk7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgZGVzY3JpcHRpb25EaXYuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICAgIGR1ZURhdGVEaXYuaW5uZXJIVE1MID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIlVuRG9uZVwiKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcImNoZWNrXCIpO1xuICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIlVuZG9uZVwiXG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKTtcbiAgICByZW1vdmUuaW5uZXJIVE1MID0gXCJEZWxldGVcIlxuXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB0YXNrTGlicmFyeS5zcGxpY2UodGFza0xpYnJhcnkuaW5kZXhPZihhcnJheSksIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaWJyYXJ5KTtcbiAgICB9KVxuXG4gICAgYnRuUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGJ0blByaW9yaXR5LmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcIkhpZ2hcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiTG93XCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChidG5Qcmlvcml0eS5pbm5lckhUTUwgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcIkxvd1wiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ0blByaW9yaXR5LmlubmVySFRNTCA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiTWVkaXVtXCIpXG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IFwiSGlnaFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiVW5kb25lXCIpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiVW5Eb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJEb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJEb25lXCIpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiRG9uZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpO1xuICAgICAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCI7XG4gICAgICAgIH1cbn0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2dpYygpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbFwiO1xuaW1wb3J0IHRhc2tNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbFwiO1xuaW1wb3J0IGxvZ2ljIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWNcIlxuaW1wb3J0IHRhc2tMb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljXCJcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XG5cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbn0pXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuXG5cbmNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcblxucHJpb3JpdHlCdG4uZm9yRWFjaChlID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChlLmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIkxvd1wiKTtcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmlubmVySFRNTCA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGUuaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIk1lZGl1bVwiKVxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJIaWdoXCJcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja1wiKTtcblxuc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJVbmRvbmVcIikge1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcIlVuRG9uZVwiKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJEb25lXCIpO1xuICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJEb25lXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJEb25lXCIpIHtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJEb25lXCIpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIlVuRG9uZVwiKTtcbiAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCI7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=