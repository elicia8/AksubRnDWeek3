import './App.css'
import Header from './Header'
import Form from './Form'
import TaskList from './TaskList'
import { useState } from 'react'

function App() {
  const [datas, setDatas] = useState([])
  function create(date, description) {
    const newData = {
      id: datas.length > 0 ? datas[datas.length-1].id + 1 : 1,
      date: date,
      description: description,
    }
    setDatas([...datas, newData])
  }
  return (
    <div className='container'>
      <Header />
      <Form create={create}/>
      <TaskList datas={datas}/>
      <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
    </div>
  )
}

export default App
