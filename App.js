import React from "react";
import {
  // Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import nodejs from "nodejs-mobile-react-native";
// import RNFS from "react-native-fs";

// const DOCUMENT_DIRECTORY =
//   Platform.OS === "ios" ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

export default class App extends React.Component {
  componentDidMount() {
    this.test();
  }

  test = () => {
    nodejs.start("main.js");
    nodejs.channel.addListener("message", msg => {
      alert("Message: " + msg);
    });
  };

  // test = () => {
  //   nodejs.start("main.js");
  //   nodejs.channel.send(
  //     JSON.stringify({
  //       action: "init",
  //       data: { docsPath: DOCUMENT_DIRECTORY }
  //     })
  //   );
  //   nodejs.channel.addListener("message", msg => {
  //     const payload = JSON.parse(msg);
  //     if (payload.action === "message") {
  //       alert("Message: " + payload.data.message);
  //     }
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
