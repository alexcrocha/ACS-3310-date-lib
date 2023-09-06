export default class D {
  private _date!: Date;

  constructor(...args: any[]) {
    if (args.length === 0) {
      this._date = new Date();
    } else if (args.length === 1) {
      const arg = args[0];
      if (typeof arg === 'string') {
        this._date = new Date(arg);
      } else if (arg instanceof Date) {
        this._date = new Date(arg);
      } else {
        throw new Error("Invalid argument");
      }
    } else if (args.length >= 2) {
      this._date = new Date(args[0], args[1], ...args.slice(2));
    }
  }

  get year(): number {
    return this._date.getFullYear();
  }

  get yr(): string {
    return this._date.getFullYear().toString().slice(-2);
  }

  get month(): string {
    return this._date.toLocaleString('default', { month: 'long' });
  }

  get mon(): string {
    return this._date.toLocaleString('default', { month: 'short' });
  }

  get day(): string {
    return this._date.toLocaleString('default', { weekday: 'long' });
  }

  get dy(): string {
    return this._date.toLocaleString('default', { weekday: 'short' });
  }

  get date(): number {
    return this._date.getDate();
  }

  get hours(): number {
    return this._date.getHours();
  }

  get mins(): number {
    return this._date.getMinutes();
  }

  get secs(): number {
    return this._date.getSeconds();
  }
}
