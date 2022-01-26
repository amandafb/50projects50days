const progress = document.getElementById('progress')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

btnNext.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    updateProgress()
})

btnPrev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    updateProgress()
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    const percent = (actives.length - 1) / (circles.length - 1) * 100
    progress.style.width = `${percent}%`

    if (currentActive === 1) {
        btnPrev.disabled = true
    } else if (currentActive === circles.length) {
        btnNext.disabled = true
    } else {
        btnPrev.disabled = false
        btnNext.disabled = false
    }
}