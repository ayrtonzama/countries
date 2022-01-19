# Countries

Countries is a [Next.js](https://nextjs.org/) front-end displaying data from the [rest country api](https://restcountries.com/#api-endpoints-v2).

## Installation

Install Node.js 
Follow node install instructions from [node installer](https://nodejs.org/en/download/).

```bash
git clone http
cd country
npm install
```

## Usage
Application should run on http://localhost:3000

Run theses command in your terminal.
### To run in Development
```
npm run dev
```
### To build
```
npm run build
```
### To Run
```
npm run start
```
###  To run Cypress Tests
1. first build if you have not before.
2. Start application 
3. Run Cypress
```
npm run build 
npm run start
```
** Note
run on a separate terminal
```
npm run cypress:open
```

## Side Note
* Region section uses version 3 of api because during development restcountry api regional endpoint was returning 404.
