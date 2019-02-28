#!/bin/bash

watchman watch-del-all
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/haste-map-react-native-packager-*
rm -rf node_modules/
rm -rf ios/build
rm -rf ios/Pods
rm -rf android/build
rm -rf android/app/build
rm -rf ~/.rncache
