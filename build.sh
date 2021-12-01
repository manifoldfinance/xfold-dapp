#!/bin/bash

set +a
export CI=''
NODE_ENV=development
set -a 

yarn install --pure-lockfile
npx next build
