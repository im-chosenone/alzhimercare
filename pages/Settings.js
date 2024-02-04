import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import Sidebar from "../modules/Sidebar";
import { Picker } from "@react-native-picker/picker";

// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
const isWeb = () => {
  return Platform.OS === "web";
};

const { width, height } = Dimensions.get("window");
const reportData = [
  {
    icon: "person-outline",
    description: "Account",
    targetScreen: "Settings",
  },
  {
    icon: "people-sharp",
    description: "About US",
    targetScreen: "Settings",
  },
  {
    icon: "globe-outline",
    description: "Languages",
    isLanguagePicker: true,
  },
  { icon: "newspaper", description: "Reports", targetScreen: "Reports" },
  {
    icon: "shield",
    description: "Private Policy",
    targetScreen: "Settings",
  },
  {
    icon: "exit-outline",
    description: "Log Out",
    targetScreen: "WelcomeScreen",
  },
];

const Settings = ({ navigation }) => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleTakeTestPress = () => {
    navigation.navigate("Instructions");
  };

  const Report123 = ({ icon, description, targetScreen, isLanguagePicker }) => (
    <TouchableOpacity
      style={styles.report}
      onPress={() => {
        if (isLanguagePicker) {
          setLanguageModalVisible(true);
        } else {
          navigation.navigate(targetScreen);
        }
      }}
    >
      <Icon name={icon} size={isWeb() ? 30 : 30} color="black" />
      <View style={styles.reportTextContainer}>
        <Text style={styles.reporttext}>{description}</Text>
      </View>
      <Icon name="arrow-forward" size={isWeb() ? 30 : 30} color="black" />
    </TouchableOpacity>
  );

  const renderLanguagePicker = () => (
    <Modal
      transparent={true}
      visible={isLanguageModalVisible}
      animationType="slide"
      onRequestClose={() => setLanguageModalVisible(false)}
    >
      <TouchableOpacity
        style={styles.languageModalContainer}
        activeOpacity={1}
        onPressOut={() => setLanguageModalVisible(false)}
      >
        <View style={styles.languageModalContent}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => {
              setSelectedLanguage(itemValue);
              setLanguageModalVisible(false); // Close the modal on language selection
            }}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="Greek" value="Greek" />
            <Picker.Item label="German" value="German" />
            <Picker.Item label="Urdu" value="Urdu" />
          </Picker>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={styles.appContainer}>
      {isWeb() && <Sidebar />}
      <View style={styles.mainContent}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.descriptionContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={require("../media/user1.png")}
                style={styles.profilePic}
              />
              <Text>Abdul ALI</Text>
              <Text>abdulali@gmail.com</Text>
            </View>
            {reportData.map((data, index) => (
              <Report123
                key={index}
                icon={data.icon}
                description={data.description}
                targetScreen={data.targetScreen}
                isLanguagePicker={data.isLanguagePicker}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      {!isWeb() && <Sidebar />}
      {renderLanguagePicker()}
    </View>
  );
};

// ... (rest of the code remains unchanged)

const styles = StyleSheet.create({
  // ... (existing styles remain unchanged)
  report: {
    borderRadius: 20,
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  reportTextContainer: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
    marginLeft: 10,
  },
  reporttext: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 15,
    fontSize: 18,
  },
  toptext: {
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  appContainer: {
    flex: 1,
    flexDirection: isWeb() ? "row" : "column",
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    margin: isWeb() ? 20 : 0,
    marginTop: isWeb() ? 0 : 20,
    ...(isWeb() ? { marginLeft: 120, marginTop: 20 } : {}),
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  descriptionContainer: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: !isWeb() ? 80 : 0,
  },
  languageModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  languageModalContent: {
    width: isWeb() ? 400 : 300, // Set a larger width for web
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default Settings;
