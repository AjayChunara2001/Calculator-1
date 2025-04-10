let input = document.getElementById('InputForText');
let buttons = document.querySelectorAll('button');

var string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')|| string.endsWith('%')) {
                let newstring =  string.substring(0, string.length - 1);
            string = eval(newstring);
            input.value = string;
            }else {
            string = eval(string);
            input.value = string.toString();
            console.log(string);
        }
        }else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;

        }else if ((e.target.innerHTML == '+' || e.target.innerHTML == '-' || e.target.innerHTML == '*' || e.target.innerHTML == '/' || e.target.innerHTML == '%') & ( string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')|| string.endsWith('%'))) {
                string = string;
                input.value = string;

        }  else {
            string += e.target.innerHTML;
        input.value = string;
        }
    })

})