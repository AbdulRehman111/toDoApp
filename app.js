
var inputText = document.getElementById('inTxt');
var toDoList = document.getElementById('list');
function toDo() {
    
    var inTxtValue = document.getElementById('inTxt').value;
        if (inTxtValue === "") {
            alert('Something went wrong');
        }
        else {
            var li = document.createElement("li");

            var pgraph = document.createElement("p");

            var createTxt = document.createTextNode(inTxtValue);
            
            pgraph.appendChild(createTxt);

            var btn = document.createElement("button");
            var createBtnTxt = document.createTextNode("x");
            var editBtn = document.createElement("button");
            var editBtnTxt = document.createTextNode("Edit");

            editBtn.setAttribute("data-toggle", "modal");
            editBtn.setAttribute("data-target", "#myModal");

        

            editBtn.appendChild(editBtnTxt);
            btn.appendChild(createBtnTxt);   

            li.appendChild(pgraph);
            li.appendChild(editBtn);
            li.appendChild(btn);
            

            btn.setAttribute("onClick", "deleteTodo(this.parentElement)");
            btn.setAttribute("class", "btn btn-danger");

            editBtn.setAttribute("onClick", "editFunc(this.parentElement)");
            editBtn.setAttribute("class", "btn btn-danger marginRight");

             toDoList.appendChild(li); 




            inputText.value = "";     
        }
}




function deleteTodo(deleteTodoList) {
    toDoList.removeChild(deleteTodoList)
}

function deleteAll(itemToDelete) {
    
  
 var todo =  document.getElementById("list");
           var lis = todo.getElementsByTagName("li");
          
           while(lis.length > 0){                   
              todo.removeChild(lis[0]);
           }
        };   


function editFunc(editRef) {

    var newEditDiv = document.getElementById('editForm');
    var newInTxt = document.createElement("input");
    newInTxt.type = "text";

    var referEdit = editRef;
    
    newInTxt.setAttribute("class", "form-control inBlock");
    newInTxt.setAttribute("size", "100%");
    newInTxt.setAttribute("placeholder", "Edit Your Text Here...");
    newInTxt.id = "editTxtField";
    
    
inputText.value = editRef.childNodes[0].nodeValue;


    var paraTxt = referEdit.querySelector("p");

    newEditDiv.appendChild(newInTxt);

    var newBtn = document.createElement("button");
    var newBtnTxt = document.createTextNode("Done");

    newBtn.appendChild(newBtnTxt);
    newBtn.setAttribute("class", "btn btn-danger");
    newBtn.setAttribute("type", "button");

    newEditDiv.appendChild(newBtn);

    newBtn.setAttribute("data-dismiss", "modal");

    newBtn.onclick = function () { 
        paraTxt.innerHTML = newInTxt.value; newInTxt.style.display = "none"; newBtn.style.display = "none"; }


    newEditDiv.childNodes = null;
     
}
