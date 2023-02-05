export class FDate extends Date {
  get h() { return this.getHours(); }
  set h(v) { this.setHours(v); }

  get m() { return this.getMinutes(); }
  set m(v) { this.setMinutes(v); }

  get s() { return this.getSeconds(); }
  set s(v) { this.setSeconds(v); }

  get D() { return this.getDate(); }
  set D(v) { this.setDate(v); }

  get M() { return this.getMonth() + 1; }
  set M(v) { this.setMonth(v - 1); }

  get Y() { return this.getFullYear(); }
  set Y(v) { this.setFullYear(v); }
}