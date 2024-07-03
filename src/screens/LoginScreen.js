import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '../services/firebaseConfig';
import useUserStore from '../stores/useUserStore';//Import zustand store

// LoginScreen component handles user login with email and password
const LoginScreen = ({ navigation }) => {
  // State variables to hold email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useUserStore((state) => state.setUser); // Zustand's setUser function

  // Function to handle login button press
  const handleLogin = () => {
    // Firebase authentication to sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user); // Store user info in Zustand store
        // Navigate to Home screen on successful login
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error); // Log any errors that occur during login
      });
  };

  return (
    // Container view for the login screen
    <View style={styles.container}>
      {/* Title of the login screen */}
      <Text style={styles.title}>Login</Text>
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
      {/* Button to trigger the login process */}
      <Button title="Login" onPress={handleLogin} />
      {/* Button to navigate to the signup screen */}
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

// Stylesheet for the LoginScreen component
const styles = StyleSheet.create({
  // Style for input fields
  input: {
    borderWidth: 1.2, // Border width
    borderColor: '#ccc', // Border color
    padding: 11, // Padding inside input field
    borderRadius: 5.3, // Border radius
    marginBottom: 11, // Bottom margin
  },
  // Style for the title text
  title: {
    fontSize: 23.8, // Font size
    marginBottom: 22, // Bottom margin
    textAlign: 'center', // Center align text
  },
  // Style for the main container
  container: {
    flex: 1, // Flex to take full available space
    justifyContent: 'center', // Center align content vertically
    padding: 21, // Padding inside the container
  },
});

// Exporting the LoginScreen component for use in other parts of the app
export default LoginScreen;
