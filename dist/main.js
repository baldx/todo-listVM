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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vLi9zcmMvbW9kdWxlcy9wcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vLi9zcmMvbW9kdWxlcy9wcm9qZWN0TW9kYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdHZtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdE1vZGFsID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcbiAgICBgXG4gICAgPGZvcm0gaWQ9XCJwcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIj5cbiAgICA8bGFiZWwgZm9yPVwidGl0bGVQcm9qZWN0XCI+VGl0bGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVQcm9qZWN0XCIgaWQ9XCJ0aXRsZVByb2plY3RcIiByZXF1aXJlZCBtYXhsZW5ndGg9XCIyMFwiIHZhbHVlPVwiXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRQcm9qZWN0XCI+QWRkIHByb2plY3Q8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICAgIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsKCk7IiwibGV0IHByb2plY3RMaWJyYXJ5ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29uc3RydWN0aW9uIG9mIGEgcm9ib3RcIlxuICAgIH1cbl1cblxuY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxufVxuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFByb2plY3RcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlUHJvamVjdFwiKTtcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3RcIik7XG5cbmxldCBsb2dpYyA9ICgpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocnVsZXMoKSkge1xuICAgICAgICAgICAgYWRkUHJvamVjdFRvTGlicmFyeSgpO1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBhIFRpdGxlIVwiKVxuICAgICAgICB9XG4gICAgXG4gfSlcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlicmFyeSgpIHtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QodGl0bGVJbnB1dC52YWx1ZSlcbiAgICBwcm9qZWN0TGlicmFyeS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGFkZFRvTGlzdCgpXG4gICAgcmVzZXRGb3JtKClcbn1cblxuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlQnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICBwcm9qZWN0TGlicmFyeS5wb3AoKVxufSlcblxuZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gXCJcIikgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxufVxuXG5mdW5jdGlvbiBhZGRUb0xpc3QoYXJyYXkpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIGxpLmFwcGVuZENoaWxkKGJ0bilcbiAgICBidG4uaW5uZXJIVE1MID0gdGl0bGVJbnB1dC52YWx1ZVxuICAgIGxpLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKVxuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIvCfl5HvuI9cIlxuICAgIGRlbGV0ZUJ0bi5zdHlsZS5tYXJnaW4gPSBcIjhweFwiXG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlQnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LnNwbGljZShwcm9qZWN0TGlicmFyeS5pbmRleE9mKGFycmF5KSwgMSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpYygpOyIsImZ1bmN0aW9uIHRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGZvcm0gaWQ9XCJtb2RhbFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidGFza1wiPlRhc2s6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiBpZD1cInRhc2tcIiBtYXhsZW5ndGg9XCIyMFwiIG1pbmxlbmd0aD1cIjNcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBtYXhsZW5ndGg9XCIzMFwiIHZhbHVlPVwiXCI+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVcIiBpZD1cImR1ZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwicHJpb3JpdHktZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsZWdlbmQ+UHJpb3JpdHk6PC9sZWdlbmQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJoaWdoXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5IaWdoPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwibWVkaXVtXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5NZWRpdW08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwibG93XCIgdmFsdWU9XCJsb3dcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkxvdzwvbGFiZWw+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICBcbiAgICA8L2Zvcm0+YFxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTW9kYWwoKTsiLCJjbGFzcyB0YXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG5sZXQgdGFza0xpYnJhcnkgPSBbXG4gICAge1xuICAgICAgICB0YXNrOiBcIlRhc2tcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBpbnRlcmVzdGluZyBzdHVmZlwiLFxuICAgICAgICBkdWVEYXRlOiBcIjA2LzA0LzIzXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIlxuICAgIH1cbl1cblxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcblxubGV0IHRhc2tMb2dpYyA9ICgpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xuXG4gICAgICAgIGlmIChydWxlcygpKSB7XG4gICAgICAgICAgICBhZGRUYXNrVG9MaWJyYXJ5KCk7XG4gICAgICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhbGVydChcIldlIHdvdWxkIGxpa2UgYW4gaW5wdXQgRDpcIilcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0xpYnJhcnkoKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrKHRhc2tJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBnZXRQcmlvcml0eVZhbHVlKCkpO1xuICAgIHRhc2tMaWJyYXJ5LnB1c2gobmV3VGFzayk7XG4gICAgc2hvd1Rhc2soKTtcbiAgICByZXNldEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLmNoZWNrZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlWYWx1ZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcImhpZ2hcIikgcmV0dXJuIFwiSGlnaFwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJtZWRpdW1cIikgcmV0dXJuIFwiTWVkaXVtXCI7XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcImxvd1wiKSByZXR1cm4gXCJMb3dcIjtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgaWYgKHRhc2tJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGR1ZURhdGVJbnB1dC52YWx1ZSA9PSBcIlwiIHx8IGdldFByaW9yaXR5VmFsdWUoKSA9PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRhc2tcIik7XG5cbnJlbW92ZUJ0bi5mb3JFYWNoKGUgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIHRhc2tMaWJyYXJ5LnBvcCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaWJyYXJ5KTtcbiAgICB9KVxufSlcblxuXG5mdW5jdGlvbiBzaG93VGFzayhhcnJheSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnRuUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKGJ0blByaW9yaXR5KTtcbiAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChnZXRQcmlvcml0eVZhbHVlKCkpXG4gICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gZ2V0UHJpb3JpdHlWYWx1ZSgpO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gdGFza0lucHV0LnZhbHVlO1xuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmlubmVySFRNTCA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICBkdWVEYXRlRGl2LmlubmVySFRNTCA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICB0YXNrLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJVbkRvbmVcIik7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJVbmRvbmVcIlxuXG4gICAgdGFzay5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG4gICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiRGVsZXRlXCJcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmUucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGFza0xpYnJhcnkuc3BsaWNlKHRhc2tMaWJyYXJ5LmluZGV4T2YoYXJyYXkpLCAxKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlicmFyeSk7XG4gICAgfSlcblxuICAgIGJ0blByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChidG5Qcmlvcml0eS5pbm5lckhUTUwgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJIaWdoXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIkxvd1wiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiTWVkaXVtXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChidG5Qcmlvcml0eS5pbm5lckhUTUwgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcIk1lZGl1bVwiKVxuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIkhpZ2hcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBcIkhpZ2hcIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzLmlubmVySFRNTCA9PSBcIlVuZG9uZVwiKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcIlVuRG9uZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiRG9uZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIkRvbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiRG9uZVwiKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcIkRvbmVcIik7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIlVuRG9uZVwiKTtcbiAgICAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIlVuZG9uZVwiO1xuICAgICAgICB9XG59KVxufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrTG9naWMoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcm9qZWN0TW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TW9kYWxcIjtcbmltcG9ydCB0YXNrTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy90YXNrTW9kYWxcIjtcbmltcG9ydCBsb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljXCJcbmltcG9ydCB0YXNrTG9naWMgZnJvbSBcIi4vbW9kdWxlcy90YXNrTW9kYWxMb2dpY1wiXG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuXG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG59KVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cblxuXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XG5cbnByaW9yaXR5QnRuLmZvckVhY2goZSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZS5pbm5lckhUTUwgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIkhpZ2hcIik7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJMb3dcIik7XG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5pbm5lckhUTUwgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiTG93XCIpO1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiTWVkaXVtXCIpO1xuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBlLmlubmVySFRNTCA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJNZWRpdW1cIilcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIkhpZ2hcIik7XG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiSGlnaFwiXG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tcIik7XG5cbnN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiVW5kb25lXCIpIHtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoXCJVbkRvbmVcIik7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiRG9uZVwiKTtcbiAgICAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiRG9uZVwiKSB7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwiRG9uZVwiKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJVbkRvbmVcIik7XG4gICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIlVuZG9uZVwiO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9