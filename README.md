# Better Social Test App

### Images App

<img width="472" alt="Screen Shot 2023-06-04 at 14 53 12" src="https://github.com/iwangsyah/BetterSocial/assets/31063335/b1472b26-7d46-4554-9635-0aa09b3d886f">
<img width="472" alt="Screen Shot 2023-06-04 at 14 53 06" src="https://github.com/iwangsyah/BetterSocial/assets/31063335/a0926a95-678a-4341-b366-a0a6520850e0">

### Video App

<img  width="300" src="https://github.com/iwangsyah/BetterSocial/blob/master/Simulator%20Screen%20Recording%20-%20iPhone%208%20Plus%20-%202023-06-04%20at%2015.08.55%20(1).gif"/>

### Run project in development

1. Clone the repo
   ```sh
   git clone https://github.com/iwangsyah/BetterSocial.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
   or
   
   ```sh
   yarn install
   ```
3. Install Podfile for iOS
   ```sh
   npx pod-install
   ```
    or
  
   ```sh
   cd ios && pod install && cd ..
   ```
4. Start the app
  - Run on Android: `npx react-native run-android` (or `yarn android`)  (or `npm run android`).

  - Run on iOS: `npx react-native run-ios` (or `yarn ios`) (or `npm run ios`).


# Generating the APK
Run the following in a terminal:

```
$ cd android
$ ./gradlew assembleRelease
```

The generated APK can be found under:
```
android/app/build/outputs/apk/release/app-release.apk
```

### An example of an APK that you can download
https://drive.google.com/file/d/1H2TsEvcselTz1GRIUj6HNf7yPkHPR4k0/view?usp=sharing
