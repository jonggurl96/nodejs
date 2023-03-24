# Async

## *lotto*
> ajax를 이용해 lotto api 정보를 읽어오는 동안 Pace.js로 로딩 표시
```javascript
const url = `www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
```
- 1회차: 2002년 12월 7일 토요일
- 매 주마다 방영

## *moment* - Ver 2.29.4
> 로또 추첨 날짜를 이용해 회차를 계산하기 위해 moment.js 사용
```sh
npm install moment --save
```

## *async connection*
> node 18 이상부터 [*비동기통신 fetch*](https://developer.mozilla.org/en-US/docs/Web/API/fetch) 사용 가능
```javascript
const res = await fetch("URL"); // Response 객체 반환
if(res.ok) {
    const data = await res.json();
}
```