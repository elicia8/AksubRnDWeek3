import Category from "./Category"

export default function TaskList({ datas }) {
    const today = new Date().toLocaleDateString("en-GB", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const todayData = datas.filter((data) => data.date === today)
    const otherData = datas.filter((data) => data.date !== today)
    return (
        <div className="tasklist-container">
            <Category datas={todayData}>Today</Category>
            <Category datas={otherData}>Other</Category>
        </div>
    )
}