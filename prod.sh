#!/bin/bash
set +a
export NEXT_TELEMETRY_DISABLED=1
export CI=''
echo "Configuring..."
set -a
yarn install --frozen-lockfile
yarn run postinstall
set +a
export NODE_ENV='production'
set -a

npx next build
