// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import { Audio } from "expo-av";

// const RecordAudioComponent = () => {
//   const [recording, setRecording] = useState(null);
//   const [sound, setSound] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedUri, setRecordedUri] = useState(null);

//   useEffect(() => {
//     (async () => {
//       await Audio.requestPermissionsAsync();
//     })();
//   }, []);

//   const startRecording = async () => {
//     try {
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });
//       const newRecording = new Audio.Recording();
//       await newRecording.prepareToRecordAsync(
//         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//       );
//       await newRecording.startAsync();
//       setRecording(newRecording);
//       setIsRecording(true);
//     } catch (err) {
//       console.error("Failed to start recording", err);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       await recording.stopAndUnloadAsync();
//       const uri = recording.getURI();
//       setRecordedUri(uri);
//       setRecording(null);
//       setIsRecording(false);
//     } catch (error) {
//       console.error("Failed to stop recording", error);
//     }
//   };

//   const playSound = async () => {
//     try {
//       const { sound: playbackSound } = await Audio.Sound.createAsync(
//         { uri: recordedUri },
//         { shouldPlay: true }
//       );
//       setSound(playbackSound);
//     } catch (error) {
//       console.error("Failed to play the sound", error);
//     }
//   };

//   useEffect(() => {
//     return sound
//       ? () => {
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   const handlePress = () => {
//     if (isRecording) {
//       stopRecording();
//     } else {
//       startRecording();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* <TouchableOpacity
//         onPress={handlePress}
//         style={[
//           styles.testButton,
//           { backgroundColor: isRecording ? "red" : "blue" },
//         ]}
//       >
//         <Text style={styles.buttonText}>
//           {isRecording ? "Stop Recording" : "Start Recording"}
//         </Text>
//       </TouchableOpacity>
//       {recordedUri && (
//         <TouchableOpacity onPress={playSound} style={styles.testButton}>
//           <Text style={styles.buttonText}>Play Sound</Text>
//         </TouchableOpacity>
//       )} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   testButton: {
//     backgroundColor: "blue",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     alignItems: "center",
//     marginTop: 20,
//     maxWidth: 250,
//     alignSelf: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default RecordAudioComponent;
