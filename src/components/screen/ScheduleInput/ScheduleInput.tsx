import classNames from 'classnames'
import format from 'date-fns/format'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ScheduleInputProps } from './ScheduleInput.types'
import { Available } from '@/type/common'
import { dayDivideQuarterHour } from '@/utils/dayDivideHalfHour'

const ScheduleInput: React.FC<ScheduleInputProps> = ({
  editUser,
  schedule,
  onChange,
}) => {
  const initialSelectedTimes = useMemo(() => {
    if (!editUser || !schedule.users || schedule.users.length === 0) return []
    const user = schedule.users.find((user) => user.name === editUser.name)
    if (!user || !user.availables) return []
    return user.availables.reduce<number[]>((prev, available) => {
      const from = new Date(available.from).getTime()
      const to = new Date(available.to).getTime()
      const times = []
      for (let i = from; i < to; i += 30 * 60 * 1000) {
        times.push(i)
      }
      return [...prev, ...times]
    }, [])
  }, [editUser])
  const [selectedTimes, setSelectedTimes] = useState<number[]>(initialSelectedTimes)
  const isDragging = useRef(false)
  const dragMode = useRef<'select' | 'deselect'>('select')

  const otherUserSelectedTimes = useMemo(() => {
    if (!schedule.users) return []
    if (schedule.users && schedule.users.length === 0) return []
    const all_user_time = schedule.users
      .map((user) => {
        if (!user.availables) return []
        return user.availables.reduce<number[]>((prev, available) => {
          const from = new Date(available.from).getTime()
          const to = new Date(available.to).getTime()
          const times = []
          for (let i = from; i < to; i += 30 * 60 * 1000) {
            times.push(i)
          }
          return [...prev, ...times]
        }, [])
      })
      .reduce<number[]>((prev, times) => [...prev, ...times], [])

    return all_user_time.filter((time) => !initialSelectedTimes.includes(time))
  }, [schedule.users])

  const submitAvailableDates: Available[] | null = useMemo(() => {
    if (selectedTimes.length === 0) return null
    return selectedTimes.sort().reduce<Available[]>((prev, time, index) => {
      if (index === 0) return [{ from: time, to: time + 30 * 60 * 1000 }]
      const prevTime = selectedTimes[index - 1]
      const prevAvailable = prev[prev.length - 1]
      if (prevTime + 30 * 60 * 1000 === time) {
        return [
          ...prev.slice(0, prev.length - 1),
          {
            from: prevAvailable.from,
            to: time + 30 * 60 * 1000,
          },
        ]
      }
      return [...prev, { from: time, to: time + 30 * 60 * 1000 }]
    }, [])
  }, [selectedTimes])

  const selectTime = (time: number) => {
    setSelectedTimes((prev) => (prev.includes(time) ? prev : [...prev, time]))
  }

  const deselectTime = (time: number) => {
    setSelectedTimes((prev) => prev.filter((t) => t !== time))
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>, time: number) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    dragMode.current = selectedTimes.includes(time) ? 'deselect' : 'select'
    isDragging.current = true
    dragMode.current === 'select' ? selectTime(time) : deselectTime(time)
  }

  const handlePointerEnter = (time: number) => {
    if (!isDragging.current) return
    dragMode.current === 'select' ? selectTime(time) : deselectTime(time)
  }

  const handleKeyboardClick = (e: React.MouseEvent, time: number) => {
    if (e.detail !== 0) return
    selectedTimes.includes(time) ? deselectTime(time) : selectTime(time)
  }

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

  useEffect(() => {
    if (onChange) onChange(submitAvailableDates)
  }, [submitAvailableDates])

  return (
    <div className='carousel flex w-full gap-1 rounded-lg bg-white p-8 pl-24'>
      {schedule.dates.map((date, dateIndex) => {
        const dividedDay = dayDivideQuarterHour(date)
        return (
          <div
            key={date}
            className='carousel-item flex w-screen shrink-0 flex-col items-center gap-4 md:w-48'
          >
            <div className='flex w-screen justify-center rounded-t-xl bg-primary px-2 py-1 md:w-11/12 md:rounded-xl'>
              <p className='w-screen py-1 text-center text-xl text-white'>
                {format(date, 'M/d (E)')}
              </p>
            </div>
            <div
              className={classNames(
                'flex w-full flex-col border-r-2',
                dateIndex === 0 && 'border-l-2',
              )}
            >
              {dividedDay.map((time, timeIndex) => (
                <div
                  key={time}
                  className={classNames('h-6 select-none', {
                    'bg-secondary': selectedTimes.includes(time),
                    'bg-primary': otherUserSelectedTimes.includes(time),
                  })}
                  style={{ touchAction: 'pan-x' }}
                  onPointerDown={(e) => handlePointerDown(e, time)}
                  onPointerEnter={() => handlePointerEnter(time)}
                  onClick={(e) => handleKeyboardClick(e, time)}
                >
                  {timeIndex % 2 === 0 && <p className='w-12 -translate-x-6 border-t' />}
                  {timeIndex % 2 === 0 && dateIndex === 0 && (
                    <p className='absolute -translate-x-12'>{format(time, 'HH:mm')}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ScheduleInput
