import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Sidebar from "../modules/Sidebar";

const { width, height } = Dimensions.get("window");

const Reports = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      {isWeb() && <Sidebar />}
      <View style={styles.mainContent}>
        {isWeb() && <Top />}
        <HomeContent navigation={navigation} />
      </View>
      {!isWeb() && <Sidebar />}
    </View>
  );
};

const Top = () => {
  return (
    <View style={styles.top}>
      <Text style={styles.toptext}>These are all your reports</Text>
    </View>
  );
};

const HomeContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Instructions");
  };

  const Report123 = () => (
    <View style={styles.report}>
      <View style={styles.ReportPic}>
        <Image
          source={require("../media/reporticon.png")}
          style={styles.profilePicc}
        />
      </View>
      <View style={styles.reportTextContainer}>
        <Text style={styles.reporttextbold}>Report Heading</Text>
        <Text style={styles.reporttext}>Report Description</Text>
      </View>
      <Image
        source={require("../media/downloadicon.png")}
        style={styles.profilePiccc}
      />
    </View>
  );

  return (
    <ScrollView style={styles.contentContainer}>
      {/* <View style={styles.SimpleborderContainer}></View>
      <View style={styles.profileContainer}>
        <Image source={require("./media/logo.png")} style={styles.profilePic} />
        <Text>HELLO ALI</Text>
        <Text>How is it going today?</Text>
      </View> */}
      <View style={styles.descriptionContainer}>
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />
        <Report123 />

        {/* <TouchableOpacity
          style={styles.testButton}
          onPress={handleTakeTestPress}
        >
          <Text style={styles.testButtonText}>Take Test</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const isWeb = () => {
  return Platform.OS === "web";
};

const styles = StyleSheet.create({
  report: {
    borderRadius: 20,
    height: 120,
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
    marginLeft: 10,
  },
  reporttext: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    fontSize: 18,
  },
  reporttextbold: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  ReportPic: {
    justifyContent: "center",
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
  profilePicc: {
    width: isWeb() ? 80 : 50,
    height: isWeb() ? 80 : 50,
    marginBottom: 8,
  },
  profilePiccc: {
    width: isWeb() ? 80 : 50,
    height: isWeb() ? 80 : 50,
    marginRight: 8,
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
    fontSize: 20,
    paddingHorizontal: 20,
  },
  testButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
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
    marginTop: 0,
    marginBottom: !isWeb() ? 80 : 0,
  },
  SimpleborderContainer: {
    borderRadius: 20,
  },
});

export default Reports;
