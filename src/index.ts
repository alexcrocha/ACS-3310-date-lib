class D {
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
}
