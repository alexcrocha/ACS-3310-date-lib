# D.js - JavaScript Date Helper Library

This library provides a simplified and more convenient way to work with JavaScript Date objects. With methods to easily extract the year, month, day, and other parts of a date, as well as formatting and relative time capabilities, D.js makes date manipulation in JavaScript a breeze.

## Table of Contents

- [Installation](#installation)
- [Importing](#importing)
- [Usage](#usage)
- [API](#api)

## Installation

```bash
npm install ar-date-lib
```

## Importing

```javascript
import D from 'ar-date-lib';
```

## Usage

### Constructors

The `D` class offers multiple ways to construct a date:

```javascript
const d1 = new D();               // Current date and time
const d2 = new D('01/01/2020');  // Initialize with a string
const d3 = new D(new Date());    // Initialize with a Date object
const d4 = new D(2020, 1, 1, 23, 22, 21); // Initialize with individual date and time components
```

#### Error Handling

If the constructor is given an invalid argument, it will throw an error:

```javascript
new D({});  // Throws an error
```

### Getters

The library provides a number of getters to easily access various date components:

- `D.year`:  Full year (e.g., 2021)
- `D.yr`:    Last two digits of the year (e.g., '21')
- `D.month`: Full name of the month (e.g., 'January')
- `D.mon`:   Abbreviated month (e.g., 'Jan')
- `D.day`:   Full name of the weekday (e.g., 'Monday')
- `D.dy`:    Abbreviated weekday (e.g., 'Mon')
- `D.date`:  Day of the month (e.g., 1)
- `D.hours`: Hour of the day (0-23)
- `D.mins`:  Minutes (0-59)
- `D.secs`:  Seconds (0-59)

### Formatting

Formatting Characters
- `'Y'`: 2019 (Year full)
- `'y'`: 19 (Year short)
- `'M'`: July (Month full)
- `'m'`: Jul (Month short)
- `'D'`: 01 (date padded)
- `'d'`: 1 (date)
- `'L'`: Monday (Weekday full)
- `'l'`: Mon (Weekday short)
- `'#'`: 1st (date with ordinal suffix: st, nd, rd or th)
- `'H'`: 05 (Hours padded)
- `'h'`: 5 (Hours)
- `'I'`: 08 (Minutes padded)
- `'i'`: 8 (Minutes)
- `'S'`: 04 (Seconds padded)
- `'s'`: 4 (Seconds)

You can use the `D.format()` method to format the date and time:

```javascript
const d = new D(2017, 0, 2, 3, 4, 5);

d.format();              // "2017 January 02"
d.format('y/m/d');       // "17/Jan/2"
d.format('H:I:S');       // "03:04:05"
d.format('h:i:s');       // "3:4:5"
d.format('Y-M-D h:I:S'); // "2017-January-02 3:04:05"
```

### `when()` Method

The `when()` method provides a readable string indicating when the date occurs relative to the current date:

```javascript
const d = new D();
d.when(); // 'today'

const d2 = new D(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3);
d2.when(); // '3 days from now'

const d3 = new D(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3);
d3.when(); // '3 days ago'
```

The method also works for future and past months and years.
