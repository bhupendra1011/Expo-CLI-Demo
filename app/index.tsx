import { Text, View, useWindowDimensions } from "react-native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { height, width } = useWindowDimensions();
  const DEPLOYED_APP_URL = "https://conferencing.agora.io";

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
