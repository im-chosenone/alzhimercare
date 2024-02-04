import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler"; // Import GestureHandlerRootView
import Sidebar from "../modules/Sidebar";
import { SafeAreaView } from "react-native-safe-area-context";

const Instructions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      {isWeb() && <Sidebar />}
      <View style={styles.mainContent}>
        {/* Wrap the content in GestureHandlerRootView */}
        <GestureHandlerRootView>
          <InstructionsContent navigation={navigation} />
        </GestureHandlerRootView>
      </View>
      {!isWeb() && <Sidebar />}
    </SafeAreaView>
  );
};

const isWeb = () => {
  return Platform.OS === "web";
};

const InstructionsContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Test");
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* <View style={styles.profileContainer}>
        <Image source={require("../media/logo.png")} style={styles.profilePic} />
        <Text style={styles.userName}>Ruchita</Text>
        <Text style={styles.userGreeting}>How today?</Text>
      </View> */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>HOW TO TAKE THE TEST</Text>
        <Text style={styles.descriptionText}>
          Alzheimer's changes typically begin in the part of the brain that
          affects learning. As Alzheimer's advances through the brain it leads
          to increasingly severe symptoms, including disorientation, mood and
          behavior changes; deepening confusion about events, time and place;
          unfounded suspicions about family, friends and professional caregivers
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

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: isWeb() ? "row" : "column",
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    margin: isWeb() ? 0 : 0,
    marginTop: isWeb() ? 0 : 0,
    ...(isWeb() ? { marginLeft: 120, marginTop: 20 } : { marginTop: -40 }),
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
    ...(!isWeb() ? { paddingTop: 50 } : {}),
    marginBottom: 20,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 20,
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
    //flexGrow: 1,
    borderRadius: 20,
    marginTop: 0,

    // backgroundColor: "red",
    ...(!isWeb() ? { paddingBottom: 70 } : { marginBottom: 30 }),
  },
});

export default Instructions;
