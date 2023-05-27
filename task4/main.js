function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
  }
  
  function calculate() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
  }
  