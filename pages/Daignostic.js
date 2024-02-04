import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native"; // Corrected import
import Sidebar from "../modules/Sidebar";
import { SafeAreaView } from "react-native-safe-area-context";

const Daignostic = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      {isWeb() && <Sidebar />}
      <View style={styles.mainContent}>
        <DiagnosticContent navigation={navigation} />
      </View>
      {!isWeb() && <Sidebar />}
    </SafeAreaView>
  );
};

Daignostic.navigationOptions = ({ navigation }) => {
  return {
    headerShown: isWeb() ? false : true,
    customHeader: () => {
      return isWeb() ? null : (
        <YourCustomHeaderComponent navigation={navigation} />
      );
    },
  };
};

const DiagnosticContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Reports");
  };

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../media/logo.png")}
          style={styles.profilePic}
        />
        {/* <Text style={styles.userName}>Ruchita</Text>
        <Text style={styles.userGreeting}>How today?</Text> */}
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>This is your Daignostic</Text>
        <Text style={styles.descriptionText}>
          Alzheimer's disease is the most common type of dementia.
        </Text>
        <TouchableOpacity
          style={styles.testButton}
          onPress={handleTakeTestPress}
        >
          <Text style={styles.testButtonText}>Take Test</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const YourCustomHeaderComponent = ({ navigation }) => {
  return (
    <View style={styles.customHeader}>
      <Text>Your Custom Header</Text>
      {/* Add any additional header content or navigation buttons */}
    </View>
  );
};

const isWeb = () => {
  return Platform.OS === "web";
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: isWeb() ? "row" : "column",
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    borderColor: "#ffff",
    borderWidth: 1,
    borderRadius: 20,
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
  userName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  userGreeting: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  testButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
    maxWidth: 250,
    alignSelf: "center",
  },
  testButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "red", // MAIN BODY
    borderRadius: 20,
    ...(!isWeb() ? { marginBottom: 90 } : {}),
  },
  customHeader: {
    // Your custom header styles go here
  },
});

export default Daignostic;
