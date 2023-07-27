export const dayDivideQuarterHour = (unixTime: number): number[] => {
  const date = new Date(unixTime)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const start = new Date(year, month, day, 0, 0, 0).getTime()
  const end = new Date(year, month, day, 23, 59, 59).getTime()
  const result = []
  for (let i = start; i <= end; i += 1800 * 1000) {
    result.push(i)
  }
  return result
}
