import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

//Inmediately invoked function expression IIFE
( () => {
  
const btn = document.querySelector("[data-form-btn]");

const crateTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = "";
    //backsticks

    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask)
    
    const content = 
 
 //task.innerHTML = content;

  task.appendChild(taskContent) ;
  task.appendChild(deleteIcon());
  list.appendChild(task);

    // console.log(value);
    // console.log(task);
    // console.log(content);
};
    // console.log(btn);
//listener 
//Arow functions funciones anonimas
btn.addEventListener("click", crateTask)




})
();