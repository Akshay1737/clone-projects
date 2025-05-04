let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = ''; //empty string
let arr = Array.from(buttons); //all buttons in array

arr.forEach(button => {  //runing foreach function for accecing each button and to store it in array
    button.addEventListener('click', (e) => {   //added enentlistner on click
        if (e.target.innerHTML == '=') { // target =event triggered
            try {
                string = eval(string);  // Evaluate the string expression $$ eval() is in build function in js
                input.value = string;
            } catch {
                input.value = "Error"; //  invalid expressions
                string = ''; // Reset string 
            }
        } else if (e.target.innerHTML == 'ac') { //for clearign screen
            string = '';
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
