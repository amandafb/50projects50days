const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkPositionBoxes)

checkPositionBoxes()

function checkPositionBoxes(){
    //Stores the percentage of the window that will be used on the trigger
    const windowPortion = 0.8 
    const triggerBottom = window.innerHeight / windowPortion

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}