export default class Utils {
  static paddingZero(num) {
    return `0${num}`.slice(-2);
  }

  static formatDate(date) {
    const y = date.getFullYear();
    const m = this.paddingZero(date.getMonth() + 1);
    const d = this.paddingZero(date.getDate());
    return `${y}-${m}-${d}`;
  }

  static isToday(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 0, 0, 0);

    const dateAry = date.split('-').map(s => parseInt(s, 10));
    const dispDate = new Date(dateAry[0], dateAry[1], dateAry[2], 0, 0, 0);

    return today.getTime() === dispDate.getTime();
  }
}
