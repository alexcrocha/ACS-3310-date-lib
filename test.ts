import D from './src/index';

const d = new D();
const d2 = new D('01/01/2020');
const d3 = new D(new Date());
const d4 = new D(2020, 1, 1, 23, 22, 21);

describe('D constructor', () => {
  test('D()', () => {
    expect(d).toBeInstanceOf(D);
    expect(d2).toBeInstanceOf(D);
    expect(d3).toBeInstanceOf(D);
    expect(d4).toBeInstanceOf(D);
    expect(() => { new D({}) }).toThrowError();
  });
});

describe('D getters', () => {
  test('D.year', () => {
    expect(d.year).toBe(new Date().getFullYear());
    expect(d2.year).toBe(2020);
    expect(d3.year).toBe(new Date().getFullYear());
    expect(d4.year).toBe(2020);
  });

  test('D.yr', () => {
    expect(d.yr).toBe(new Date().getFullYear().toString().slice(-2));
    expect(d2.yr).toBe('20');
    expect(d3.yr).toBe(new Date().getFullYear().toString().slice(-2));
    expect(d4.yr).toBe('20');
  });

  test('D.month', () => {
    expect(d.month).toBe(new Date().toLocaleString('default', { month: 'long' }));
    expect(d2.month).toBe('January');
    expect(d3.month).toBe(new Date().toLocaleString('default', { month: 'long' }));
    expect(d4.month).toBe('February');
  });

  test('D.mon', () => {
    expect(d.mon).toBe(new Date().toLocaleString('default', { month: 'short' }));
    expect(d2.mon).toBe('Jan');
    expect(d3.mon).toBe(new Date().toLocaleString('default', { month: 'short' }));
    expect(d4.mon).toBe('Feb');
  });

  test('D.day', () => {
    expect(d.day).toBe(new Date().toLocaleString('default', { weekday: 'long' }));
    expect(d2.day).toBe('Wednesday');
    expect(d3.day).toBe(new Date().toLocaleString('default', { weekday: 'long' }));
    expect(d4.day).toBe('Saturday');
  });

  test('D.dy', () => {
    expect(d.dy).toBe(new Date().toLocaleString('default', { weekday: 'short' }));
    expect(d2.dy).toBe('Wed');
    expect(d3.dy).toBe(new Date().toLocaleString('default', { weekday: 'short' }));
    expect(d4.dy).toBe('Sat');
  });

  test('D.date', () => {
    expect(d.date).toBe(new Date().getDate());
    expect(d2.date).toBe(1);
    expect(d3.date).toBe(new Date().getDate());
    expect(d4.date).toBe(1);
  });

  test('D.hours', () => {
    expect(d.hours).toBe(new Date().getHours());
    expect(d2.hours).toBe(0);
    expect(d3.hours).toBe(new Date().getHours());
    expect(d4.hours).toBe(23);
  });

  test('D.mins', () => {
    expect(d.mins).toBe(new Date().getMinutes());
    expect(d2.mins).toBe(0);
    expect(d3.mins).toBe(new Date().getMinutes());
    expect(d4.mins).toBe(22);
  });

  test('D.secs', () => {
    expect(d.secs).toBe(new Date().getSeconds());
    expect(d2.secs).toBe(0);
    expect(d3.secs).toBe(new Date().getSeconds());
    expect(d4.secs).toBe(21);
  });
});

describe('D format', () => {
  const dFormat = new D(2017, 0, 2, 3, 4, 5)

  test('D.format()', () => {
    expect(dFormat.format()).toBe('2017 January 02');
  });

  test('D.format("y/m/d")', () => {
    expect(dFormat.format('y/m/d')).toBe('17/Jan/2');
  });

  test('D.format("H:I:S")', () => {
    expect(dFormat.format('H:I:S')).toBe('03:04:05');
  });

  test('D.format("h:i:s")', () => {
    expect(dFormat.format('h:i:s')).toBe('3:4:5');
  });

  test('D.format("Y-M-D h:I:S")', () => {
    expect(dFormat.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05');
  });

  test('D.format("L #")', () => {
    expect(dFormat.format('L #')).toBe('Monday 2nd');
  });

  test('D.format("D/M/Y")', () => {
    expect(dFormat.format('D/M/Y')).toBe('02/January/2017');
  });

  test('D.format("Y-Q-D")', () => {
    expect(dFormat.format('Y-Q-D')).toBe('2017-Q-02');
  });

  test('D.format("")', () => {
    expect(dFormat.format('')).toBe('');
  });

});

describe('when() method', () => {
  test('today', () => {
    const d = new D();
    expect(d.when()).toBe('today');
  });

  test('days from now', () => {
    const d = new D(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3);
    expect(d.when()).toBe('3 days from now');
  });

  test('days ago', () => {
    const d = new D(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3);
    expect(d.when()).toBe('3 days ago');
  });

  test('months ago', () => {
    const d = new D(new Date().getFullYear(), new Date().getMonth() - 6, new Date().getDate());
    expect(d.when()).toBe('6 months ago');
  });

  test('months from now', () => {
    const d = new D(new Date().getFullYear(), new Date().getMonth() + 3, new Date().getDate());
    expect(d.when()).toBe('3 months from now');
  });

  test('years from now', () => {
    const d = new D(new Date().getFullYear() + 5, new Date().getMonth(), new Date().getDate());
    expect(d.when()).toBe('5 years from now');
  });

  test('years ago', () => {
    const d = new D(new Date().getFullYear() - 5, new Date().getMonth(), new Date().getDate());
    expect(d.when()).toBe('5 years ago');
  });
});
