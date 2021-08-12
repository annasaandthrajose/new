let todoinput=document.querySelector(".to-in")

let todobutton=document.querySelector(".to-btn")

let todolist=document.querySelector(".todo-list")

todobutton.addEventListener('click',addto);

function addto(e){
    
    const tododiv=document.createElement('div')
    
    e.preventDefault()//to avoid app refreshing
    
    tododiv.classList.add('todo')
    
    
    const toli=document.createElement('li')
    
    
    toli.classList.add('todoitems')
    
    toli.innerText=todoinput.value
    
    tododiv.appendChild(toli)
    
    
    todolist.appendChild(tododiv)
    
    todoinput.value="";
}