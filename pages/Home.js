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

import { GestureHandlerRootView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const isWeb = () => {
  return Platform.OS === "web";
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      {isWeb() && <Sidebar />}
      <View style={styles.mainContent}>
        <HomeContent navigation={navigation} />
      </View>
      {!isWeb() && <Sidebar />}
    </View>
  );
};

const HomeContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Instructions");
  };

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.SimpleborderContainer}></View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../media/user1.png")}
          style={styles.profilePic}
        />
        <Text>HELLO ALI</Text>
        <Text>How is it going today?</Text>
      </View>
      <View style={styles.descriptionContainer}>
        {/* <Text>
          ALZHEIMER DEMENTIA Ruchita Ruchita Ruchita Ruchita Ruchita Ruchita
        </Text> */}
        <Text style={styles.descriptionContainertext}>
          Alzheimer's is the most common cause of dementia, a general term for
          memory loss and other cognitive abilities serious enough to interfere
          with daily life. Alzheimer's disease accounts for 60-80% of dementia
          cases. Learn more: What is the Difference Between Dementia and
          Alzheimer's?, What is Dementia, Research and Progress Alzheimer's is
          not a normal part of aging. The greatest known risk factor is
          increasing age, and the majority of people with Alzheimer's are 65 and
          older. Alzheimer disease is considered to be younger-onset Alzheimer
          if it affects a person under 65. Younger-onset can also be referred to
          as early-onset Alzheimer. People with younger-onset Alzheimercan be in
          the early, middle or late stage of the disease. Learn more:
          Younger/Early-Onset Alzheimer's, Risk Factors Alzheimer's worsens over
          time. Alzheimer's is a progressive disease, where dementia symptoms
          gradually worsen over a number of years. In its early stages, memory
          loss is mild, but with late-stage Alzheimer's, individuals lose the
          ability to carry on a conversation and respond to their environment.
          On average, a person with Alzheimer's lives 4 to 8 years after
          diagnosis but can live as long as 20 years, depending on other
          factors. Learn more: 10 Warning Signs, Stages of Alzheimer's Disease
          Alzheimer's as a Continuum Alzheimer's disease progresses in stages,
          with the severity of symptoms increasing over time. Select a stage to
          learn more. Alzheimer's has no cure, but two treatments — aducanumab
          demonstrate that removing beta-amyloid, one of the hallmarks of
          Alzheimer disease, from the brain reduces cognitive and functional
          decline in people living with early Alzheimer. Other treatments can
          temporarily slow the worsening of dementia symptoms and improve
          quality of life for those with Alzheimer's and their caregivers.
          Today, there is a worldwide effort underway to find better ways to
          treat the disease, delay its onset and prevent it from developing.
          Alzheimer's is the most common cause of dementia, a general term for
          memory loss and other cognitive abilities serious enough to interfere
          with daily life. Alzheimer's disease accounts for 60-80% of dementia
          cases. Learn more: What is the Difference Between Dementia and
          Alzheimer's?, What is Dementia, Research and Progress Alzheimer's is
          not a normal part of aging. The greatest known risk factor is
          increasing age, and the majority of people with Alzheimer's are 65 and
          older. Alzheime disease is considered to be younger-onset Alzheime if
          it affects a person under 65. Younger-onset can also be referred to as
          early-onset Alzheimer. People with younger-onset Alzheimer can be in
          the early, middle or late stage of the disease. Learn more:
          Younger/Early-Onset Alzheimer's, Risk Factors Alzheimer's worsens over
          time. Alzheimer's is a progressive disease, where dementia symptoms
          gradually worsen over a number of years. In its early stages, memory
          loss is mild, but with late-stage Alzheimer's, individuals lose the
          ability to carry on a conversation and respond to their environment.
          On average, a person with Alzheimer's lives 4 to 8 years after
          diagnosis but can live as long as 20 years, depending on other
          factors. Learn more: 10 Warning Signs, Stages of Alzheimer's Disease
          Alzheimer's as a Continuum Alzheimer's disease progresses in stages,
          with the severity of symptoms increasing over time. Select a stage to
          learn more. Alzheimer's has no cure, but two treatments — aducanumab
          demonstrate that removing beta-amyloid, one of the hallmarks of
          Alzheimeisease, from the brain reduces cognitive and functional
          decline in people living with early Alzheime Other treatments can
          temporarily slow the worsening of dementia symptoms and improve
          quality of life for those with Alzheimer's and their caregivers.
          Today, there is a worldwide effort underway to find better ways to
          treat the disease, delay its onset and prevent it from developing.
          Alzheimer's is the most common cause of dementia, a general term for
          memory loss and other cognitive abilities serious enough to interfere
          with daily life. Alzheimer's disease accounts for 60-80% of dementia
          cases. Learn more: What is the Difference Between Dementia and
          Alzheimer's?, What is Dementia, Research and Progress Alzheimer's is
          not a normal part of aging. The greatest known risk factor is
          increasing age, and the majority of people with Alzheimer's are 65 and
          older. Alzheimers disease is considered to be younger-onset Alzheimers
          if it affects a person under 65. Younger-onset can also be referred to
          as early-onset Alzheimers. People with younger-onset Alzheimers can be
          in the early, middle or late stage of the disease. Learn more:
          Younger/Early-Onset Alzheimer's, Risk Factor Alzheimer's worsens over
          time. Alzheimer's is a progressive disease, where dementia symptoms
          gradually worsen over a number of years. In its early stages, memory
          loss is mild, but with late-stage Alzheimer's, individuals lose the
          ability to carry on a conversation and respond to their environment.
          On average, a person with Alzheimer's lives 4 to 8 years after
          diagnosis but can live as long as 20 years, depending on other
          factors. Learn more: 10 Warning Signs, Stages of Alzheimer's Disease
          Alzheimer's as a Continuum Alzheimer's disease progresses in stages,
          with the severity of symptoms increasing over time. Select a stage to
          learn more. Alzheimer's has no cure, but two treatments — aducanumab
          and lecanemab demonstrate that removing beta-amyloid, one of the
          hallmarks of Alzheimer disease, from the brain reduces cognitive and
          functional decline in people living with early Alzheimer. Other
          treatments can temporarily slow the worsening of dementia symptoms and
          improve quality of life for those with Alzheimer's and their
          caregivers. Today, there is a worldwide effort underway to find better
          ways to treat the disease, delay its onset and prevent it from
          developing.
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
    // borderColor: "grey",
    //dsdsd
    // borderWidth: 1,
    // borderRadius: 20,
    //margin: 8,
    flexDirection: isWeb() ? "row" : "column",
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    margin: isWeb() ? 20 : 0,
    marginTop: isWeb() ? 0 : -20,
    ...(isWeb() ? { marginLeft: 120, marginTop: 20 } : {}),
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  descriptionContainertext: { fontSize: 20 },
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
    fontSize: 20,
    paddingHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
    // backgroundColor: "red",
    //backgroundColor: "grey",
    // borderColor: "grey",
    // borderWidth: 1,
    // borderRadius: 20,
    marginTop: 20,
    marginBottom: !isWeb() ? 80 : 0,
  },

  SimpleborderContainer: {
    borderRadius: 20,
    // borderBlockColor: "red",
    // backgroundColor: "yellow",
  },
});

export default Home;
