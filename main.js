const display = document.getElementById('display');

    function append(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      if(display.value.length != 0) {
        display.value = eval(display.value);
      } 
      else
      {
        display.value = 'error!!!';
      }
    }