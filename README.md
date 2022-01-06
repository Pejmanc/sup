## Introduction

This is a voice-controlled React application called 'SUP?-
Powered by: Alan AI Voice Assistant and NEWS API

## Alan

I used Alan - https://alan.app/ - to add voice capability to my application. This API has an interface called Alan Studio to create "command"s so that by allowing your browser to access your mic it captures your voice as a command and reacts to them based on "intet"s I have already set in my Alan Studio. For example here is an intent:

```
intent(`(Give me news from | tell me news from )$(source* (.+))`)
```

and based on this I implemented some logic like this:

```
let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
console.log(p.source.value);
```

Then I use these logics and commands to interact with my react application:

```
p.play({command : 'newHeadlines', articles});
p.play(`Here are the (latest|recent news|most recent news) from ${p.source.value}.`)
p.play('Would you like me to read the headlines?');
p.then(confirmation);
```

As you saw I used another API (NEWS API) inside Alan to access news.

Live code on: https://whatsup-now.netlify.app/

## NEWS API

For all the data used in the application I used NEWS API - https://newsapi.org/ . In this API we can get the news by searching the "category", "source", etc.

## Setup

- run `npm i && npm start` to start development server
