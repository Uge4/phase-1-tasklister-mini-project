
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskListItem = document.createElement("li") // new li list item
  let taskList = document.getElementById("tasks")    // get unordered list object
  let btn = document.createElement("button") // new 'x' button 
  btn.textContent = "X"
  btn.id = "remover"
  

  document.querySelector("form").addEventListener("submit", (e) => {
    
    e.preventDefault()
    

    // let task = e.target[0].value // get input text 
    addTask(e.target[0].value)
    
    // let newTaskListItem = document.createElement("li") // new li list item
    // let taskList = document.getElementById("tasks")    // get unordered list object
    // let btn = document.createElement("button") // new 'x' button 
    // btn.textContent = "X"
    
    // taskList.append(newTaskListItem)
    // newTaskListItem.textContent = `${task}   `
    // newTaskListItem.append(btn)

  })

  function addTask(task){
    taskList.append(newTaskListItem)
    newTaskListItem.textContent = `${task}   `
    newTaskListItem.append(btn)
  }


btn.addEventListener('click', e => {
  btn.parentNode.remove()
})


});
