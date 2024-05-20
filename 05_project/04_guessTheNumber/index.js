const form = document.querySelector('form')
// console.log(form);
form.addEventListener('submit', function(event) {
    event.preventDefault()

    console.log(event.target);

    const submitButton = parseInt(document.querySelector('.subt').value)

})