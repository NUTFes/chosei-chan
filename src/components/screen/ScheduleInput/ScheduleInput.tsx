import classNames from 'classnames'
import format from 'date-fns/format'
import { useEffect, useMemo, useState } from 'react'
import { ScheduleInputProps } from './ScheduleInput.types'
import { Available } from '@/type/common'
import { dayDivideQuarterHour } from '@/utils/dayDivideQuarterHour'

const ScheduleInput: React.FC<ScheduleInputProps> = ({
  editUser,
  schedule,
  onChange,
}) => {
  const [selectedTimes, setSelectedTimes] = useState<number[]>([])

  const otherUserSelectedTimes = useMemo(() => {
    if (!schedule.users) return []
    if (schedule.users && schedule.users.length === 0) return []
    // schedule.users.availablesからselectedTimesを作る
    return schedule.users
      .map((user) => {
        if (!user.availables) return []
        return user.availables.reduce<number[]>((prev, available) => {
          const from = new Date(available.from).getTime()
          const to = new Date(available.to).getTime()
          const times = []
          for (let i = from; i < to; i += 15 * 60 * 1000) {
            times.push(i)
          }
          return [...prev, ...times]
        }, [])
      })
      .reduce<number[]>((prev, times) => [...prev, ...times], [])
  }, [schedule.users])

  const submitAvailableDates: Available[] | null = useMemo(() => {
    if (selectedTimes.length === 0) return null
    return selectedTimes.sort().reduce<Available[]>((prev, time, index) => {
      if (index === 0) return [{ from: time, to: time + 15 * 60 * 1000 }]
      const prevTime = selectedTimes[index - 1]
      const prevAvailable = prev[prev.length - 1]
      if (prevTime + 15 * 60 * 1000 === time) {
        return [
          ...prev.slice(0, prev.length - 1),
          {
            from: prevAvailable.from,
            to: time + 15 * 60 * 1000,
          },
        ]
      }
      return [...prev, { from: time, to: time + 15 * 60 * 1000 }]
    }, [])
  }, [selectedTimes])

  const handleSelectedTimes = (selectedTime: number) => {
    setSelectedTimes((prev) => {
      const index = prev.findIndex((prevTime) => prevTime === selectedTime)
      if (index === -1) return [...prev, selectedTime]
      return prev.filter((_, i) => i !== index)
    })
  }

  useEffect(() => {
    if (onChange) onChange(submitAvailableDates)
  }, [submitAvailableDates])

  return (
    <div className='flex w-full overflow-x-scroll rounded-lg bg-white p-8 pl-24'>
      {schedule.dates.map((date, dateIndex) => {
        const dividedDay = dayDivideQuarterHour(date)
        return (
          <div key={date} className='flex w-48 flex-col items-center gap-4'>
            <div className='flex w-2/3 justify-center rounded-md bg-primary px-2 py-1'>
              <p className='text-lg font-bold text-white'>{format(date, 'M/d')}</p>
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
                  className={classNames('h-3', {
                    'bg-secondary opacity-70': selectedTimes.includes(time),
                    'bg-primary opacity-70': otherUserSelectedTimes.includes(time),
                  })}
                  draggable
                  onDragEnter={() => {
                    handleSelectedTimes(time)
                  }}
                  onClick={() => {
                    handleSelectedTimes(time)
                  }}
                >
                  {timeIndex % 4 === 0 && dateIndex !== 0 && (
                    <p className='w-12 -translate-x-6 border-t' />
                  )}
                  {timeIndex % 4 === 0 && dateIndex === 0 && (
                    <p className='w-12 -translate-x-12 border-t'>
                      {format(time, 'HH:mm')}
                    </p>
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
