import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";

const { width, height } = Dimensions.get("window");
const formWidth = width > 480 ? 480 : width * 0.9;
const formHeight = height * 0.6;

const SignInScreen = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [fData, setFData] = useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState(null);

  const handleSignIn = () => {
    if (!fData.email || !fData.password) {
      setErrormsg("Please fill all fields!");
      return;
    } else {
      fetch("http://10.0.2.2:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            setErrormsg(data.error);
          } else {
            alert("login successfully");
            navigation.navigate("Home");
          }

          // // Assuming 'data' contains a field that can be checked to confirm login success
          // if (data.success) {
          //   // Handle successful sign-in here
          //   navigation.navigate("NextScreen"); // Adjust 'NextScreen' to your target screen
          // } else {
          //   // Handle login failure (e.g., wrong credentials) here
          //   setErrormsg("Login failed. Please check your credentials.");
          // }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrormsg("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Image source={require("../media/logo.png")} style={styles.logo} />
          </View>
          {errormsg ? <Text style={styles.errorMsg}>{errormsg}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8e8e93"
            value={fData.email}
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setFData({ ...fData, email: text })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8e8e93"
            value={fData.password}
            onFocus={() => setErrormsg(null)}
            onChangeText={(text) => setFData({ ...fData, password: text })}
            secureTextEntry
          />
          <View style={styles.wrapper}>
            <Checkbox
              value={agree}
              onValueChange={setAgree}
              color={agree ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>Agree to terms and conditions</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: agree ? "#4630EB" : "grey" },
            ]}
            disabled={!agree}
            onPress={handleSignIn}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Don't have an account?
            <Text
              style={styles.signUpButton}
              onPress={() => navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles remain unchanged

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    marginLeft: 8,
    flexDirection: "row", // Set flexDirection to 'row' to make children align horizontally
    alignSelf: "flex-start", // Center children vertically within the container
  },
  text: {
    color: "#8e8e93",

    marginLeft: 8, // Adjust the margin to create space between checkbox and text
  },
  formContainer: {
    width: formWidth,
    height: formHeight,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  headerContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  footerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 16,
    color: "#8e8e93",
  },
  signUpButton: {
    fontWeight: "bold",
    color: "#007aff",
  },
});
export default SignInScreen;
