import { useEffect } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Platform,
  PermissionsAndroid,
} from "react-native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";

export default function Index() {
  const { height, width } = useWindowDimensions();
  const DEPLOYED_APP_URL = "https://conferencing.agora.io";

  useEffect(() => {
    async function requestPermissions() {
      if (Platform.OS === "android") {
        try {
          // Request camera permissions
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          if (cameraPermission.status !== "granted") {
            console.log("Camera permission denied");
          } else {
            console.log("Camera permission granted");
          }

          // Request audio recording permissions
          const audioPermission = await Audio.requestPermissionsAsync();
          if (audioPermission.status !== "granted") {
            console.log("Audio recording permission denied");
          } else {
            console.log("Audio recording permission granted");
          }
        } catch (error) {
          console.error("Error requesting permissions:", error);
        }
      }
    }

    requestPermissions();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        source={{ uri: DEPLOYED_APP_URL }}
        style={{
          flex: 1,
          height: height,
          width: width,
        }}
      />
    </SafeAreaView>
  );
}
