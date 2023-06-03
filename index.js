const showTime = () => {
    let date = new Date()
    // console.log(date)


    let weekday = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    let months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]



    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let session = 'am'
    let weekDay = weekday[date.getDay()]
    let dateOfMonth = date.getDate()
    let month = months[ date.getMonth()]
    let year =  date.getFullYear()

    


     if (hours == 0) {
        hours = 12
    } 
    if (hours > 12) {
        hours = hours - 12;
        session = 'pm'
    }

    if (minutes < 10){
        minutes = '0' + minutes
    }

    if (hours < 10){
        hours = '0' + hours
    }

    if (seconds < 10){
        seconds = '0' + seconds
    }



    // Display on screen
    let time = hours + ':' + minutes + ':' + seconds + ' ' + session 

    document.querySelector('.clock').innerText = time
    document.querySelector('.clock').textContent = time

    document.querySelector('.day').innerHTML = weekDay + ' ' + month + ' ' + dateOfMonth + ', ' + year
    setTimeout(showTime, 1000)

}

showTime()