//Check leap years
isLeapYear = (year) => {
    return (year % 4 === 0)
}

//February Day Count
getFebDays = (year) => {
    return isLeapYear ? 29 : 28;
}

let calendar = document.querySelector('.calendar')

const month_names = ['January','February','March','April','May','June','July','August','September','October','November','December']

let month_picker = document.querySelector('#month-picker')

month_picker.onclick = () =>{
    month_list.classList.add('show')
}

generateCalendar = (month, year) =>{
    let calendar_days = document.querySelector('.calendar-days')
    let calendar_header_year = document.querySelector('#year')
    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let curDate = new Date()

    month_picker.innerHTML = month_names[month]
    calendar_header_year.innerHTML = year

    let first_day = new Date(month, year, 1)
    for(let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++){
        let day = document.createElement('div')
        if(i >= first_day.getDay()){
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
            <span></span>
            <span></span>
            <span></span>`
            if(i - first_day.getDay() + 1 === curDate.getDate() && year === curDate.getFullYear() && month === curDate.getMonth()){
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e,index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div>${e}</div>`
    month_list.appendChild(month)
})

let curDate = new Date()
let cur_month = {value: curDate.getMonth()}
let cur_year = {value: curDate.getFullYear()}

generateCalendar(cur_month.value, cur_year.value)