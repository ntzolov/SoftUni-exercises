function generateReport() {
    const checks = Array.from(document.querySelectorAll('thead tr th input'))
    const list = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.querySelector('#output');
    const result = []

    list.forEach(row => {
        const cols = Array.from(row.children)
        let current = {}
        cols.forEach((td, i) => {
            console.log(checks[i]);
            if (checks[i].checked) {
                current[checks[i].name] = td.textContent
            }
        })
        result.push(current)
    })
    console.log(result);
    output.value = JSON.stringify(result)
}