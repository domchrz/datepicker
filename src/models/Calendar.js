import Day from './Day';
import Month from './Month';

export default class Calendar {
  constructor(year = null, monthNumber = null, lang = 'en') {
    this.lang = lang;
    this.today = new Day(null, this.lang);
    this.year = year ?? this.today.year;
    this.month = new Month(
      new Date(this.year, (monthNumber ?? this.today.monthNumber) - 1),
      this.lang
    );

    this.weekDays = Array.from({ length: 7 });

    this.weekDays.forEach((_, i) => {
      const day = this.month.getDay(i);
      if (this.weekDays.includes(day.day)) return;

      this.weekDays[day.dayNumber - 1] = day.day.slice(0, 2);
    });

    this[Symbol.iterator] = function* () {
      let number = 1;
      yield this.getMonth(number);
      while (number < 12) {
        ++number;
        yield this.getMonth(number);
      }
    };
  }

  getMonth(monthNumber) {
    return new Month(new Date(this.year, monthNumber), this.lang);
  }

  getPreviousMonth() {
    if (this.month.number === 1) {
      return new Month(new Date(this.year - 1, 11), this.lang);
    }
    return new Month(new Date(this.year, this.month.number - 2), this.lang);
  }

  getNextMonth() {
    if (this.month.number === 12) {
      return new Month(new Date(this.year + 1, 1), this.lang);
    }
    return new Month(new Date(this.year, this.month.number), this.lang);
  }

  goToDate(monthNumber, year) {
    this.month = new Month(new Date(year, monthNumber - 1), this.lang);
    this.year = year;
  }

  goToPreviousYear() {
    this.year -= 1;
    this.month = new Month(new Date(this.year, 0), this.lang);
  }

  goToNextYear() {
    this.year += 1;
    this.month = new Month(new Date(this.year, 11), this.lang);
  }

  goToPreviousMonth() {
    if (this.month.number === 1) {
      return this.goToNextYear();
    }
    this.month = new Month(new Date(this.year, this.month.number - 2), this.lang);
  }

  goToNextMonth() {
    if (this.month.number === 12) {
      return this.goToNextYear();
    }
    this.month = new Month(new Date(this.year, this.month.number), this.lang);
  }

  getMonthDaysGrid() {
    const firstDayOfTheMonth = this.month.getDay(1);
    const totalLastMonthFinalDays = firstDayOfTheMonth.dayNumber - 1;
    const totalDays = this.month.numberOfDays + totalLastMonthFinalDays;
    const monthList = Array.from({ length: totalDays });
    const prevMonth = this.getPreviousMonth();

    for (let i = totalLastMonthFinalDays; i < totalDays; i++) {
      monthList[i] = {
        day: this.month.getDay(i + 1 - totalLastMonthFinalDays),
        isCurrentMonth: true,
      };
    }

    for (let i = 0; i < totalLastMonthFinalDays; i++) {
      monthList[i] = {
        day: prevMonth.getDay(prevMonth.numberOfDays - totalLastMonthFinalDays + i + 1),
        isCurrentMonth: false,
      };
    }

    const newLength = monthList.length <= 35 ? 35 : 42;

    for (let i = totalDays; i < newLength; i++) {
      monthList[i] = {
        day: this.getNextMonth().getDay(i - totalDays + 1),
        isCurrentMonth: false,
      };
    }

    // const newMonthList = monthList.map((_, idx) => {
    //   if (idx < totalLastMonthFinalDays) {
    //     const prevMonth = this.getPreviousMonth();
    //     return prevMonth.getDay(prevMonth.numberOfDays - totalLastMonthFinalDays + idx + 1);
    //   } else if (idx < totalDays) {
    //     return this.month.getDay(idx + 1 - totalLastMonthFinalDays);
    //   } else {
    //     const nextMonth = this.getNextMonth();
    //     return nextMonth.getDay(idx - totalDays + 1);
    //   }
    // });

    return monthList;
  }

  getYearsList() {
    const yearsList = [];
    let i = 1959;
    let j = +this.year > +this.today.year ? +this.year : +this.today.year;
    while (i < j + 1) {
      yearsList.push(i);
      i++;
    }

    yearsList.reverse()

    let years = [];

    // console.log(yearsList.length)

    const k = yearsList.length % 16 ? Math.floor(yearsList.length / 16 ) + 1 : Math.floor(yearsList.length / 16 );

    // console.log(yearsList)

    for (let i = 0; i < k; i++) {
      // let length;
      // if ((yearsList.length - (i * 16)) % 16) {
      //   length = (yearsList.length - (i * 16)) % 16
      // }
      const spliceTo = i * 16 + 16 > yearsList.length ? yearsList.length : i * 16 + 16
      // console.log((i * 16 + 16))
      // console.log(length)
      years = [...years, yearsList.slice(i * 16, spliceTo).reverse()]      
    }
    years.reverse()
    // console.log(years)

    return years;
  }

  get isLeapYear() {
    return this.month.isLeapYear(this.year);
  }
}

export const calendar = new Calendar(null, null, 'en');

calendar.getMonthDaysGrid();
