const btn = document.querySelector('button')
const close = document.querySelector('span')
const p = document.querySelector('p')

btn.addEventListener('click', ()=>{
    p.classList.remove('before-click')
    p.classList.add('after-click')
})
close.addEventListener('click', ()=>{
    p.classList.remove('after-click')
    p.classList.add('before-click')
})