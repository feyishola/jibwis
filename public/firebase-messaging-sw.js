importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyATVozXpEBhD9j2tBZGE_Vl2xrQNbaBmTY",
    authDomain: "hass-7eec8.firebaseapp.com",
    projectId: "hass-7eec8",
    storageBucket: "hass-7eec8.appspot.com",
    messagingSenderId: "1019675700941",
    appId: "1:1019675700941:web:dad1f96bddf12f149ac384",
    measurementId: "G-SP3WP27F5K"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
   const noti =  new Notification("hello worrld");
   noti("test this one")
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });