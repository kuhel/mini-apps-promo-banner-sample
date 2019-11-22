import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';

// Init VK App
connect.sendPromise('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));
