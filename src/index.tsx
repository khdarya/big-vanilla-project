import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {splitIntoWords} from "./01-hello-tests/01";

const sentence = "Hello my friend!";
const result = splitIntoWords(sentence)
console.log(result[0] === "hello");
console.log(result[1] === "my");
console.log(result[2] === "friend");


ReactDOM.render(<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
