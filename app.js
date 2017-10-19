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
    let name = document.createTextNode("Remove To-D0");

    //input type
    newButton.type = "button";

    //attach to the newlist
    newButton.appendChild(name);

    //attach to checklist
    newLi.appendChild(newButton);


     newButton.addEventListener('click', event =>{
      toDoList.removeChild(newLi)
    });

});

   /*const oldButton = document.getElementsByTagName('button');
   let newLi = document.getElementsByTagName('li');
   oldButton.addEventListener('click', event =>{

    toDoList.removeChild(newLi);


});*/

}



//I want to go over this section of code to find out why it would not work.

/*remove.addEventListener('click', event =>{

  let newlist = document.getElementsByTagName('li');

  for(var i = 0; i < newlist.length; i++){

     if(newlist[i].checked === true){

          var deleteList = toDoList.remove(newlist[i]);

     }

    }
       return deleteList;
  });*/



  // loop on all li elements
  // check the child checkbox to see if it's checked
  // if it is checked delete the li

  // or
  // loop on checkbox elements
  // see if the checkbox is checked
  // if it is go up to the parent and delete it

window.onload = function(){
  alert("The window has loaded!");
 onReady("The window has loaded!");

};
