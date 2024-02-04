import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons"; // Import Icon from Ionicons
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Sidebar from "../modules/Sidebar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import cookieImage from "../media/cookie.png";

const isWeb = () => {
  return Platform.OS === "web";
};

const Test = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        {isWeb() && <Sidebar />}
        <GestureHandlerRootView style={styles.mainContent}>
          <View>
            <InstructionsContent navigation={navigation} />
          </View>
        </GestureHandlerRootView>
        {!isWeb() && <Sidebar />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const InstructionsContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Daignostic");
  };

  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecording = () => {
    setIsRecording((prevState) => !prevState);
    // Add your logic for starting/stopping recording here
  };

  return (
    <View>
      <View style={styles.profileContainer}>
        {isWeb() ? (
          <View>
            <View style={styles.webimage}>
              <img
                src={cookieImage}
                style={{ width: "60%", height: "80%" }}
                alt="Cookie Image"
              />
            </View>
          </View>
        ) : (
          <View style={styles.androidimage}>
            <Image source={cookieImage} style={{ width: 350, height: 300 }} />
          </View>
        )}
      </View>

      <View style={styles.outerrecordingbutton}>
        <View style={[styles.recordingbutton, styles.blackButton]}>
          <TouchableOpacity
            style={styles.recordingButtonContainer}
            onPress={handleToggleRecording}
          >
            <Icon
              name="reload"
              size={30}
              color="#ffffff"
              style={styles.micIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.recordingbutton, styles.middleButton]}>
          <TouchableOpacity
            style={styles.recordingButtonContainer}
            onPress={handleToggleRecording}
          >
            <Icon
              name={isRecording ? "mic-sharp" : "mic-off-sharp"}
              size={50}
              color="#ffffff"
              style={styles.micIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.recordingbutton, styles.blackButton]}>
          <TouchableOpacity
            style={styles.recordingButtonContainer}
            onPress={handleToggleRecording}
          >
            <Icon
              name="play"
              size={30}
              color="#ffffff"
              style={styles.micIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Test.navigationOptions = ({ navigation }) => {
  return {
    headerShown: isWeb() ? false : true,
  };
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
  profileContainer: {},
  androidimage: {},
  testButton: {
    backgroundColor: "#007aff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 8,
    maxWidth: 250,
    alignSelf: "center",
  },
  testButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
  descriptionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  webimage: {
    alignItems: "center",
  },
  outerrecordingbutton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  recordingbutton: {
    backgroundColor: "#007aff",
    borderRadius: 30,
    marginRight: 10,
  },
  middleButton: {
    width: 80, // Set the width for the middle button
  },
  blackButton: {
    backgroundColor: "black", // Set background color for left and right buttons
  },
  recordingButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -3,
    elevation: -3,
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  micIcon: {},
});

export default Test;
