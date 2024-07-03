import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameDetailScreen from './screens/GameDetailScreen';
import GameDashboardScreen from './screens/GameDashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Create a stack navigator
const Stack = createStackNavigator();

// Main App component
const App = () => {
  return (
    // Navigation container for managing navigation state
    <NavigationContainer>
      {/* Stack navigator to manage different screens in the app */}
      <Stack.Navigator initialRouteName="Login">
        {/* Define screens in the stack navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen} />
        <Stack.Screen name="GameDashboard" component={GameDashboardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the App component as the default export
export default App;
