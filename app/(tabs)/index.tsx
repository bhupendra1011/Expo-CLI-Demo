import { Image, StyleSheet, Platform } from "react-native";

import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const DEPLOYED_APP_URL = "https://conferencing.agora.io/";
  return <WebView style={{ flex: 1 }} source={{ uri: DEPLOYED_APP_URL }} />;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
