import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Sidebar = () => {
  const navigation = useNavigation();

  const handleIconPress = (targetScreen) => {
    navigation.navigate(targetScreen);
  };

  const topIcons = [
    { name: "home-sharp", label: "", targetScreen: "Home" },
    { name: "disc-outline", label: "", targetScreen: "Test" },
    { name: "clipboard-outline", label: "", targetScreen: "Reports" },
    { name: "settings", label: "", targetScreen: "Settings" },
  ];

  const renderTopIcons = () => {
    return topIcons.map((icon, index) => (
      <TouchableOpacity
        key={index}
        style={styles.iconButton}
        onPress={() => handleIconPress(icon.targetScreen)}
      >
        <Ionicons name={icon.name} size={25} color="#FFF" />
      </TouchableOpacity>
    ));
  };

  const renderLogoutIcon = () => {
    return (
      isWeb() && (
        <View style={styles.logoutSection}>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleIconPress("WelcomeScreen")}
          >
            <Ionicons name="bandage" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      )
    );
  };

  return (
    <View
      style={[
        styles.container,
        isWeb() ? styles.sidebarWeb : styles.sidebarMobile,
      ]}
    >
      {renderTopIcons()}
      {renderLogoutIcon()}
    </View>
  );
};

const isWeb = () => {
  return Platform.OS === "web";
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007aff",
    ...(isWeb() ? { borderRadius: 35 } : {}),
  },
  sidebarWeb: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 100, // Adjust the width to match your design
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 50, // This adds space at the top of the sidebar
  },
  sidebarMobile: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80, // Adjust the height to match your design
    flexDirection: "row",
    //backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconButton: {
    alignItems: "center", // Center the icon horizontally
    justifyContent: "center", // Center the icon vertically
    paddingVertical: 20, // Space above and below the icon
  },
  logoutSection: {
    width: "100%", // Ensure the logout section spans the width of the sidebar
    paddingBottom: 50, // Space at the bottom of the sidebar
    alignItems: "center", // Center the logout button
  },
  separator: {
    width: "80%", // Width of the separator line, relative to the sidebar width
    height: 1, // Height of the separator line
    backgroundColor: "#FFF", // Color of the separator line
    marginBottom: 20, // Space below the separator line
  },
});

export default Sidebar;
