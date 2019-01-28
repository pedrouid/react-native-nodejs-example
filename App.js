import React from "react";
import { StyleSheet, Text, View } from "react-native";
import nodejs from "nodejs-mobile-react-native";
import RNFS from "react-native-fs";

export default class App extends React.Component {
  componentDidMount() {
    this.test();
  }

  test = () => {
    nodejs.start("main.js");
    nodejs.channel.send(
      JSON.stringify({
        action: "init",
        data: { docsPath: RNFS.DocumentDirectoryPath }
      })
    );
    nodejs.channel.addListener("message", msg => {
      const payload = JSON.parse(msg);
      if (payload.action === "message") {
        alert("Message: " + payload.data.message);
      }
    });
  };

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
