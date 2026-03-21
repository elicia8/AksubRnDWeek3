import { useState } from "react"

export default function TaskList({ datas }) {
    const [todayVisible, setTodayVisible] = useState(true)
    return (
        <div>
            <button onClick={() => setTodayVisible(!todayVisible)}>^</button>
            <h3>Today</h3>
            {todayVisible && (datas ? datas.map((data) => (<p key={data.id}>{data.description}</p>)) : '')}
        </div>
    )
}