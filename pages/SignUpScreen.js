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
  Platform,
} from "react-native";
import Checkbox from "expo-checkbox";

const { width, height } = Dimensions.get("window");
const formWidth = width > 480 ? 480 : width * 0.9;
const formHeight = width > 480 ? 480 : width * 0.9;

const SignUpScreen = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [fData, setfData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState(null);

  // const validateEmail = async (email) => {
  //   const apiKey = "YOUR_ZEROBOUNCE_API_KEY";
  //   const apiUrl = `https://api.zerobounce.net/v2/validate?apikey=${apiKey}&email=${email}`;

  //   try {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();

  //     //return data.status === "Valid";
  //     return true;
  //   } catch (error) {
  //     console.error("Error validating email:", error);
  //     return false;
  //   }
  // };

  //     setErrormsg("Please fill all fields!");
  //   }

  const Sendtobackend = async () => {
    if (!fData.name || !fData.email || !fData.password) {
      setErrormsg("Please fill all fields!");
      return;
    } else if (!(fData.name.length >= 6)) {
      setErrormsg("Name must be at least 6 characters long");
      return;
    } else if (!(fData.password.length >= 8)) {
      setErrormsg("Password must be at least 8 characters long");
      return;
    } else if (!(fData.email.length >= 8)) {
      setErrormsg("Must be valid email address");
      return;
    } else if (!fData.email.includes("@") || !fData.email.includes(".com")) {
      setErrormsg("Must be a valid email address");
      return;
    } else {
      const response = await fetch("http://10.0.2.2:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setErrormsg(data.error);
          } else {
            alert("Account created successfully");
            navigation.navigate("SignIn");
          }
        });

      // if (!response.ok) {
      //   setErrormsg(data.error);
      // }
      // //throw new Error("Response not OK");

      // const data = await response.json();

      // if (data.error) {
      //   setErrormsg(data.error);
      // } else {
      //   alert("Account created successfully");
      //   navigation.navigate("SignIn");
      // }
    }
    // catch (error) {
    //   console.error("Error sending data to backend:", error);
    //   setErrormsg("Failed to sign up. Please try again.");
    // }
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
            onFocus={() => setErrormsg(null)}
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#8e8e93"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setfData({ ...fData, name: text })}
          />
          <TextInput
            onFocus={() => setErrormsg(null)}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#8e8e93"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setfData({ ...fData, email: text })}
          />
          <TextInput
            onFocus={() => setErrormsg(null)}
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8e8e93"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setfData({ ...fData, password: text })}
          />

          <View style={styles.wrapper}>
            <Checkbox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>Agree to terms and conditions</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: agree ? "#4630EB" : "grey" },
            ]}
            onPress={Sendtobackend}
            disabled={!agree}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.signInButton}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        paddingBottom: 40, // Adjust paddingBottom for Android
      },
    }),
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
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  formContainer: {
    width: formWidth,
    //height: formHeight,
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10, // Add marginTop for spacing
    marginBottom: 20, // Add marginTop for spacing
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
    ...Platform.select({
      android: {
        paddingBottom: 20, // Adjust paddingBottom for Android
      },
    }),
  },
  footerText: {
    fontSize: 16,
    color: "#8e8e93",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
  },
  signInButton: {
    fontWeight: "bold",
    color: "#007aff",
  },
});

export default SignUpScreen;
