import {
  format,
  getDate,
  getDay,
  addMonths,
  subMonths,
  getMonth,
  endOfWeek,
  eachDayOfInterval,
  eachWeekOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns'
import { useState } from 'react'
import { CalenderProps } from './Calender.types'

const Calendar: React.FC<CalenderProps> = (onChange) => {
  const [targetMonth, setTargetMonth] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<number[]>([])

  const getCalendarArray = (date: Date) => {
    const sundays = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    })
    return sundays.map((sunday) =>
      eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) }),
    )
  }
  const calendar = getCalendarArray(targetMonth)

  const handleDateClick = (date: Date) => {
    const unixTime = date.getTime()
    setSelectedDates((prevDates) => {
      if (prevDates.includes(unixTime)) {
        return prevDates.filter((time) => time !== unixTime).sort()
      } else {
        return [...prevDates, unixTime].sort()
      }
    })
  }

  const handlePreviousMonth = () => {
    setTargetMonth((current) => subMonths(current, 1))
  }

  const handleNextMonth = () => {
    setTargetMonth((current) => addMonths(current, 1))
  }

  const handleSubmit = () => {
    console.log(selectedDates)
  }

  return (
    <div className='mx-auto my-2 grid w-2/5 '>
      <div className='my-2 flex justify-center text-3xl '>
        <button className='mr-auto text-2xl ' onClick={handlePreviousMonth}>
          ＜ {getMonth(subMonths(targetMonth, 1)) + 1}月
        </button>
        {format(targetMonth, 'y年M月')}
        <button className='ml-auto text-2xl ' onClick={handleNextMonth}>
          {getMonth(addMonths(targetMonth, 1)) + 1}月 ＞
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
              <th key={day} className='py-2'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map((date) => {
                const unixTime = date.getTime()
                const isSelected = selectedDates.includes(unixTime)
                return (
                  <td key={getDay(date)} className='py-1 text-center'>
                    <button
                      onClick={() => handleDateClick(date)}
                      className={`btn btn-circle btn-outline ${
                        isSelected ? 'btn-active' : ''
                      }`}
                    >
                      {getDate(date)}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className='btn btn-primary mt-4'>
        送信
      </button>
    </div>
  )
}

export default Calendar
