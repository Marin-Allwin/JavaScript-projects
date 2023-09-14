

function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()

    if (hr >12){
        hr-=12
        document.getElementById('ampm').innerHTML = "PM"
    }

    document.getElementById('hours').innerHTML  = numCheck(hr)
    document.getElementById('mins').innerHTML = numCheck(min)
    document.getElementById('seconds').innerHTML = numCheck(sec)
}

function numCheck(num){
    return num<10? "0"+num:num
}

setInterval(displayTime,500)