import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ShopCard from "./components/ShopCard";
import StarRating from "./components/Stars";
import "./App.css"
import MessageHistory from "./components/MessageHistory";


const item = [{
  id: 1,
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men minimalistic overcoat in cotton-blend. Features a stand-up collar,' +
      'concealed front closure and single back vent. Slim fit with clean, ' +
      'straight shape. Above-knee length.',
  price: 399,
  currency: '£',}];

// const item = "Test"

const messages = [{
  id: 'chat-5-1090',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:10',
  text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
}, {
  id: 'chat-5-1091',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:12',
  text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
}, {
  id: 'chat-5-1092',
  from: { name: 'Ольга' },
  type: 'response',
  time: '10:14',
  text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
}, {
  id: 'chat-5-1093',
  from: { name: 'Виктор' },
  type: 'message',
  time: '10:20',
  text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
}, {
  id: 'chat-5-1094',
  from: { name: 'Виктор' },
  type: 'typing',
  time: '10:31'
}];



function App() {
  return (<div>
    <Greeting />
    <Counter />
    <ShopCard item={item} />
    <StarRating />
    <MessageHistory messages={messages}/>
  </div>);
}

export default App;
