function validate() {
    const inputEmail = document.querySelector('#email');

    inputEmail.addEventListener('change', isError)
    function isError() {
        const pattern = /[a-z]+@[a-z]+.[a-z]+/g
        const match = inputEmail.value.match(pattern)
        if (match) {
            inputEmail.classList.remove('error')
            console.log('11111');
        } else {
            inputEmail.classList.add('error')
        }
    }
}