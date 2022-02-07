const labels = document.querySelectorAll('.form-input label')
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value

if(email || password) {
    labels.forEach( label =>{
        label.innerHTML = label.innerText
        .split('')
        .map((letter, idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
        label.style.top = '30px'
    })
} else {
    labels.forEach( label =>{
        label.innerHTML = label.innerText
        .split('')
        .map((letter, idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
    })
}

