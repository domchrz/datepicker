export default class Day {
  constructor(date = null, lang = 'default') {
    this.Date = date ?? new Date();
    this.lang = lang;
    this.date = this.Date.getDate();
    this.day = this.Date.toLocaleString(this.lang, { weekday: 'long' });
    this.dayShort = this.Date.toLocaleString(this.lang, { weekday: 'short' });
    this.dayNumber = this.Date.getDay() || 7;
    this.year = this.Date.getFullYear();
    this.yearShort = +this.Date.toLocaleString(this.lang, { year: '2-digit' });
    this.monthNumber = this.Date.toLocaleDateString(this.lang, { month: '2-digit' });
    this.month = this.Date.toLocaleString(this.lang, { month: 'long' });
    this.monthShort = this.Date.toLocaleString(this.lang, { month: 'short' });
    this.timeStamp = this.Date.getTime();
    this.week = this.getWeekNumber();
  }

  getWeekNumber() {
    const firstDayOfTheYear = new Date(this.year, 0, 1);
    const pastDaysOfTheYear = (this.Date - firstDayOfTheYear) / 86400000;

    return Math.ceil((pastDaysOfTheYear + firstDayOfTheYear.getDay()) / 7);
  }

  get isToday() {
    return this.isEqualTo(new Date());
  }

  isEqualTo(date) {
    date = date instanceof Day ? date.Date : date;

    return (
      date.getDate() === this.date &&
      date.getMonth() === this.monthNumber - 1 &&
      date.getFullYear() === this.year
    );
  }

  format(formatStr) {
    return formatStr
      .replace(/\bYYYY\b/, this.year)
      .replace(/\bYYY\b/, this.yearShort)
      .replace(/\bWWW\b/, this.week.toString().padStart(2, '0'))
      .replace(/\bWW\b/, this.week)
      .replace(/\bDDDD\b/, this.day)
      .replace(/\bDDD\b/, this.dayShort)
      .replace(/\bDD\b/, this.date.toString().padStart(2, '0'))
      .replace(/\bD\b/, this.date.toString().padStart(2, '0'))
      .replace(/\bMMMM\b/, this.month)
      .replace(/\bMMM\b/, this.monthShort)
      .replace(/\bMM\b/, this.monthNumber.toString().padStart(2, '0'))
      .replace(/\bM\b/, this.monthNumber);
  }
}

export const day = new Day(null, 'en');

console.log(day.format('DD/MM/YYY'));
