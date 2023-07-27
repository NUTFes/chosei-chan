import classNames from 'classnames'
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
import { useState, useEffect } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { CalenderProps } from './Calender.types'

const Calender: React.FC<CalenderProps> = ({ onChange }) => {
  const [targetMonth, setTargetMonth] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<number[]>([])

  const getCalenderArray = (date: Date) => {
    const sundays = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    })
    return sundays.map((sunday) =>
      eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) }),
    )
  }
  const calender = getCalenderArray(targetMonth)

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

  useEffect(() => {
    onChange(selectedDates)
  }, [selectedDates])

  return (
    <div className='flex-col'>
      <div className='flex items-center justify-center text-3xl'>
        <button
          type='button'
          className='btn btn-ghost mr-auto p-2 text-lg md:ml-auto md:text-xl'
          onClick={handlePreviousMonth}
        >
          <MdArrowBackIosNew /> {getMonth(subMonths(targetMonth, 1)) + 1}月
        </button>
        {format(targetMonth, 'y年M月')}
        <button
          type='button'
          className='btn btn-ghost ml-auto p-2 text-lg md:mr-auto md:text-xl'
          onClick={handleNextMonth}
        >
          {getMonth(addMonths(targetMonth, 1)) + 1}月 <MdArrowForwardIos />
        </button>
      </div>
      <table className='mx-auto'>
        <thead>
          <tr>
            {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
              <th key={day} className='md:p-2 md:text-lg'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calender.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map((date) => {
                const unixTime = date.getTime()
                const isSelected = selectedDates.includes(unixTime)
                return (
                  <td key={getDay(date)} className='pt-1 text-center md:px-1'>
                    <button
                      type='button'
                      draggable
                      onClick={() => handleDateClick(date)}
                      onDragEnter={(e) => {
                        handleDateClick(date)
                        e.preventDefault()
                      }}
                      className={classNames(
                        'btn btn-circle btn-outline h-10 min-h-fit w-10 min-w-fit md:btn-md',
                        isSelected ? 'btn-active' : '',
                      )}
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
    </div>
  )
}

export default Calender
