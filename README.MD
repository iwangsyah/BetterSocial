# Better Social Test App

### Images App

![Screenshot 2023-06-04 at 14 53 12](https://github.com/iwangsyah/BetterSocial/assets/31063335/b1472b26-7d46-4554-9635-0aa09b3d886f)
![Screenshot 2023-06-04 at 14 53 06](https://github.com/iwangsyah/BetterSocial/assets/31063335/a0926a95-678a-4341-b366-a0a6520850e0)

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
