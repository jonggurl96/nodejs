# Moment.js

|API|Functions|
|-|-|
|[API docs](https://momentjs.com/docs/)|[API function](https://momentjs.com/guides/)|
```sh
npm i moment --save
npm start --mode=moment
```
# 사용법
```javascript
const moment = require('moment');
moment().format();

//Or in ES6 syntax:
import moment from 'moment';
moment().format();
```
`moment(params)의 params가 null, undefined, [], {}일 경우 현재 날짜`
```javascript
moment(); // 현재 날짜
moment(str); // 입력 날짜
moment(str, tokens: string...); // 입력 날짜, format
// tokens 중 가능한 첫 번째 token 적용
moment(str, tokens: string..., timezone: string); // 입력 날짜, format, timezone
moment(str, tokens: string..., isValidStrict: boolean); // 입력 날짜, format, isValid() 제한 여부

moment('It is 2012-05-25', 'YYYY-MM-DD').isValid();       // true
moment('It is 2012-05-25', 'YYYY-MM-DD', true).isValid(); // false
moment('2012-05-25',       'YYYY-MM-DD', true).isValid(); // true
moment('2012.05.25',       'YYYY-MM-DD', true).isValid(); // false

moment(str, tokens: string..., timezone: string, isValidStrict: boolean);

moment({unit: value, ...});
moment(milliseconds: number);
moment.unix(seconds: number);

moment(Date);
moment(Array[]);
// [year, month, day, hour, minute, second, millisecond]
moment(Moment) = Moment.clone();
moment(ASP.NET JSON Date: string);
// /Date(1198908717056-0700)/
```
# Manipulate
can method chaining
```javascript
moment().add(7, 'days').subtract(1, 'months').year(2023).hours(16).minutes(24).seconds(3);
```
- keys

|Keys|years|quarters|months|weeks|days|hours|minutes|seconds|milliseconds|
|-|-|-|-|-|-|-|-|-|-|
|Shorthand|y|Q|M|w|d|h|m|s|ms|
# Tokens
- uppercase tokens: Year, month, and day tokens

|4자리 year|2자리 year|분기|월|월 이름|일|일st|당해 누적 일 수|
|-|-|-|-|-|-|-|-|
|YYYY|YY|Q|M MM|MMM MMMM|D DD|Do|DDD DDDD|

- Week year, week, and weekday tokens

|4자리 year|2자리 year|주차|요일(0 ~ 6)|요일(Mon...)|요일(1 ~ 7)|
|-|-|-|-|-|-|
|gggg|gg|w ww|e|ddd dddd|E|

- Locale aware formats

|L|LL|LLL|LLLL|LT|LTS|
|-|-|-|-|-|-|
|09-04-1986|Sep 4 1986|Sep 4 1986 8:30 PM|Turs, Sep 4 1986 8:30 PM|8:30 PM|8:30:00 PM|

- Hour, minute, secont, millisecond, and offset tokens

|H HH|h hh|k kk|a A|m mm|s ss|S SS SSS ...|Z ZZ|
|-|-|-|-|-|-|-|-|
|0..23|1..12|1..24|am pm|0..59|0..59|0..999|+12:00|

---
# Alternatives
- # [Luxon](https://moment.github.io/luxon/)
    - Locales: [Intl](#Intl) provided
    - Time Zones: [Intl](#Intl) provided
- # [Day.js](https://day.js.org/)
    - Locales: Custom data files that can be individually imported
    - Time Zones: [Intl](#Intl) provided, via a plugin
- # [date-fns](https://date-fns.org/)
    - Locales: Custom data files that can be individually imported
    - Time Zones: [Intl](#Intl) provided, via a separate companion library
- # [js-Joda](https://js-joda.github.io/js-joda/)
    - Locales: Custom data files via add-on module
    - Time Zones: Custom data files via add-on module
- # Temporal
    - Javascript 내장 객체, Date와 Intl 지원
- # Intl
    - 각 언어에 맞는 문자비교, 숫자, 시간, 날짜비교를 제공하는 ECMAScript 국제화 API를 위한 namespace

