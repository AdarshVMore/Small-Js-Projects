let startwatch = document.querySelector('.start')
let pausewatch = document.querySelector('.pause')
let resetwatch = document.querySelector('.reset')
let sec_time = document.querySelector('.sec')
let min_time = document.querySelector('.min')
let hr_time = document.querySelector('.hr')

let sec = 0
let min = 0
let hr = 0


function time() {
    sec++
    let seccount = null
    let mincount = null
    let hrcount = null
    if (sec < 10) {
        seccount = '0' + sec.toString()
    }
    else {
        seccount = sec
    }
    sec_time.innerText = seccount
    if (sec / 60 == 1) {
        sec = 0
        min++
        if (min < 10) {
            mincount = '0' + min.toString()
        }
        else {
            mincount = min
        }
        min_time.innerText = mincount
        sec_time.innerText = seccount

        if (min / 60 == 1) {
            min = 0
            hr++
            if (hr < 10) {
                hrcount = '0' + hr.toString()
            }
            else {
                hrcount = hr
            }
            hr_time.innerText = hrcount
            min_time.innerText = mincount
            sec_time.innerText = seccount

        }
    }
    resetwatch.addEventListener('click', () => {
        sec = 00
        min = 00
        hr = 00
        hr_time.innerText = "00"
        min_time.innerText = "00"
        sec_time.innerText = "00"
    })
}

// window.setInterval(time, 1000)

let timeinterval = null
let timestatus = 'stopped'

startwatch.addEventListener('click', () => {
    timeinterval = window.setInterval(time, 1000)
    startwatch.style.display = 'none'
})
pausewatch.addEventListener('click', () => {
    window.clearInterval(timeinterval)
    startwatch.style.display = 'inline'

})
