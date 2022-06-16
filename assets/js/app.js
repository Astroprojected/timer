const stopwatchDisplay = document.querySelector('.stopwatch-display')
const stopwatchStartbtn = document.querySelector('.btn-stopwatch1')
const stopwatchResetbtn = document.querySelector('.btn-stopwatch2')
const stopwatchStopbtn = document.querySelector('.btn-stopwatch3')

let stopwatchSec = 0
let stopwatchMin = 0
let stopwatchMls = 0 
let interval 

 var runTimer = function() {
    stopwatchMls += 100

    if(stopwatchMls === 1000){
        stopwatchSec++
        stopwatchMls = 0
    }

    if(stopwatchSec === 60){
        stopwatchMin++
        stopwatchSec = 0
    }
    stopwatchDisplay.innerText = `${stopwatchMin}:${stopwatchSec}:${stopwatchMls}`
}

function startStopwatch(){
    setInterval(runTimer, 100)
}


stopwatchStartbtn.addEventListener('click', startStopwatch)

function stopTimer(){
    clearInterval(interval)
    interval = setInterval(runTimer, 100)
}
function stopTimer(){
    clearInterval(interval)
}
 function resetTimer(){
     clearInterval(interval)
     resetDisp = "00:00:00"
     stopwatchDisplay.innerHTML = resetDisp
     
 }

//stopwatchStopbtn.addEventListener('click',stopTimer)