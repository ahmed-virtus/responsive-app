/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// index.js
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './src/navigation';
// import "./global.css"

const App = () => (
    <Navigation />
);

AppRegistry.registerComponent(appName, () => App);
