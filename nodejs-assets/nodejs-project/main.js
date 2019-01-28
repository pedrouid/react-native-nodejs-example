const RNBridge = require("rn-bridge");
const IPFS = require("ipfs");

let ipfs = null;

function initIpfs(docsPath) {
  const ipfsConfig = {
    init: {
      bits: 1024,
      emptyRepo: true,
      log: sendState
    },
    repo: path.resolve(docsPath, "./testing"),
    EXPERIMENTAL: {
      dht: false,
      relay: {
        enabled: true,
        hop: {
          enabled: false,
          active: false
        }
      },
      pubsub: true
    },
    config: {
      Bootstrap: [],
      Addresses: {
        Swarm: ["/ip4/159.203.117.254/tcp/9090/ws/p2p-websocket-star"]
      }
    },
    connectionManager: {
      maxPeers: 10,
      minPeers: 2,
      pollInterval: 20000
    }
  };

  ipfs = new IPFS(ipfsConfig);

  RNBridge.channel.send(
    JSON.stringify({
      action: "message",
      data: { message: "IPFS Initialized" }
    })
  );
}

RNBridge.channel.on("message", msg => {
  const payload = JSON.parse(msg);
  if (payload.action === "init") {
    initIpfs(payload.data.docsPath);
  }
});

ipfs.on("ready", () => {
  RNBridge.channel.send(
    JSON.stringify({
      action: "message",
      data: { message: "IPFS Ready" }
    })
  );
});
