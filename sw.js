importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.1/workbox-sw.js');

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`);
} else {
	console.log(`Boo! Workbox didn't load 😬`);
}

workbox.setConfig({
	debug: false
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
	'/',
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	'/manifest.json',
	workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
	/\.(?:png|jpg|svg)$/,
	workbox.strategies.staleWhileRevalidate()
);