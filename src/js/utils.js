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
}
