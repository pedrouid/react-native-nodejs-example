const RNBridge = require("rn-bridge");

RNBridge.channel.on("message", msg => {
  RNBridge.channel.send(msg);
});

RNBridge.channel.send("Node was initialized.");
