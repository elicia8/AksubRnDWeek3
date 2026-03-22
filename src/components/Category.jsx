import { useState } from 'react'
import arrowDown from '../assets/images/arrow-down.png'
import arrowUp from '../assets/images/arrow-up.png'
import Task from './Task'
import calendar from '../assets/images/calendar.png'
export default function Category({ children, datas}) {
    const [visible, setVisible] = useState(true)
    return (
        <div>
            <div className="category-container">
                <img src={visible ? arrowDown : arrowUp} alt="arrow down" className="arrow" onClick={() => setVisible(!visible)} />
                <div className="category-container">
                    <img src={calendar} alt="calendar" className='calendar-image' />
                    <h3 className='inter-medium px-16 text-center-vertical'>{children}</h3>
                    <p className='inter-medium px-16 data-length'>{datas.length}</p>
                </div>
            </div>
            <div className='task-container'>
                {visible && (datas ? datas.map((data) => (<Task key={data.id} data={data}/>)) : '')}
            </div>
        </div>
    )
}