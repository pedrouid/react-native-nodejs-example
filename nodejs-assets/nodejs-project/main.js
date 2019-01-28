const RNBridge = require("rn-bridge");

RNBridge.channel.send("Node was initialized.");

RNBridge.channel.on("message", msg => {
  if (msg === "ping") {
    RNBridge.channel.send("pong");
  }
});
