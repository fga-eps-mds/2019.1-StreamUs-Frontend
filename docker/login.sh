#!/usr/bin/env bash
set -e
yarn install
./node_modules/expo/bin/cli.js login --non-interactive --username ${EXPO_USERNAME} --password ${EXPO_PASSWORD}
yarn devel