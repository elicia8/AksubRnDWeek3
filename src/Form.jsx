import Calendar from 'react-calendar'
import calendar from './assets/images/calendar.png'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react';

export default function Form({create}) {
    const [calendarVisible, setCalendarVisible] = useState(false)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [data, setData] = useState([])
    function handleCalendar() {
        setCalendarVisible(!calendarVisible);
    }
    function handleDate(selectedDate) {
        setDate(selectedDate.toLocaleDateString("en-GB", {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }))
    }
    function handleDescription(e) {
        setDescription(e.target.value)
    }
    function handleCreate() {
        if (!date || !description) return
        create(date, description)
    }
    return (
        <div className="form-container">
            <div className='input-container hanken-medium'>
                <label htmlFor="what" className='black'>What do you want to do?</label>
                <input type="text" className='textbox' id='what' placeholder='Study for mid exams...' onChange={handleDescription} />
            </div>
            <div className='input-container hanken-medium'>
                <label htmlFor="when" className='black'>When should it be done?</label>
                <input type="text" className='textbox' id='when' placeholder='Monday, 25 April 2025' value={date ? date : ''}readOnly />
                <img src={calendar} alt="calendar logo" className='calendar-logo' onClick={handleCalendar} />
                {calendarVisible &&
                    <div className='calendar-container'>
                        <Calendar onChange={handleDate} />
                    </div>
                }
            </div>
            <button className='hanken-semibold btn-create' onClick={handleCreate}>Create</button>
        </div>
    )
}