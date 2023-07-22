import { format, getDate, getDay, addMonths, subMonths,getMonth , endOfWeek, eachDayOfInterval, eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { useState } from 'react';

const Calendar: React.FC = () => {
  const [targetDate, setTargetDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  const getCalendarArray = (date: number | Date) => {
    const sundays = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date)
    })
    return sundays.map(sunday =>
      eachDayOfInterval({ start: sunday, end: endOfWeek(sunday) })
    );
  };
  const calendar = getCalendarArray(targetDate);

  const handleDateClick = (date: Date) => {
    const unixTime = date.getTime() / 1000;
    setSelectedDates(prevDates => {
      if (prevDates.includes(unixTime)) {
        return prevDates.filter(time => time !== unixTime).sort();
      } else {
        return [...prevDates, unixTime].sort();
      }
    });
  };

  const handlePreviousMonth = () => {
    setTargetDate(current => subMonths(current, 1));
  };

  const handleNextMonth = () => {
    setTargetDate(current => addMonths(current, 1));
  };

  const handleSubmit = () => {
    console.log(selectedDates);
  };

  return (
    <div className="grid w-[40%] my-2 mx-auto">
      <div className="my-2 text-3xl flex justify-center ">
        <button className="mr-auto text-2xl " onClick={handlePreviousMonth}>＜ {getMonth(subMonths(targetDate, 1)) + 1}月</button>
        {format(targetDate, 'y年M月')}
        <button className='ml-auto text-2xl ' onClick={handleNextMonth}>{getMonth(addMonths(targetDate, 1)) + 1}月 ＞</button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="py-2">日</th>
            <th className="py-2">月</th>
            <th className="py-2">火</th>
            <th className="py-2">水</th>
            <th className="py-2">木</th>
            <th className="py-2">金</th>
            <th className="py-2">土</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map(date => {
                const unixTime = date.getTime() / 1000;
                const isSelected = selectedDates.includes(unixTime);
                return (
                  <td key={getDay(date)} className="text-center py-1">
                    <button
                      onClick={() => handleDateClick(date)}
                      className={`btn btn-circle btn-outline ${isSelected ? 'btn-active' : ''}`}
                    >
                      {getDate(date)}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="btn btn-primary mt-4">送信</button>
    </div>
  )
}

export default Calendar;