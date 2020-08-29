// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("pressed");
  };
  const handlePress2 = () => {
    console.log("pressed2");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() =>
          Alert.alert("tapped", "Message", [
            { text: "Yes", onPress: handlePress },
            { text: "No", onPress: handlePress2 },
          ])
        }
        color={"orange"}
        title={"Click Me"}
      />
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World!-Hello World!-Hello World!-Hello World!-Hello World!-Hello
        World!-Hello World!-Hello World!-Hello World!-Hello World!-Hello
        World!-Hello World!-Hello World!-Hello World!-Hello World!-Hello World!-
      </Text>
      <TouchableHighlight onPress={handlePress2}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
