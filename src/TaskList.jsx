import { useState } from "react"
import arrowDown from './assets/images/arrow-down.png'
import arrowUp from './assets/images/arrow-up.png'
export default function TaskList({ datas }) {
    const [todayVisible, setTodayVisible] = useState(true)
    return (
        <div>
            <img src={todayVisible ? arrowDown : arrowUp} alt="arrow down" className="arrow" onClick={() => setTodayVisible(!todayVisible)}/>
            <h3>Today</h3>
            {todayVisible && (datas ? datas.map((data) => (<p key={data.id}>{data.description}</p>)) : '')}
        </div>
    )
}