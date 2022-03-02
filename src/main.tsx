//@ts-ignore
import { render } from 'preact';
import { App } from './App';
import './index.css';

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/sw.js');
	}
}


render(<App />, document.getElementById('app')!)
