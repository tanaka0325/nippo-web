export default class Utils {
  static paddingZero(num) {
    return `0${num}`.slice(-2);
  }

  static toFormatDate(date) {
    const y = date.getFullYear();
    const m = this.paddingZero(date.getMonth() + 1);
    const d = this.paddingZero(date.getDate());
    return `${y}-${m}-${d}`;
  }

  static toDate(formatedDate) {
    const ary = formatedDate.split('-').map(s => parseInt(s, 10));
    return new Date(ary[0], ary[1] - 1, ary[2], 0, 0, 0);
  }

  static getToday() {
    return this.toFormatDate(new Date());
  }

  static getRelativeDate(formatedBaseDate, diff) {
    const bd = this.toDate(formatedBaseDate);
    const rd = new Date(bd.getFullYear(), bd.getMonth(), bd.getDate() + diff);

    return this.toFormatDate(rd);
  }

  static isToday(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

    return today.getTime() === this.toDate(date).getTime();
  }
}
