const clock = document.getElementById('clock')


// it takes 2 parameters - first is callback function and second is time in ms
setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()

}, 1000);