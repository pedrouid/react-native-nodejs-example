#!/bin/bash
      # Helper script for Gradle to call npm on macOS in case it is not found
      export PATH=$PATH:/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/pedrogomes/_sandbox/react-native-nodejs-example/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/pedrogomes/_sandbox/react-native-nodejs-example/node_modules/.bin:/Users/pedrogomes/.cargo/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/usr/local/MacGPG2/bin:/Applications/Postgres.app/Contents/Versions/latest/bin
      npm $@
    