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

  format(mask: string = 'Y M D'): string {
    const dateTimeValues = {
      'Y': this.year,
      'y': this.yr,
      'M': this.month,
      'm': this.mon,
      'D': this.date.toString().padStart(2, '0'),
      'd': this.date,
      'L': this.day,
      'l': this.dy,
      '#': this.date + this.getOrdinalSuffix(this.date),
      'H': this.hours.toString().padStart(2, '0'),
      'h': this.hours,
      'I': this.mins.toString().padStart(2, '0'),
      'i': this.mins,
      'S': this.secs.toString().padStart(2, '0'),
      's': this.secs,
    };

    return this._format(mask, dateTimeValues);
  }

  when(): string {
    const now = new Date();

    const isFuture = this._date.getTime() > now.getTime();

    const yearsDifference = Math.abs(this._date.getFullYear() - now.getFullYear());
    const monthsDifference = Math.abs(this._date.getMonth() - now.getMonth());
    const daysDifference = Math.abs(this._date.getDate() - now.getDate());

    if (yearsDifference === 0 && monthsDifference === 0 && daysDifference === 0) {
      return 'today';
    }

    let description = '';

    if (yearsDifference !== 0) {
      description += `${yearsDifference} years `;
    }

    if (monthsDifference !== 0) {
      description += `${monthsDifference} months `;
    }

    if (daysDifference !== 0 && yearsDifference === 0) {
      description += `${daysDifference} days `;
    }

    description = description.trim() + (isFuture ? ' from now' : ' ago');

    return description;
  }

  private getOrdinalSuffix(date: number): string {
    if (date === 11 || date === 12 || date === 13) {
      return 'th';
    }

    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  private _format(mask: string, dateTimeValues: { [key: string]: string | number }): string {
    return mask.replace(/([YyMmDdLl#HhIiSs])/g, (character) => dateTimeValues[character]?.toString() || '');
  }
}
