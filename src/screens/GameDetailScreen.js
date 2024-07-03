import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

// GameDetailScreen component receives a 'route' prop, which contains the 'game' object
const GameDetailScreen = ({ route, navigation }) => {
  // Destructuring to extract the 'game' object from route.params
  const { game } = route.params;

  return (
    // Container for the game detail screen
    <View style={styles.container}>
      {/* Display the game image */}
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      {/* Display the game title */}
      <Text style={styles.title}>{game.title}</Text>
      {/* Display the game description */}
      <Text style={styles.description}>{game.description}</Text>
      <Button
        title="Join Game"
        onPress={() => navigation.navigate('GameDashboard', { game })}
      />
    </View>
  );
};

// StyleSheet to define the styles for the component
const styles = StyleSheet.create({
  // Style for the game image
  image: {
    width: '100%', // Image takes full width of the container
    height: 200, // Fixed height for the image
    borderRadius: 5, // Rounded corners for the image
  },
  // Style for the container
  container: {
    flex: 1, // Flex to take full available space
    padding: 10, // Padding inside the container
  },
  // Style for the game description
  description: {
    fontSize: 16, // Font size for the description
    color: '#666', // Gray text color
  },
  // Style for the game title
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Bold font weight
    marginVertical: 10, // Vertical margin
  },
});

// Exporting the GameDetailScreen component so it can be used in other parts of the app
export default GameDetailScreen;
