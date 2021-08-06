import { initializeApp, getApp } from "firebase/app";

let app
try {
	app = getApp()
} catch(e) {
	app = initializeApp({
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "scaledwings-52252.firebaseapp.com",
	projectId: "scaledwings-52252",
	storageBucket: "scaledwings-52252.appspot.com",
	messagingSenderId: "361720642186",
	appId: "1:361720642186:web:5115eb42fcc830ade3cb73",
	measurementId: "G-ZKP7DSVJPN"
});
}

export default app;