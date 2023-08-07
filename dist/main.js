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

let logic = () => {
    submitBtn.addEventListener("click", element => {
    addProjectToLibrary();
    element.preventDefault();
 })
}   

function addProjectToLibrary() {
    container.style.display = "none";
    let newProject = new project(titleInput.value)
    projectLibrary.push(newProject);
    addToList()
    resetForm()
}

function resetForm() {
    titleInput.value = ""
}

function addToList() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    ul.appendChild(li);
    li.appendChild(btn)
    btn.innerHTML = titleInput.value
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
        addTaskToLibrary();
        element.preventDefault();
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
}

function getPriorityValue() {
    if (document.querySelector("input[name='priority']:checked").value == "high") return "High";
    else if (document.querySelector("input[name='priority']:checked").value == "medium") return "Medium";
    else if (document.querySelector("input[name='priority']:checked").value == "low") return "Low";
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
    const checkStatusDiv = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input")
    const remove = document.createElement("button");

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

    task.appendChild(checkStatusDiv);
    checkStatusDiv.classList.add("wrapper");

    checkStatusDiv.appendChild(label);
    label.setAttribute("for", "checkbox");
    label.innerHTML = "Status:"

    checkStatusDiv.appendChild(checkbox);
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", "checkbox")
    checkbox.setAttribute("id", "checkbox")

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ2Q3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUM3QjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUN4STFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDTjtBQUNHO0FBQ0M7O0FBRWhEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvdGFza01vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgIGBcbiAgICA8Zm9ybSBpZD1cInByb2plY3RcIiBuYW1lPVwicHJvamVjdFwiPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVByb2plY3RcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVByb2plY3RcIiBpZD1cInRpdGxlUHJvamVjdFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjIwXCIgdmFsdWU9XCJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFByb2plY3RcIj5BZGQgcHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBgXG4gICAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kYWwoKTsiLCJsZXQgcHJvamVjdExpYnJhcnkgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb25zdHJ1Y3Rpb24gb2YgYSByb2JvdFwiXG4gICAgfVxuXVxuXG5jbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG59XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVQcm9qZWN0XCIpO1xuXG5sZXQgbG9naWMgPSAoKSA9PiB7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50ID0+IHtcbiAgICBhZGRQcm9qZWN0VG9MaWJyYXJ5KCk7XG4gICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuIH0pXG59ICAgXG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpYnJhcnkoKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpXG4gICAgcHJvamVjdExpYnJhcnkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBhZGRUb0xpc3QoKVxuICAgIHJlc2V0Rm9ybSgpXG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxufVxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxuICAgIGJ0bi5pbm5lckhUTUwgPSB0aXRsZUlucHV0LnZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljKCk7IiwiZnVuY3Rpb24gdGFza01vZGFsKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8Zm9ybSBpZD1cIm1vZGFsXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrXCI+VGFzazo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1wiIGlkPVwidGFza1wiIG1heGxlbmd0aD1cIjIwXCIgbWlubGVuZ3RoPVwiM1wiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjMwXCIgdmFsdWU9XCJcIj5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlXCI+RHVlIGRhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZVwiIGlkPVwiZHVlXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cblxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwcmlvcml0eS1ncm91cFwiPlxuICAgICAgICAgICAgPGxlZ2VuZD5Qcmlvcml0eTo8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkhpZ2g8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwibWVkaXVtXCIgdmFsdWU9XCJtZWRpdW1cIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPk1lZGl1bTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+TG93PC9sYWJlbD5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIj5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgIFxuICAgIDwvZm9ybT5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2RhbCgpOyIsImNsYXNzIHRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbmxldCB0YXNrTGlicmFyeSA9IFtcbiAgICB7XG4gICAgICAgIHRhc2s6IFwiVGFza1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGludGVyZXN0aW5nIHN0dWZmXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMDYvMDQvMjNcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiXG4gICAgfVxuXVxuXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuXG5sZXQgdGFza0xvZ2ljID0gKCkgPT4ge1xuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudCA9PiB7XG4gICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoKTtcbiAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0xpYnJhcnkoKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrKHRhc2tJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBnZXRQcmlvcml0eVZhbHVlKCkpO1xuICAgIHRhc2tMaWJyYXJ5LnB1c2gobmV3VGFzayk7XG4gICAgc2hvd1Rhc2soKTtcbiAgICByZXNldEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlWYWx1ZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcImhpZ2hcIikgcmV0dXJuIFwiSGlnaFwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJtZWRpdW1cIikgcmV0dXJuIFwiTWVkaXVtXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcImxvd1wiKSByZXR1cm4gXCJMb3dcIjtcbn1cblxuY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcblxucmVtb3ZlQnRuLmZvckVhY2goZSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgdGFza0xpYnJhcnkucG9wKClcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xuICAgIH0pXG59KVxuXG5cbmZ1bmN0aW9uIHNob3dUYXNrKGFycmF5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrc1wiKTtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidG5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja1N0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKGJ0blByaW9yaXR5KTtcbiAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChnZXRQcmlvcml0eVZhbHVlKCkpXG4gICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gZ2V0UHJpb3JpdHlWYWx1ZSgpO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gdGFza0lucHV0LnZhbHVlO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmlubmVySFRNTCA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICBkdWVEYXRlRGl2LmlubmVySFRNTCA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrU3RhdHVzRGl2KTtcbiAgICBjaGVja1N0YXR1c0Rpdi5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuICAgIGNoZWNrU3RhdHVzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjaGVja2JveFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBcIlN0YXR1czpcIlxuXG4gICAgY2hlY2tTdGF0dXNEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja2JveFwiKVxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlY2tib3hcIilcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiXG5cbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tMaWJyYXJ5LnNwbGljZSh0YXNrTGlicmFyeS5pbmRleE9mKGFycmF5KSwgMSlcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xuICAgIH0pXG5cbiAgICBidG5Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJMb3dcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ0blByaW9yaXR5LmlubmVySFRNTCA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiTG93XCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJNZWRpdW1cIilcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJIaWdoXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJIaWdoXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2dpYygpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbFwiO1xuaW1wb3J0IHRhc2tNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbFwiO1xuaW1wb3J0IGxvZ2ljIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWNcIlxuaW1wb3J0IHRhc2tMb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljXCJcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XG5cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbn0pXG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcblxuXG5cbmNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eVwiKTtcblxucHJpb3JpdHlCdG4uZm9yRWFjaChlID0+IHtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChlLmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIkxvd1wiKTtcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmlubmVySFRNTCA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJNZWRpdW1cIik7XG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGUuaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIk1lZGl1bVwiKVxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJIaWdoXCJcbiAgICAgICAgfVxuICAgIH0pXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=