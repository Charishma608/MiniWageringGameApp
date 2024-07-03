## MiniWageringGameApp

Welcome to WageringGameApp! This app allows users to browse and join various games, view game details, and includes a feature that tracks steps using the device's pedometer.

### Setup Instructions

To get started with WageringGameApp, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/Charishma608/MiniWageringGameApp.git>
   cd WageringGameApp
   ```
2. **Install Dependencies:**
  ```bash
    npm install
     # or
    yarn install
```
3.**Configure Firebase**
To use Firebase services in the app, you need to configure your Firebase project. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/) if you haven't already. Then, obtain your Firebase configuration object:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", 
  authDomain: "YOUR_AUTH_DOMAIN", 
  projectId: "YOUR_PROJECT_ID", 
  storageBucket: "YOUR_STORAGE_BUCKET", 
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID", 
};
```

4.**Run the app**
###Start the Metro bundler
```bash
npx react-native start
```
###For Android
```bash
npx react-native run-android
```
###For ios
```bash
npx react-native run-ios
```

**App Architecture**
```bash
WageringGameApp/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/           # Main app screens
│   ├── services/          # External services (e.g., Firebase configuration)
│   ├── stores/            # Zustand stores for managing application state
│   ├── App.js             # Main component that sets up navigation
│   ├── firebaseConfig.js  # Firebase configuration setup
│   ├── app.json           # App metadata and configuration
│   ├── index.js           # App entry point
│   ├── babel.config.js    # Babel configuration
│   ├── metro.config.js    # Metro bundler configuration
│   
│
├── android/               # Android native project files (hidden)
├── ios/                   # iOS native project files (hidden)
├── package.json           # Node.js dependencies and scripts
└── package-lock.json      # Lock file for npm dependencies
```





