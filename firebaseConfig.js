// Import firebase core and auth module from react-native-firebase
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

// Configuration object for Firebase initialization
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // API key for Firebase project
  authDomain: "YOUR_AUTH_DOMAIN", // Auth domain for Firebase project
  projectId: "YOUR_PROJECT_ID", // Project ID for Firebase project
  storageBucket: "YOUR_STORAGE_BUCKET", // Storage bucket URL for Firebase project
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Messaging sender ID for Firebase project
  appId: "YOUR_APP_ID", // App ID for Firebase project
};

// Check if there are no initialized Firebase apps
if (!firebase.apps.length) {
  // Initialize Firebase app with the provided config
  firebase.initializeApp(firebaseConfig);
}

// Export the firebase instance for use in other parts of the app
export { firebase };
