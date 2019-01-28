import React from "react";
import { StyleSheet, Text, View } from "react-native";
import nodejs from "nodejs-mobile-react-native";

export default class App extends React.Component {
  componentDidMount() {
    this.test();
  }

  test = () => {
    nodejs.start("main.js");
    nodejs.channel.send("ping");
    nodejs.channel.addListener(
      "message",
      msg => {
        alert("NodeJS Message => " + msg);
      },
      this
    );
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
