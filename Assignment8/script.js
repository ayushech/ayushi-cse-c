document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    
    
    const initialTasks = ["Play", "go to market", "go to college"];

   
    function addTask(taskText) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

  
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
     
        listItem.appendChild(taskSpan);
        taskList.appendChild(listItem);
    }
 
    initialTasks.forEach(task => addTask(task));



    addTaskBtn.addEventListener('click', () => {
        const newTask = taskInput.value;
        addTask(newTask);
        taskInput.value = ''; 
        taskInput.focus(); 
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });


    const listBtn = document.querySelector('.list-btn');
    listBtn.addEventListener('click', () => {
      
        alert("The full list of tasks is displayed above!");
    });
});