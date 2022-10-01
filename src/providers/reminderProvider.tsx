import moment from "moment";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IValue {
  selectedDate: any;
  setSelectedDate: React.Dispatch<React.SetStateAction<any>>;
  calendar: any[];
  setCalendar: React.Dispatch<React.SetStateAction<any[]>>;
  today: any;
}

const ReminderContext = createContext({} as IValue);

export const ReminderProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const reminder = {
    message: "",
    date: "",
    hour: "",
    color: "",
  };
  const todayDate = moment();
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [today, setToday] = useState(todayDate);
  const [calendar, setCalendar] = useState([] as any[]);

  useEffect(() => {
    const calendarArray = [];
    const startDay = selectedDate.clone().startOf("month").startOf("week");
    const endDay = selectedDate.clone().endOf("month").endOf("week");

    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day"))
      calendarArray.push({
        days: Array(7)
          .fill(0)
          .map(() => date.add(1, "day").clone()),
      });

    setCalendar(calendarArray);
  }, [selectedDate]);

  const value = useMemo(
    () => ({
      selectedDate,
      setSelectedDate,
      calendar,
      setCalendar,
      today,
    }),
    [selectedDate, setSelectedDate, calendar, setCalendar, today]
  );

  return (
    <ReminderContext.Provider value={value}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = () => useContext(ReminderContext);
