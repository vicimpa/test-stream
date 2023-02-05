const CONVERT_REGEXP = /([+-]?\d+)(\w+)?/gm;
const START_DATE = +new Date();

export class FDate extends Date {
  get h() { return this.getHours(); }
  set h(v) { this.setHours(v); }

  get m() { return this.getMinutes(); }
  set m(v) { this.setMinutes(v); }

  get ms() { return this.getMilliseconds(); }
  set ms(v) { this.setMilliseconds(v); }

  get s() { return this.getSeconds(); }
  set s(v) { this.setSeconds(v); }

  get D() { return this.getDate(); }
  set D(v) { this.setDate(v); }

  get M() { return this.getMonth() + 1; }
  set M(v) { this.setMonth(v - 1); }

  get Y() { return this.getFullYear(); }
  set Y(v) { this.setFullYear(v); }

  append(string = '') {
    string.replace(
      CONVERT_REGEXP,
      (_, value: string, currency: string = 'ms') => {
        if (currency in this)
          (this as any)[currency] += +value;

        return '';
      }
    );

    return this;
  }

  static convert(string = '') {
    return +new FDate(START_DATE).append(string) - START_DATE;
  }
}