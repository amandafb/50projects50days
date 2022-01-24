const panels = document.querySelectorAll('.panel')
// o querySelectorAll retorna uma Node List - parecida com um array

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}