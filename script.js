//display value on display
function display(val) 
{ 
    document.getElementById("result").value+=val
} 
//evaluates the digit and return result 
function calculate() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
//clear the display 
function clear() 
{ 
    document.getElementById("result").value = "" 
} 