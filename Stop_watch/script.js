let tens = 0
let min = 0
let sec = 0
let Interval

const appendMins = document.querySelector('.mins')
const appendSec = document.querySelector('.sec')
const appendTens = document.querySelector('.tens')

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

const startTimer = () => { 
    tens++
    if (tens <= 9){
        appendTens.innerHTML= '0' + tens
    }
    if (tens > 9){
        appendTens.innerHTML = tens
    }

    if (tens > 99){
        sec++
        appendSec.innerHTML= '0' + sec
        tens = 0
        tens.innerHTML = '0' +tens
    }
    if (sec > 9){
        appendSec.innerHTML = sec
    }
    if (sec > 59){
        mins++
        appendMins.innerHTML = '0' + mins
        sec = 0
    }
}

start.addEventListener('click' , () =>{
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
})

stop.addEventListener('click', () =>{
    clearInterval(Interval)
})

reset.addEventListener('click', () =>{
    clearInterval(Interval)
    tens = '00'
    sec = '00'
    min = '00'
    appendMins.innerHTML = min
    appendSec.innerHTML = sec
    appendTens.innerHTML = tens
})