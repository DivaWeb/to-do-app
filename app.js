function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');



  addToDoForm.addEventListener('submit', event =>{
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new input
    let newLi= document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty imput
    newToDoText.value = "";

    //create button
    let newButton = document.createElement('button')

    //add text
    let name = document.createTextNode("Remove To-Do");

    //input type
    newButton.type = "button";

    //attach to the newlist
    newButton.appendChild(name);

    //attach to checklist
    newLi.appendChild(newButton);


    newButton.addEventListener('click', event =>{
      console.log(toDoList, newLi);
        toDoList.removeChild(newLi);
        //newLi.remove();
      });



});
 }
  
window.onload = function(){
  alert("The window has loaded!");
 onReady("The window has loaded!");

};
