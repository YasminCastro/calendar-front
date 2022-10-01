import React, { Fragment } from "react";
import useCalendarOld from "../../hooks/useCalendarOld";

import { useCalendar } from "../../providers/calendarProvider";

const Calendar = () => {
  const {} = useCalendar();
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendarOld();

  const dateClickHandler = (date: any) => {
    console.log(date);
  };

  return (
    <Fragment>
      <p>
        Selected Month:{" "}
        {`${
          monthNames[selectedDate.getMonth()]
        } - ${selectedDate.getFullYear()}`}
      </p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map((day: any) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols: any) => {
            return (
              <tr key={cols[0].date}>
                {cols.map((col: any) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`${col.classes} today`}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      {col.value}
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={col.classes}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      {col.value}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>
        Prev
      </button>
      <button className="button" onClick={getNextMonth}>
        Next
      </button>
    </Fragment>
  );
};

export default Calendar;
