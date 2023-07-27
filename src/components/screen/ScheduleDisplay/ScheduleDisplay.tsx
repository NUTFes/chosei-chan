import classNames from 'classnames'
import { ScheduleDisplayProps } from './ScheduleDisplay.types'
import { Schedule, User } from '@/type/common'

const sampling = 30
const divNum = 24 * (60 / sampling)
const TimeDiv = 86400 / divNum

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

function unixToDate(unixtime: number): string {
  const dateTime = new Date(unixtime * 1000)
  return dateTime.toLocaleDateString()
}

function unixToTime(unixtime: number): string {
  const dateTime = new Date(unixtime * 1000)
  return dateTime.toLocaleTimeString()
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
    dayEnd = date + 86400
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
  users: User[] | undefined,
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
    return []
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
    for (let i = 1; i <= max; i++) {
      newColors.push(colors[Math.ceil(i * divNumber)])
    }
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
    'bg-white',
    'bg-fuchsia-200',
    'bg-fuchsia-300',
    'bg-fuchsia-400',
    'bg-fuchsia-500',
    'bg-fuchsia-600',
  ]
  const colors = colorArrayCreate(bgColorDefine, max)
  console.log(colors)
  return (
    <div className='overflow-x-scroll rounded-lg bg-info-content'>
      <div className='flex justify-center p-1 md:p-2'>
        <div className='flex flex-col'>{}</div>
        {schedule.dates.map((date, index) => (
          <>
            <div className='flex flex-col' key={index}>
              <p className='select-none border bg-secondary-focus p-1 text-xs tracking-wider text-white md:px-5 md:text-base'>
                {unixToDate(date)}
              </p>
              <div className='border'>
                {newDates[index].map((time, index) => (
                  <>
                    <div
                      className={classNames(colors[newDateSchedules[time]], 'h-2 md:h-3')}
                      key={time}
                    >
                      <p
                        className={classNames(
                          { hidden: !(index % 2 == 0) },
                          { 'text-lime-50': newDateSchedules[time] },
                          { 'text-zinc-300': !newDateSchedules[time] },
                          'text-xs select-none align-top',
                        )}
                      >
                        {unixToTime(time).slice(0, -3)}
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
