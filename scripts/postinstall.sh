#!/bin/bash

# if [ ! -d "node_modules/react-native/third-party" ]; then
#   cd node_modules/react-native ; ./scripts/ios-install-third-party.sh ; cd ../../
#   cd node_modules/react-native/third-party/glog-0.3.5/ ; ../../scripts/ios-configure-glog.sh ; cd ../../../../
# fi


echo "Creating project without FaceDetector"
if [ -e node_modules/react-native-camera/ios/FaceDetector ] ; then
  rm -rf node_modules/react-native-camera/ios/FaceDetector
fi
cp node_modules/react-native-camera/postinstall_project/projectWithoutFaceDetection.pbxproj node_modules/react-native-camera/ios/RNCamera.xcodeproj/project.pbxproj