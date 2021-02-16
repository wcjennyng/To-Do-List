const form = document.querySelector('#todo-list')
const input = document.querySelector('#list')
const taskList = document.querySelector('#task-list')
const button = document.querySelector('#button')
document.addEventListener('DOMContentLoaded', getTodos)


form.addEventListener('submit', function(e) {
    e.preventDefault()
    const newTask = document.createElement('li')
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'X'
    newTask.innerText = input.value 
    newTask.append(removeBtn)
    taskList.append(newTask)
    saveLocalTodos(input.value)
    input.value = ""
})
 


taskList.addEventListener('click', function(e) {
        
    if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed')
    } else if (e.target.tagName==='BUTTON') {
            removeLocalTodos(e.target.parentElement)
            e.target.parentElement.remove()
    }
})
 
function saveLocalTodos(todo) {
        let todos
        if(localStorage.getItem('todos')===null){
                todos = []
        } else{
                todos = JSON.parse(localStorage.getItem('todos'))
        }
        todos.push(todo)
        localStorage.setItem('todos',JSON.stringify(todos))
}
 
function getTodos() {
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = []
} else{
        todos = JSON.parse(localStorage.getItem('todos'))
}
todos.forEach(function(todo){
    const newTask = document.createElement('li')
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'X'
    newTask.innerText = todo
    newTask.append(removeBtn)
    taskList.append(newTask)      
})
}

function removeLocalTodos(todo) {
        let todos;
        if(localStorage.getItem('todos') === null) {
            todos = []
        }
        else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        const todoIndex = todo.childNodes[0]
        console.log(todos.splice(todos.indexOf(todoIndex)))
        localStorage.setItem('todos',JSON.stringify(todos))
    }
