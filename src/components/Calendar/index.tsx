import moment from "moment";
import React from "react";

import { useCalendar } from "../../providers/calendarProvider";
import { CalendarTable, DayButton, MonthContainer } from "./styles";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Calendar = () => {
  const { calendar, selectedDate } = useCalendar();

  if (calendar.length === 0) {
    return <></>;
  }

  const dateClickHandler = (date: any) => {
    console.log(date);
  };

  const selectedMonth = moment(selectedDate).format("MM");
  const today = moment(selectedDate).format("DD-MM-YYYY");

  return (
    <MonthContainer>
      <CalendarTable>
        <thead>
          <tr className="weekdays">
            {weekDays.map((day: any) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendar.map((week: any) => {
            return (
              <tr className="days">
                {week.days.map((dayObject: any) => {
                  const day = moment(dayObject).format("DD");
                  const month = moment(dayObject).format("MM");
                  const fullDate = moment(dayObject).format("DD-MM-YYYY");

                  const isThisMonth =
                    month === selectedMonth ? "this-month" : "other-month";
                  const isToday = fullDate === today ? "today" : "not-today";

                  return (
                    <td
                      className={`date ${isThisMonth} ${isToday}`}
                      key={`${day}-${month}`}
                    >
                      <DayButton
                        onClick={(e) => {
                          dateClickHandler(e.currentTarget.value);
                        }}
                        value={fullDate}
                      >
                        {day}
                      </DayButton>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </CalendarTable>
    </MonthContainer>
  );
};

export default Calendar;
