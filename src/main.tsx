//@ts-ignore
import { render } from 'preact';
import { App } from './App';
import './index.css';

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.ready.then(registration => {
		registration.unregister();
		console.log("Worker Removed");
	});
}

else {
	console.log("No service worker to remove");
}
render(<App />, document.getElementById('app')!)
