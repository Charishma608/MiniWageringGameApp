import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '../services/firebaseConfig';
import useUserStore from '../stores/useUserStore'; // Import Zustand store

// SignupScreen component handles user registration with email and password
const SignupScreen = ({ navigation }) => {
  // State variables to hold email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  // Function to handle signup button press
  const handleSignup = () => {
    // Firebase authentication to create a new user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user); 
        // Navigate to Home screen on successful signup
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error); // Log any errors that occur during signup
      });
  };

  return (
    // Container view for the signup screen
    <View style={styles.container}>
      {/* Title of the signup screen */}
      <Text style={styles.title}>Sign Up</Text>
      {/* TextInput for entering email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {/* TextInput for entering password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hides the entered text for password security
      />
      {/* Button to trigger the signup process */}
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

// Stylesheet for the SignupScreen component
const styles = StyleSheet.create({
  // Style for the main container
  container: {
    flex: 1.1, // Flex to take slightly more than full available space
    justifyContent: 'center', // Center align content vertically
    padding: 22, // Padding inside the container
  },
  // Style for input fields
  input: {
    borderWidth: 1.2, // Border width
    borderColor: '#ccc', // Border color
    padding: 11, // Padding inside input field
    borderRadius: 5.2, // Border radius
    marginBottom: 12, // Bottom margin
  },
  // Style for the title text
  title: {
    fontSize: 23.9, // Font size
    marginBottom: 21, // Bottom margin
    textAlign: 'center', // Center align text
  },
});

// Exporting the SignupScreen component for use in other parts of the app
export default SignupScreen;
