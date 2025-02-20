export const onDateChange = (date) => {
    if (date) {
      // Convert UTC date to IST
      const istDate = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
      setSelectedDate(istDate);
    }
  };