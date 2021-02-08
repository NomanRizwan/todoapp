
var list = document.getElementById('list')

function addtodo() {

    var todoItem = document.getElementById('todoItem');
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
   

   
        li.appendChild(liText)
    


    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    editbtn.setAttribute('class', 'edit')
    editbtn.appendChild(edittext)
    editbtn.setAttribute('onclick','editbtn(this)')
    li.appendChild(editbtn)
  
    var del = document.createElement("button")
    var delText = document.createTextNode('clear')
    del.setAttribute('class', 'clear')
    del.setAttribute('onclick','delItem(this)')
    del.appendChild(delText)
    li.appendChild(del)

    list.appendChild(li)

    todoItem.value = ''

}

// li delete
function delItem(e){
    console.log(e.parentNode.remove())
}

// li edit button
function editbtn(e){
 
var update = prompt("enter update list",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue=update;
}
// all clear

function allClear() {

list.innerHTML= ''
}