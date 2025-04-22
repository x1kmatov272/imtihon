let num1 = +prompt('Brinchi Raqamni kriting')
let operator = prompt('Operatorlar Tanlang  \n 1)+ \n 2) * \n 3)/ \n 4) - ')
let num2 = +prompt('ikinchi raqam kriting')
let boxses = document.querySelectorAll('.box')
let btn = document.querySelector('.btn')
let item = document.querySelector('.item')
let result = null

if (operator === "+") {
    result = num1 + num2
    boxses[0].textContent = num1
    boxses[1].textContent = operator
    boxses[2].textContent = num2

} else if (operator === "*") {
    result = num1 * num2
    boxses[0].textContent = num1
    boxses[1].textContent = operator
    boxses[2].textContent = num2

} else if (operator === "/") {
    result = num1 / num2
    boxses[0].textContent = num1
    boxses[1].textContent = operator
    boxses[2].textContent = num2
} else if (operator === "-") {
    result = num1 - num2
    boxses[0].textContent = num1
    boxses[1].textContent = operator
    boxses[2].textContent = num2
} else if (operator === null) {

    alert('operatorlarni Kirit')
} else {
    alert('1dan 4 gacham  son krit jonkala')
}

btn.addEventListener('click', () => {
    item.textContent = result
})
