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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vLi9zcmMvbW9kdWxlcy90YXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vLi9zcmMvbW9kdWxlcy90YXNrTW9kYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0dm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3R2bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdHZtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RNb2RhbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXG4gICAgYFxuICAgIDxmb3JtIGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCI+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlUHJvamVjdFwiPlRpdGxlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlUHJvamVjdFwiIGlkPVwidGl0bGVQcm9qZWN0XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMjBcIiB2YWx1ZT1cIlwiPlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0UHJvamVjdFwiPkFkZCBwcm9qZWN0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIGBcbiAgICBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2RhbCgpOyIsImNvbnN0IHByb2plY3RMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgcHJvamVjdExpYnJhcnkucHVzaCh7XG4gICAgICAgIHRpdGxlXG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaWJyYXJ5KSk7XG5cbiAgICByZXR1cm4geyB0aXRsZSB9XG59XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0UHJvamVjdFwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVQcm9qZWN0XCIpO1xuXG5sZXQgbG9naWMgPSAoKSA9PiB7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKHJ1bGVzKCkpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb0xpYnJhcnkoKTtcbiAgICAgICAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBUaXRsZSFcIilcbiAgICAgICAgfVxuICAgIFxuIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpYnJhcnkoKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGVJbnB1dC52YWx1ZSlcbiAgICBhZGRUb0xpc3QobmV3UHJvamVjdClcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlicmFyeSk7XG4gICAgcmVzZXRGb3JtKClcbn1cblxuZnVuY3Rpb24gcnVsZXMoKSB7XG4gICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT0gXCJcIikgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxufVxuXG5cbmZ1bmN0aW9uIGFkZFRvTGlzdCh7dGl0bGV9KSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICBsaS5hcHBlbmRDaGlsZChidG4pXG5cbiAgICBidG4uaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIilcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCLwn5eR77iPXCJcbiAgICBkZWxldGVCdG4uc3R5bGUubWFyZ2luID0gXCI4cHhcIlxuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RMaWJyYXJ5LnBvcCgpXG4gICAgICAgIGRlbGV0ZUJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGVsZXRlXCIpXG4gICAgfSlcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIH0pXG59XG5cbnByb2plY3RMaWJyYXJ5LmZvckVhY2goYWRkVG9MaXN0KVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbG9naWMoKTsiLCJmdW5jdGlvbiB0YXNrTW9kYWwoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGlkPVwibW9kYWxcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tcIj5UYXNrOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgaWQ9XCJ0YXNrXCIgbWF4bGVuZ3RoPVwiMjBcIiBtaW5sZW5ndGg9XCIzXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgbWF4bGVuZ3RoPVwiMzBcIiB2YWx1ZT1cIlwiPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlXCIgaWQ9XCJkdWVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxuXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInByaW9yaXR5LWdyb3VwXCI+XG4gICAgICAgICAgICA8bGVnZW5kPlByaW9yaXR5OjwvbGVnZW5kPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiaGlnaFwiIHZhbHVlPVwiaGlnaFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SGlnaDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+TWVkaXVtPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Mb3c8L2xhYmVsPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgIFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgXG4gICAgPC9mb3JtPmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFza01vZGFsKCk7IiwiY29uc3QgdGFza0xpYnJhcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuXG5jb25zdCB0YXNrID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgdGFza0xpYnJhcnkucHVzaCh7XG4gICAgICAgIHRhc2ssXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH0pXG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaWJyYXJ5KSk7XG5cbiAgICByZXR1cm4ge3Rhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XG5cblxubGV0IHRhc2tMb2dpYyA9ICgpID0+IHtcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAocnVsZXMoKSkge1xuICAgICAgICAgICAgYWRkVGFza1RvTGlicmFyeSgpO1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWxlcnQoXCJXZSB3b3VsZCBsaWtlIGFuIGlucHV0IEQ6XCIpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KCkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGV0IG5ld1Rhc2sgPSB0YXNrKHRhc2tJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBnZXRQcmlvcml0eVZhbHVlKCkpO1xuICAgIHNob3dUYXNrKG5ld1Rhc2spXG4gICAgcmVzZXRGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5VmFsdWUoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJoaWdoXCIpIHJldHVybiBcIkhpZ2hcIjtcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibWVkaXVtXCIpIHJldHVybiBcIk1lZGl1bVwiO1xuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJsb3dcIikgcmV0dXJuIFwiTG93XCI7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7IFxufVxuXG5mdW5jdGlvbiBydWxlcygpIHtcbiAgICBpZiAodGFza0lucHV0LnZhbHVlID09IFwiXCIgfHwgZHVlRGF0ZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZ2V0UHJpb3JpdHlWYWx1ZSgpID09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2soe3Rhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX0pIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBidG5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ0blByaW9yaXR5KTtcbiAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChwcmlvcml0eSlcbiAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBwcmlvcml0eTtcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IHRhc2s7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgZGVzY3JpcHRpb25EaXYuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICBkdWVEYXRlRGl2LmlubmVySFRNTCA9IGR1ZURhdGU7XG4gICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG4gICAgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCJcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiXG5cbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaWJyYXJ5KTsgLyp3cml0ZSBsb2NhbFN0b3JhZ2UqL1xuICAgIH0pXG5cbiAgICBidG5Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJMb3dcIik7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ0blByaW9yaXR5LmlubmVySFRNTCA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBidG5Qcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiTG93XCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIk1lZGl1bVwiKTtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnRuUHJpb3JpdHkuaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJNZWRpdW1cIilcbiAgICAgICAgICAgIGJ0blByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJIaWdoXCIpO1xuICAgICAgICAgICAgYnRuUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJIaWdoXCIgLyp3cml0ZSBsb2NhbFN0b3JhZ2UqL1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJcIikgc3RhdHVzLmlubmVySFRNTCA9IFwiVW5kb25lXCJcbiAgICBlbHNlIGlmIChzdGF0dXMuaW5uZXJIVE1MID09IFwiRG9uZVwiKSBzdGF0dXMucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuXG4gICAgY29uc3Qgc3RhdHVzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tcIilcblxuICAgIHN0YXR1c0J1dHRvbnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuaW5uZXJIVE1MID09IFwiVW5kb25lXCIpIHtcbiAgICAgICAgICAgICAgICBlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIkRvbmVcIlxuICAgICAgICAgICAgICAgIHRhc2tMaWJyYXJ5LnBvcCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJVbmRvbmVcIikge1xuICAgIC8vICAgICAgICAgc3RhdHVzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJEb25lXCI7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXR1c1wiLCBcIlVuZG9uZVwiKVxuICAgIC8vIH0pXG59XG5cbnRhc2tMaWJyYXJ5LmZvckVhY2goc2hvd1Rhc2spXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2dpYygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdE1vZGFsIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsXCI7XG5pbXBvcnQgdGFza01vZGFsIGZyb20gXCIuL21vZHVsZXMvdGFza01vZGFsXCI7XG5pbXBvcnQgbG9naWMgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TW9kYWxMb2dpY1wiXG5pbXBvcnQgdGFza0xvZ2ljIGZyb20gXCIuL21vZHVsZXMvdGFza01vZGFsTG9naWNcIlxuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcblxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxufSlcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KVxuXG5cbi8vIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbi8vIHByaW9yaXR5QnRuLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpb3JpdHlcIik7XG5cbi8vIGlmIChwcmlvcml0eUJ0bi5pbm5lckhUTUwgPT0gXCJcIikgcHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gXCJIaWdoXCI7XG5cblxuLy8gcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBpZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiSGlnaFwiKSB7XG4vLyAgICAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJIaWdoXCIpO1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwiTG93XCIpO1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5pbm5lckhUTUwgPSBcIkxvd1wiO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmIChwcmlvcml0eUJ0bi5pbm5lckhUTUwgPT0gXCJMb3dcIikge1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiTG93XCIpO1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwiTWVkaXVtXCIpO1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmIChwcmlvcml0eUJ0bi5pbm5lckhUTUwgPT0gXCJNZWRpdW1cIikge1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiTWVkaXVtXCIpO1xuLy8gICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcbi8vICAgICAgICAgcHJpb3JpdHlCdG4uaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4vLyAgICAgfVxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmlvcml0eVwiLCBwcmlvcml0eUJ0bi5pbm5lckhUTUwpXG4vLyB9KVxuXG4vLyBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrXCIpO1xuXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuLy8gICAgaWYgKHN0YXR1cy5pbm5lckhUTUwgPT0gXCJEb25lXCIpIHtcbi8vICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIkRvbmVcIik7XG4vLyAgICAgc3RhdHVzLmlubmVySFRNTCA9IFwiRG9uZVwiO1xuLy8gICAgIH0gXG4vLyAgICAgZWxzZSBpZiAoc3RhdHVzLmlubmVySFRNTCA9PSBcIlVuZG9uZVwiKSB7XG4vLyAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpXG4vLyAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSBcIlVuZG9uZVwiXG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKHByaW9yaXR5QnRuLmlubmVySFRNTCA9PSBcIkhpZ2hcIikgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIkhpZ2hcIikgXG4vLyAgICAgZWxzZSBpZiAocHJpb3JpdHlCdG4uaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoXCJNZWRpdW1cIilcbi8vICAgICBlbHNlIGlmIChwcmlvcml0eUJ0bi5pbm5lckhUTUwgPT0gXCJMb3dcIikgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIkxvd1wiKVxuLy8gfVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9