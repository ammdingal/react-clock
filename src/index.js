/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import React from 'react';  
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function updateTime() {
	const currentDate = new Date();
	let hours = currentDate.getHours();
	const amOrPm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;
	const minutes = currentDate.getMinutes();
	const seconds = currentDate.getSeconds();
	const formattedTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;
  
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {formattedTime}.</h2>
		</div>
	);
	root.render(element);
}
  
setInterval(updateTime, 1000);

