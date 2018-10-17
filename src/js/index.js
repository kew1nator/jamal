/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
import password from './config';

const connection = new WebSocket('ws://104.248.143.87:1337');

connection.onopen = () => {
  console.log('uppkoppling startad...');
};
connection.onerror = error => {
  console.log(`Error: ${error}`);
};
connection.onmessage = message => {;
  const textEl = document.getElementById('logger');
  const obj = JSON.parse(message.data);
  if (obj.type = 'heartbeat'){
textEl.textcontent += `${obj.data}, `;
  }
console.log(message);
connection.onclose = () => {
  console.log('uppkoppling nedstängd...');
};

const btnEl = document.getElementById('btn');
const textEl = document.getElementById('logger');
btnEl.addEventListener('click', () => {
  const obj = {
    type: 'heartbeat',
    data: '',
    key: password
  };
  const jsonObj = JSON.stringify(obj);
  connection.send(jsonObj);
});
