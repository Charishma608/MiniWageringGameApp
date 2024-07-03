import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

// GameCard component receives two props: game (an object containing game details) and onPress (a function to handle button press)
const GameCard = ({ game, onPress }) => {
  return (
    // Container for the game card
    <View style={styles.card}>
      {/* Display the game image */}
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      {/* Display the game title */}
      <Text style={styles.title}>{game.title}</Text>
      {/* Display the game description */}
      <Text style={styles.description}>{game.description}</Text>
      {/* Button to view more details about the game */}
      <Button title="View Details" onPress={onPress} />
    </View>
  );
};

// StyleSheet to define the styles for the component
const styles = StyleSheet.create({
  // Style for the game image
  image: {
    width: '100%', // Image takes full width of the card
    height: 150, // Fixed height for the image
    borderRadius: 5, // Rounded corners for the image
  },
  // Style for the card container
  card: {
    marginBottom: 10, // Space below each card
    padding: 10, // Padding inside the card
    backgroundColor: '#fff', // White background color
    borderRadius: 5, // Rounded corners
    shadowColor: '#000', // Shadow color
    shadowOpacity: 0.1, // Shadow opacity
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowRadius: 5, // Shadow blur radius
  },
  
  // Style for the game description
  description: {
    fontSize: 14, // Font size for the description
    color: '#666', // Gray text color
  },
  // Style for the game title
  title: {
    fontSize: 18, // Font size for the title
    fontWeight: 'bold', // Bold font weight
    marginVertical: 5, // Vertical margin
  },
  
});

// Exporting the GameCard component so it can be used in other parts of the app
export default GameCard;
