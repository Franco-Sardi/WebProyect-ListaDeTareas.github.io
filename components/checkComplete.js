//Elemento botón
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far","fa-check-square","icon" )
    i.addEventListener('click', completeTask)
    return i
  }
  
  // En Este bloque se realiza un cambio de clases cada vez que se captura el click sobre el tick entonces pasa de una clase a otra
  
  //Funcion que se va a ejecutar cuando el usuario de checkcomplete
  const completeTask = (event) => {
    console.log(event.target);
    const elemt = event.target;
    elemt.classList.toggle("fas"); //toggle en esta ocación sirve para marcar y desmarcar el tick
    elemt.classList.toggle("completeIcon")
    elemt.classList.toggle("far");
  
  };

  export default checkComplete