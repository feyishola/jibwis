import { useEffect, useState } from 'react';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyATVozXpEBhD9j2tBZGE_Vl2xrQNbaBmTY",
    authDomain: "hass-7eec8.firebaseapp.com",
    projectId: "hass-7eec8",
    storageBucket: "hass-7eec8.appspot.com",
    messagingSenderId: "1019675700941",
    appId: "1:1019675700941:web:dad1f96bddf12f149ac384",
    measurementId: "G-SP3WP27F5K"
};

const useFirebaseMessaging = () => {
    const [fcmToken, setFcmToken] = useState(null);

    useEffect(() => {
        const initializeFirebase = async () => {
            try {
                // Import Firebase config from your file
                const { initializeApp } = await import('firebase/app');
                const firebaseApp = initializeApp(firebaseConfig);

                // Retrieve Firebase Messaging object.
                const messaging = getMessaging(firebaseApp);

                // Request permission for receiving notifications
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    // Get the token
                    const token = await getToken(messaging, { vapidKey:"BBNZFcCVhz4TcnmtB5Qgbv9UjTEbLIn91yyfbj9LkHgKDe898nDGkGsgFWTQkz6NFvXAgXMBIqqh0oHfImDTdQw" });
                    setFcmToken(token);

                    // Add the message event listener
                    const unsubscribe = onMessage(messaging, (payload) => {
                        console.log('Message received:', payload);
                        // Handle the received message as needed
                    });

                    // Clean up the subscription when the component unmounts
                    return () => {unsubscribe();console.log("unmounted")}
                } else {
                    console.error('Permission denied');
                }
            } catch (error) {
                console.error('Error initializing Firebase:', error);
            }
        };

        initializeFirebase();
    }, []); // Run this effect only once on mount

    // You can add additional functions or state as needed
    const subscribeToTopic = (topic) => {
        // Implement subscription logic if needed
    };

    const unsubscribeFromTopic = (topic) => {
        // Implement unsubscription logic if needed
    };

    return { fcmToken, subscribeToTopic, unsubscribeFromTopic };
};

export default useFirebaseMessaging;
