let inputValueElement = document.querySelector('.input-value');

// const btnElement = document.getElementsByTagName('button');
let btnElement = document.querySelectorAll('button');

// console.log(btnElement);

let inputString = '';
btnElement.forEach(btn => {
    btn.addEventListener('click', (e) =>{

        if(e.target.innerHTML == '='){
            inputString = eval(inputString);
            inputValueElement.value = inputString;
            // inputString = '';
        } else if(e.target.innerHTML == 'AC'){
            inputString = '';
            inputValueElement.value = inputString;
        } else if(e.target.innerHTML == 'DEL'){
            inputString = inputString.substring(0, inputString.length - 1);
            inputValueElement.value = inputString;
        } else {
            inputString += e.target.innerHTML;
            inputValueElement.value = inputString;
            console.log(inputString);
        }

    });
})