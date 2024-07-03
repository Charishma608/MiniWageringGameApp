import { AppRegistry } from 'react-native'; // Import the AppRegistry from react-native
import App from './App'; // Import the main App component
import { name as appName } from './app.json'; // Import the app name from the app.json file

// Register the main App component with AppRegistry
// The app will start by running the component registered with AppRegistry
AppRegistry.registerComponent(appName, () => App);
