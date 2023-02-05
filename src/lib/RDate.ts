export class RDate {
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  W = 0;
  D = 0;
  M = 0;
  Y = 0;

  constructor(i = 0) {
    this.ms = i;
    this.s = i = i / 1000 | 0;
    this.m = i = i / 60 | 0;
    this.h = i = i / 60 | 0;
    this.D = i = i / 24 | 0;
    this.W = i = i / 7 | 0;
    this.M = i = i / 4 | 0;
    this.Y = i = i / 12 | 0;
  }

  getMinimum() {
    if (this.Y)
      return this.Y + ' years';

    if (this.M)
      return this.M + ' month';

    if (this.W)
      return this.W + ' weeks';

    if (this.D)
      return this.D + ' days';

    if (this.h)
      return this.h + ' hours';

    if (this.m)
      return this.m + ' minutes';

    if (this.s)
      return this.s + ' seconds';

    if (this.ms)
      return this.m + ' milliseconds';

    return 'now';
  }
}