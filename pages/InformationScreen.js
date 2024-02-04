import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");
const formWidth = width > 480 ? 480 : width * 0.9;

const InformationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [selectedAge, setSelectedAge] = useState("Select Age");
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [selectedEducation, setSelectedEducation] =
    useState("Select Education");

  const ageOptions = [
    "Select Age",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65+",
  ];
  const languageOptions = [
    "Select Language",
    "English",
    "Spanish",
    "French",
    "German",
    "Urdu",
  ];
  const genderOptions = ["Select Gender", "Male", "Female"];
  const educationOptions = [
    "Select Education",
    "Middle School",
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D.",
  ];

  // const handleSubmission = () => {
  //   // Implement your submission logic here
  // };
  const handleSubmission = () => {
    navigation.navigate("Home");
  };

  const logoSource = require("../media/logo.png");

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoSource} style={styles.logo} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.halfPicker}
            selectedValue={selectedAge}
            onValueChange={(itemValue) => setSelectedAge(itemValue)}
          >
            {ageOptions.map((age, index) => (
              <Picker.Item key={index} label={age} value={age} />
            ))}
          </Picker>

          <Picker
            style={styles.halfPicker}
            selectedValue={selectedGender}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
          >
            {genderOptions.map((gender, index) => (
              <Picker.Item key={index} label={gender} value={gender} />
            ))}
          </Picker>
        </View>

        <Picker
          style={styles.fullPicker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          {languageOptions.map((language, index) => (
            <Picker.Item key={index} label={language} value={language} />
          ))}
        </Picker>

        <Picker
          style={styles.fullPicker}
          selectedValue={selectedEducation}
          onValueChange={(itemValue) => setSelectedEducation(itemValue)}
        >
          {educationOptions.map((education, index) => (
            <Picker.Item key={index} label={education} value={education} />
          ))}
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmission}>
          <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: "#fff",
  },
  formContainer: {
    width: formWidth,
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
  input: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
  },
  pickerContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  halfPicker: {
    flex: 1,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  fullPicker: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default InformationScreen;
