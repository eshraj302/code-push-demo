# About The Project

This project demonstrates Code-Push for react-native applications. Code Push is a cloud service that enables React Native developers to deploy mobile app updates directly to their users' with the help of over-the-air (OTA) update.

### Setting up the development environment if haven't already

- [Development-Setup](https://reactnative.dev/docs/environment-setup) - Follow the instruction on the link to setup you development envrionment for Mac, Windows or Linux.

### Prerequisites

- [Appcenter-CLI](https://docs.microsoft.com/en-us/appcenter/cli/) - Follow steps to setup appcenter Cli

- [Node](https://nodejs.org/en/blog/release/v16.14.2/) - v16.14.2

#### Setting up your App Center account

- [App-Center](https://appcenter.ms/) - Set-up your account here.

- From the App center dashboard, Select reate a new app from the top right corner drop-down selector

- Enter your "App Name".

- Select "Release Type" -> Production.

- Select your "OS" (iOS or Android).

- Select "Platform" -> React Native.

- After setting-up your account create a new app from the top right corner dropdown selector.

- Then in left menu, select [Distribute] -> [CodePush] -> On top right side you can see your "Production" and "Staging".

#### Setting up and installing App Center CLI

- You need to install App Center CLI with global flag with the help of below command.

  ```sh
  npm install -g appcenter-cli
  ```

- Use this command to login into your appcenter-cli - then your will be redirect to your browser to Auth key past it into your terminal.

  ```sh
  appcenter login
  ```

- Commands for pushing your OTA updates to App Center, you can these command on your [CodePush] Tab
  ```sh
  appcenter codepush release-react -a <User Name>/<Your App Name> -d Staging
  ```
  ```sh
  appcenter codepush release-react -a <User Name>/<Your App Name> -d Production
  ```

### Initialising Project

#### After you have completed above setup, continue to initialise your project:

- Clone this project and how to install them.

* Clone the repo

  ```sh
  git clone <REPO_URL>
  ```

* Install node modules

  ```sh
  npm install or yarn install
  ```

### Setting up Project env variables

- Use the .env.template file in your root directory, to create your .env.dev and .env.prod files.

- To get the "KEY", Go in the left menu, select [Distribute] -> [CodePush] -> On top right side you can see your "Production" and "Staging". Click on the Tool icon -> you will find your "KEY" their.

- .env.dev - Store your development or staging key in this file.

- eg- CODEPUSH_ANDROID=KEY

- eg- CODEPUSH_IOS=KEY

- .env.prod - Store your production key in this file.

- CODEPUSH_ANDROID=KEY

- CODEPUSH_IOS=KEY
- You can use the ENV variable in you code, by importing them like below:

  ```
  import Config from 'react-native-config';

  console.log(Config.<YOU_ENV_KEY>);
  ```

### Folder structure

This template follows a very simple project structure:

- `src`: Main folder contains all your source code

- `api`: Contains all your api code.

- `assets`: Contains all your project inuse assets and images.

- `components`: Contains common components which are used in your project.

- `constants`: Contains all the constant for the project for eg, enums, color and string constant.

- `navigation`: Your project routes navigator.

- `screen`: Contains all screen which are used in our project.

- `services`: Contain common services used in your project.

- `shared`: Contain common shared code for your project.

- `store`: Contains Redux actions and reducers code.

- `utils`: Contain Utility functions.

- `App.js`: Main component that starts your whole app.

- `index.js`: Entry point of your application as per React-Native standards.

### Running and Building the project

- Create your app build with Production and Staging

- Now you cange the env from the code to codepush for Production or Staging.

1. Android

- Running

```sh

npm run android:dev

npm run android:prod

```

- Build APK

```sh

npm run build:android:dev

npm run build:android:prod

```

2. iOS

- Running

```sh

npm run ios:dev

npm run ios:prod

```

You may also run the apo using Xcode, by selecting preferred environment scheme.
