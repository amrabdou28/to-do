const list = document.querySelector('#container ul');

//delete to do
list.addEventListener('click',
    function(e){
    if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
    }
});

//add to do
const addForm =document.forms['add a to do']
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input(type="text")').value;

    //creat elements
    const li = document.createElement('li');
    const toDoText =document.createElement('p');
    const deleteBtn =document.createElement('button');


    //add content
    deleteBtn.textContent = "delete"
    toDoText.textContent = value;


    //add classes
    toDoText.className.add('text');
    deleteBtn.className.add('delete');


    //append to document
    li.appendChild(todotext)
    li.appendChild(deleteBtn)
    list.appendChild(li)

});
