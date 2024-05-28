import { Text, View, useWindowDimensions } from "react-native";
import WebView from "react-native-webview";

export default function Index() {
  const { height, width } = useWindowDimensions();
  const DEPLOYED_APP_URL = "https://conferencing.agora.io";

  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
    </View>
  );
}
