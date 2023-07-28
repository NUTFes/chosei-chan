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
      <div className='flex items-center'>
        {schedule.dates.map((date, index) => (
          <div key={index} className='flex flex-col'>
            <div>
              <div className='ml-auto w-12 translate-y-2 rounded-lg bg-neutral px-2 py-1 text-center text-sm text-white'>
                {format(date, 'E')}
              </div>
              <p className='select-none whitespace-nowrap rounded-t-xl border-x bg-primary px-10 py-2 text-lg tracking-wider text-white'>
                {format(date, 'M / d')}
              </p>
            </div>
            <div>
              {newDates[index].map((time, dates_index) => {
                const selectedUsers = schedule.users
                  ? schedule.users.filter(
                      (user) =>
                        user.availables?.some(
                          (available) => time >= available.from && time < available.to,
                        ),
                    )
                  : []

                const tooltipContent =
                  selectedUsers.length > 0
                    ? format(time, 'HH:mm') +
                      '\n' +
                      selectedUsers.map((user) => user.name).join(', ')
                    : ''
                return (
                  <>
                    <div
                      className={classNames(
                        colors[newDateSchedules[time]],
                        { 'bg-pink-600': newDateSchedules[time] },
                        { 'bg-white': !newDateSchedules[time] },
                        'h-4',
                        'tooltip h-4 flex',
                        { 'no-tooltip': selectedUsers.length === 0 },
                      )}
                      data-tip={tooltipContent}
                      key={time}
                    >
                      <p
                        className={classNames(
                          { hidden: !(dates_index % 2 == 0) },
                          { 'text-base-100': newDateSchedules[time] },
                          { 'text-neutral': !newDateSchedules[time] },
                          'text-xs select-none absolute left-0',
                        )}
                      >
                        {index === 0 && format(time, 'HH:mm')}
                      </p>
                    </div>
                    <hr className={classNames({ hidden: dates_index % 2 == 0 })} />
                  </>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleDisplay
