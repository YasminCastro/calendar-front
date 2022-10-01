import moment from "moment";
import React, { useState } from "react";

import { useCalendar } from "../../providers/calendarProvider";
import { useReminder } from "../../providers/reminderProvider";
import ReminderModal from "../ReminderModal";
import { CalendarTable, DayButton, MonthContainer, Reminder } from "./styles";

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
  const { calendar, selectedDate, today } = useCalendar();
  const { reminders } = useReminder();
  const [openModal, setOpenModal] = useState(false);
  const [reminderDate, setReminderDate] = useState("");

  if (calendar.length === 0) {
    return <></>;
  }

  const dateClickHandler = (date: any) => {
    setOpenModal(true);
    setReminderDate(date);
  };

  const selectedMonth = moment(selectedDate).format("MM");
  const todayDate = moment(today).format("DD-MM-YYYY");

  return (
    <MonthContainer>
      <CalendarTable>
        <thead>
          <tr className="weekdays">
            {weekDays.map((weekday: string) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendar.map((week: any, index) => {
            return (
              <tr key={index} className="days">
                {week.days.map((dayObject: any) => {
                  const day = moment(dayObject).format("DD");
                  const month = moment(dayObject).format("MM");
                  const fullDate = moment(dayObject).format("DD-MM-YYYY");

                  const isThisMonth =
                    month === selectedMonth ? "this-month" : "other-month";
                  const isToday =
                    fullDate === todayDate ? "today" : "not-today";

                  return (
                    <td
                      className={`date ${isThisMonth} ${isToday}`}
                      key={fullDate}
                    >
                      <DayButton
                        onClick={(e) => {
                          dateClickHandler(e.currentTarget.value);
                        }}
                        value={fullDate}
                      >
                        {day}
                      </DayButton>
                      {reminders.map((reminder: any) => {
                        const date = moment(reminder.date).format("DD-MM-YYYY");

                        if (date === fullDate) {
                          return (
                            <Reminder color={reminder.colorHex}>
                              {reminder.message}
                            </Reminder>
                          );
                        }
                      })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </CalendarTable>
      {openModal && (
        <ReminderModal
          open={openModal}
          setOpen={setOpenModal}
          reminderDate={reminderDate}
          day={reminderDate}
        />
      )}
    </MonthContainer>
  );
};

export default Calendar;
