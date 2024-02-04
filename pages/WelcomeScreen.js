import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require("../media/logo.png")} style={styles.logo} />
        <Text style={styles.title}>AlzheimerCare</Text>
        <Text style={styles.subtitle}>Let’s get started!</Text>
        <Text style={styles.description}>Login to stay healthy and fit</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.buttonText, { color: "#007aff" }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  contentContainer: {
    width: "100%", // Full width
    maxWidth: 480, // Max width for web and larger screens
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 5,
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "#8e8e93",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    maxWidth: 300,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007aff",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    maxWidth: 300,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
