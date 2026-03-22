import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TaskList from './components/TaskList'
import { useEffect, useState } from 'react'

function App() {
  const [datas, setDatas] = useState(() => {
    const saved = sessionStorage.getItem("datas")
    if (saved) {
      const parsed = JSON.parse(saved)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const newArr = parsed.filter(data => {
        const deadline = new Date(data.date)
        deadline.setHours(0, 0, 0, 0)
        const selisih = (deadline - today) / 86400000
        return selisih >= 0
      })
      newArr.forEach(data => {
        const deadline = new Date(data.date)
        deadline.setHours(0, 0, 0, 0)
        const selisih = (deadline - today) / 86400000
        if (selisih === 0) data.deadline = 'Today'
        else if (selisih === 1) data.deadline = 'Tomorrow'
      });

      return newArr
    }
    return []
  })
  useEffect(() => {
    sessionStorage.setItem("datas", JSON.stringify(datas))
  }, [datas])
  function create(date, description, deadline) {
    const newData = {
      id: datas.length > 0 ? datas[datas.length - 1].id + 1 : 1,
      date: date,
      description: description,
      deadline: deadline,
    }
    setDatas([...datas, newData])
  }
  return (
    <div className='container'>
      <Header />
      <Form create={create} />
      <TaskList datas={datas} />
      <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
    </div>
  )
}

export default App
