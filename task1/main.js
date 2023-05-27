document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      var taskText = taskInput.value;
      if (taskText !== '') {
        var taskItem = document.createElement('li');
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(taskItem);
        });
        taskItem.innerText = taskText;
        taskItem.style.backgroundColor = generateRandomColor();
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        addButton.click();
      }
    });

    function generateRandomColor() {
        var minBrightness = 180;
        var letters = '0123456789ABCDEF';
        var color = '#';
                for (var i = 0; i < 3; i++) {
          var randomValue = Math.floor(Math.random() * 256);
          randomValue = Math.max(randomValue, minBrightness);
          var hexValue = randomValue.toString(16).padStart(2, '0');  
          color += hexValue;
        }
        return color;
      }
    
});
