function onReady(){

    // This so we can create an array of list items
    const toDos = [];
    //This will retrieve the form from the html
    const addToDoForm = document.getElementById('addToDoForm');

    // This function will update the to do list
    function createNewToDo(){

      //We need to be able to retrieve the info in the input text box
      // This info will become the title of the list item
      const newToDoText = document.getElementById('newToDoText');

       //This is to keep an list itme from being created
       //when there isn't any input
      if(!newToDoText){return}

      //this push the value from our inputted list item
      toDos.push({
        title: newToDoText.value,
        complete: false
      });

      //This will empty the text box once submitted
      newToDoText.value = '';

        renderTheUI(toDos);
    }

     //This will render the UI
    function renderTheUI(toDos){

      //This allow you to access the ul inside the html
      const todoList = document.getElementById('toDoList');
      //This will empty the newLi before the forEach loop runs again
      toDoList.textContent = '';

      //This is a loop that loop through arrays
      //this will loop through each li itme
      toDos.forEach(function(toDo){

        //This will add new list items
        const newLi = document.createElement('li');

        //This will add an input tag to the DOM
        const checkbox = document.createElement('input');
        //This states what type of an input tag this is
        checkbox.type = "checkbox";
        //This will add the toDo's title text to the newLi
        newLi.textContent = toDo.title;

        //This will append the newLi to the ul in the DOM
        todoList.appendChild(newLi);
        //This will append the checkbox to the list item
        newLi.appendChild(checkbox);
        //This creates a delete button
        const button = document.createElement('button');
        button.id = "button";
        //This creates text for the button
        button.textContent = "Delete";
        //This adds a button to the newLi
        newLi.appendChild(button);

        //This adds an eventlistener to the delete button
        button.addEventListener('click', event =>{
          event.preventDefault();
           newLi.remove();
          const index = toDos.indexOf(newLi)
          if(index > -1){
          toDos.splice(index, 1);

         }
         console.log(toDos);
       });


    });

    }
    //This will add an event listener to listen for
    //for when the submit button is pushed
    addToDoForm.addEventListener('submit', event =>{

       //This is used to keep the page from refreshing
       //when the submit button is pushed
       event.preventDefault();
       createNewToDo();
    });


    //This will display the UI as soon as the page loads
    renderTheUI(toDos);
 }

window.onload = function(){

 onReady();

};
