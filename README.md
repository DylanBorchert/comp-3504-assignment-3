# COMP-3504 Assignment 3

Assignment 3 for COMP-3504 at Mount Royal University.

# Steps to run

This app was written in React Native. To run on your phone:

1. Clone the repository.
2. Navigate to the repository and run `npm install`.
3. Run `npm start`. A QR code should appear in the terminal. If you download the Expo Go app (Android) or use the regular camera (iOS) you can scan the QR code and open the app on your phone.

**NOTE:** Some of us occasionally ran into errors saying that certain packages were missing even after running `npm install`, preventing the app from opening after scanning the code. The most common culprits were `react-native-safe-area-context`  and `react-native-screens`. If the app fails to load with error code 500, use npm to install those packages and try again. 
