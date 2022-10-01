import "moment/locale/pt-br";
import moment from "moment";
import React, { createContext, useContext, useMemo } from "react";

const CalendarContext = createContext({});

const monthNames = moment().calendar();

export const CalenderProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  console.log("monthNames", monthNames);

  const value = useMemo(() => ({}), []);

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
