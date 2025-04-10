let input = document.getElementById('InputForText');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')|| string.endsWith('%')) {
                let newstring =  string.substring(0, string.length - 1);
            string = eval(newstring).toString();
            input.value = string;

            }else {

            string = eval(string).toString();
            input.value = string;
            console.log(string.toString());
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

        }else if (e.target.innerHTML == '.' & ( string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')|| string.endsWith('%'))) {
            string += "0" + e.target.innerHTML;
            input.value = string;

    }else if (e.target.innerHTML == '.' & string.endsWith('.')) {
        

}  else {
            string += e.target.innerHTML;
        input.value = string;
        console.log(string)
        }
    })

})