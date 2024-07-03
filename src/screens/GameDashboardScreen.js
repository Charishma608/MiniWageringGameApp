import React, { useEffect, useState } from 'react'; // Import necessary hooks and components from React
import { View, Text, StyleSheet } from 'react-native'; // Import necessary components from React Native
import { usePedometer } from '@react-native-community/hooks'; // Import the usePedometer hook for pedometer functionality
import useUserStore from '../stores/useUserStore'; // Import Zustand store

const GameDashboardScreen = ({ route }) => {
  // Destructure the 'game' object from route parameters
  const { game } = route.params;

  // State to hold the step count
  const [stepCount, setStepCount] = useState(0);

  // State to check if the pedometer is available on the device
  const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
  const user = useUserStore((state) => state.user); 

  // Destructure functions and data from the usePedometer hook
  const { start, stop, isAvailable, data } = usePedometer();

  // useEffect to check pedometer availability and start tracking steps
  useEffect(() => {
    const checkAvailability = async () => {
      const available = await isAvailable(); // Check if pedometer is available
      setIsPedometerAvailable(available); // Update state based on availability
      if (available) {
        start(); // Start pedometer if available
      }
    };

    checkAvailability(); // Call the function to check availability

    return () => {
      stop(); // Stop the pedometer when the component unmounts
    };
  }, []);

  // useEffect to update the step count whenever the pedometer data changes
  useEffect(() => {
    if (data) {
      setStepCount(data.numberOfSteps); // Update step count from pedometer data
    }
  }, [data]);

  return (
    // Main container view
    <View style={styles.container}>
      {/* Display the game title */}
      <Text style={styles.title}>{game.title}</Text>
      {/* Display the game description */}
      <Text style={styles.description}>{game.description}</Text>
      {/* Display the step count or availability message */}
      <Text style={styles.pedometer}>
        {isPedometerAvailable ? `Steps: ${stepCount}` : 'Pedometer is not available on this device'}
      </Text>
       {/* Display logged in user info */}
       {user && (
        <View style={styles.userInfo}>
          <Text style={styles.userEmail}>Logged in as: {user.email}</Text>
        </View>
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    padding: 20, // Add padding around the container
  },
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    marginBottom: 10, // Margin below the title
  },
  description: {
    fontSize: 16, // Font size for the description
    color: '#666', // Gray color for the description text
    marginBottom: 20, // Margin below the description
  },
  pedometer: {
    fontSize: 18, // Font size for the pedometer text
    fontWeight: 'bold', // Bold font weight for the pedometer text
  },
});

// Export the component as the default export
export default GameDashboardScreen;
