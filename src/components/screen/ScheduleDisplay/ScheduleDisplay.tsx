import classNames from 'classnames'
import { format } from 'date-fns'
import { ScheduleDisplayProps } from './ScheduleDisplay.types'
import { Schedule, User } from '@/type/common'

const sampling = 30
const divNum = 24 * (60 / sampling)
const TimeDiv = 86400000 / divNum

interface DateSchedules {
  [time: number]: number
}

function findMaxValue(dictionary: DateSchedules): number | undefined {
  let maxValue: number | undefined

  for (const key in dictionary) {
    const value = dictionary[key]
    if (typeof value === 'number' && (maxValue === undefined || value > maxValue)) {
      maxValue = value
    }
  }

  return maxValue
}

function timeCreate(schedule: Schedule): {
  dates: number[][]
  dateSchedules: DateSchedules
} {
  let dayEnd: number = 0
  const dates: number[][] = []
  let oneDay: number[] = []
  const dateSchedules: DateSchedules = {}
  schedule.dates.map((date) => {
    dayEnd = date + 86400000
    for (let i = date; i < dayEnd; i = i + TimeDiv) {
      oneDay.push(i)
      dateSchedules[i] = 0
    }
    dates.push(oneDay)
    oneDay = []
  })

  return { dates, dateSchedules }
}

function countSchedules(
  dateSchedules: DateSchedules,
  users: User[] | null,
): DateSchedules {
  if (!users) {
    return dateSchedules
  } else {
    users.map((user) => {
      user.availables?.map((available) => {
        for (let i = available.from; i < available.to; i += TimeDiv) {
          dateSchedules[i]++
        }
      })
    })
    return dateSchedules
  }
}

function colorArrayCreate(colors: string[], max: number | undefined): string[] {
  if (!max) {
    return ['bg-white']
  }
  const newColors: string[] = []
  const divNumber: number = colors.length / (max + 1)
  newColors.push(colors[0])
  if (colors.length < max) {
    for (let i = 1; i < max; i++) {
      if (Math.floor(i * divNumber) == 0) {
        newColors.push(colors[1])
      } else {
        newColors.push(colors[Math.floor(i * divNumber)])
      }
    }
  } else {
    for (let i = 1; i < max; i++) {
      newColors.push(colors[Math.ceil(i * divNumber)])
    }
    newColors[max] = colors[colors.length - 1]
  }
  return newColors
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedule }) => {
  const result = timeCreate(schedule)
  const newDates: number[][] = result.dates
  const dateSchedule: DateSchedules = result.dateSchedules

  const newDateSchedules = countSchedules(dateSchedule, schedule.users)

  const max = findMaxValue(newDateSchedules)
  const bgColorDefine = [
    'bg-opacity-100',
    'bg-opacity-10',
    'bg-opacity-20',
    'bg-opacity-30',
    'bg-opacity-40',
    'bg-opacity-50',
    'bg-opacity-60',
    'bg-opacity-70',
    'bg-opacity-80',
    'bg-opacity-90',
    'bg-opacity-100',
  ]
  const colors = colorArrayCreate(bgColorDefine, max)
  return (
    <div className='overflow-x-scroll rounded-lg'>
      <div className='flex items-center p-1 md:p-2'>
        <div className='flex flex-col'>{}</div>
        {schedule.dates.map((date, index) => (
          <>
            <div key={index}>
              <p className='select-none whitespace-nowrap border bg-primary px-4 text-sm tracking-wider text-white md:px-10 md:py-2 md:text-lg'>
                {format(date, 'M/d (E)')}
              </p>
              <div className='border'>
                {newDates[index].map((time, index) => (
                  <>
                    <div
                      className={classNames(
                        colors[newDateSchedules[time]],
                        { 'bg-pink-600': newDateSchedules[time] },
                        { 'bg-white': !newDateSchedules[time] },
                        'h-2 md:h-3',
                      )}
                      key={time}
                    >
                      <p
                        className={classNames(
                          { hidden: !(index % 2 == 0) },
                          { 'text-lime-50': newDateSchedules[time] },
                          { 'text-gray-300': !newDateSchedules[time] },
                          'text-xs select-none',
                        )}
                      >
                        {format(time, 'HH:mm')}
                      </p>
                    </div>
                    <hr className={classNames({ hidden: index % 2 == 0 })}></hr>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default ScheduleDisplay
