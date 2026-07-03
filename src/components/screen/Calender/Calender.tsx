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
import { useState, useEffect, useRef } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { CalenderProps } from './Calender.types'

const Calender: React.FC<CalenderProps> = ({ onChange }) => {
  const [targetMonth, setTargetMonth] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<number[]>([])
  const isDragging = useRef(false)
  const dragMode = useRef<'select' | 'deselect'>('select')

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

  const selectDate = (date: Date) => {
    const t = date.getTime()
    setSelectedDates((prev) => (prev.includes(t) ? prev : [...prev, t].sort()))
  }

  const deselectDate = (date: Date) => {
    const t = date.getTime()
    setSelectedDates((prev) => prev.filter((x) => x !== t).sort())
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>, date: Date) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    const t = date.getTime()
    dragMode.current = selectedDates.includes(t) ? 'deselect' : 'select'
    isDragging.current = true
    dragMode.current === 'select' ? selectDate(date) : deselectDate(date)
  }

  const handlePointerEnter = (date: Date) => {
    if (!isDragging.current) return
    dragMode.current === 'select' ? selectDate(date) : deselectDate(date)
  }

  const handleKeyboardClick = (e: React.MouseEvent, date: Date) => {
    if (e.detail !== 0) return
    const t = date.getTime()
    selectedDates.includes(t) ? deselectDate(date) : selectDate(date)
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

  useEffect(() => {
    const stop = () => {
      isDragging.current = false
    }
    document.addEventListener('pointerup', stop)
    document.addEventListener('pointercancel', stop)
    return () => {
      document.removeEventListener('pointerup', stop)
      document.removeEventListener('pointercancel', stop)
    }
  }, [])

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
                      onPointerDown={(e) => handlePointerDown(e, date)}
                      onPointerEnter={() => handlePointerEnter(date)}
                      onClick={(e) => handleKeyboardClick(e, date)}
                      style={{ touchAction: 'none' }}
                      className={classNames(
                        'btn btn-circle btn-outline h-10 min-h-fit w-10 min-w-fit select-none md:btn-md',
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
