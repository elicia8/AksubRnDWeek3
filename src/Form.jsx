import Calendar from 'react-calendar'
import calendar from './assets/images/calendar.png'
import { useState } from 'react';

export default function Form() {
    const [calendarVisible, setCalendarVisible] = useState(false)
    function handleCalendar() {
        setCalendarVisible(!calendarVisible);
    }
    return (
        <div className="form-container">
            <div className='input-container hanken-medium'>
                <label htmlFor="what" className='black'>What do you want to do?</label>
                <input type="text" className='textbox' id='what' placeholder='Study for mid exams...' />
            </div>
            <div className='input-container hanken-medium'>
                <label htmlFor="when" className='black'>When should it be done?</label>
                <input type="text" className='textbox' id='when' placeholder='Monday, 25th April 2025' />
                <img src={calendar} alt="calendar logo" className='calendar-logo' onClick={handleCalendar} />
                {calendarVisible &&
                    <div className='calendar-container'>
                        <Calendar />
                    </div>
                }
            </div>
            <button className='hanken-semibold btn-create'>Create</button>
        </div>
    )
}