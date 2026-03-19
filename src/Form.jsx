export default function Form() {
    return (
        <div className="form-container">
            <div className='input-container hanken-medium'>
                <label htmlFor="what" className='black'>What do you want to do?</label>
                <input type="text" className='textbox' id='what' placeholder='Study for mid exams...' />
            </div>
            <div className='input-container hanken-medium'>
                <label htmlFor="when" className='black'>When should it be done?</label>
                <input type="text" className='textbox' id='when' placeholder='Monday, 25th April 2025' />
            </div>
            <button className='hanken-semibold'>Create</button>
        </div>
    )
}