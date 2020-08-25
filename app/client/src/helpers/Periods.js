const YEAR_CURRENT = new Date().getFullYear();
const YEARS = [YEAR_CURRENT - 1, YEAR_CURRENT, YEAR_CURRENT + 1];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const PERIODS = [];
YEARS.forEach((year) => {
  MONTHS.forEach((month) => {
    const currentPeriod = `${year}-${month.toString().padStart(2, "0")}`;
    PERIODS.push(currentPeriod);
  });
});

export default PERIODS;
