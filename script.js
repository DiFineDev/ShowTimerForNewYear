'use strict'

function timer (newYear){
    const week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница', 'Суббота'];
    let placeForTimer = document.querySelector('.time');

    function getTimes() {
        let date = new Date(), 
            day = week[date.getDay()],
            timePM = date.toLocaleTimeString('en'),
            hours = date.getHours(),
            dateNow = date.getTime();
            return {day, timePM, hours, dateNow};
    }

    function timeToNewYear(){
        let date = new Date(newYear),
            dateNewYear = date.getTime();
        return dateNewYear;
    } 

    function getTimeRemaning(){
        const time = getTimes(),
              timeRemaning = (timeToNewYear() - time.dateNow) / 1000,
              dayRemaning = Math.floor(timeRemaning / 60 / 60 / 24);
        return dayRemaning;
    }

    function checkTimesOfDay() {
        let time = getTimes(),
            hours = time.hours;

        if (hours >= 0 && hours < 6) {
            return 'Доброй ночи'
        } else if (hours >= 6 && hours < 12) {
            return 'Доброе утро'
        } else if (hours >= 12 && hours < 18){
            return 'Добрый день'
        } else if (hours >= 18 && hours < 24 ) {
            return 'Добрый вечер'
        }
    }

    function result() {
        const time = getTimes();
        placeForTimer.innerHTML = `
        <div>${checkTimesOfDay()}</div>
        <div>Сегодня ${time.day}</div>
        <div>Текущее время: ${time.timePM}</div>
        <div>До нового года осталось ${getTimeRemaning()} дней</div>`
    }


    result();


}

timer('2022');

