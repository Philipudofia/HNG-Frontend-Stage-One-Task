function setDate() {
    let day = document.querySelector('.currentDay')
    let time = document.querySelector('.currentTime')
    const currentDate = new Date()
    const currentDay = currentDate.getUTCDay()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const day2 = currentDate.getUTCDate()
    const daysOfWeek =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const dayOfTheWeek = daysOfWeek[currentDay]
    let currentHour = String(currentDate.getUTCHours())
    let currentMinute = String(currentDate.getUTCMinutes())
    const seconds = currentDate.getUTCSeconds()
    const milliseconds = currentDate.getUTCMilliseconds()
    day.textContent = dayOfTheWeek
    if (currentHour.length < 2) {
        currentHour = `0` + currentHour
    }
    if (currentMinute.length < 2) {
        currentMinute = `0` + currentMinute
    }
    time.textContent = `${day2}-${currentMonth + 1}-${currentYear} 
    ${currentHour}:${currentMinute}:${seconds}.${milliseconds}`
}

setInterval(setDate, 100);

const image = document.querySelector('.displayImage')
image.src = 'philipUdofia.png'

const track = document.querySelector('.myTrack')
track.textContent = 'FrontEnd'
