import { useState } from "react"
import DateLabel from "./DateLabel"
export default function Task({ data }) {
    const [checked, setChecked] = useState(false)
    function handleChecked() {
        setChecked(!checked)
    }
    return (
        <div className={`task-and-deadline ${checked ? 'bg-checked' : ''}`}>
            <div className="task-box inter-medium px-16">
                <input type="checkbox" id={data.id} onClick={handleChecked} className="checkbox" />
                <p key={data.id} className={`text-center-vertical ${checked ? 'task-checked' : ''}`}>{data.description}</p>
            </div>
            <DateLabel label={data.deadline} decor={data.deadline === 'Today' ? 'today' : data.deadline === 'Tomorrow' ? 'tomorrow' : 'other'} />
        </div>
    )
}