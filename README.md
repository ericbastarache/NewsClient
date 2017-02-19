# NewsClient

## Running Instructions

1. Ensure you have angular-cli & electron installed globally. If you need to install it, run `npm install -g @angular/cli` and `npm install -g electron`.
2. Clone this repo to your local machine.
3. `cd` into the repo and run `npm install` to install the required dependencies.
4. Run `npm start` to build and run the project with Electron.

## Build Instructions

If you decide to fork a copy of the news client for your own uses, here are the steps to build it!
1. Ensure you have angular-cli & electron installed globally. If you need to install it, run `npm install -g @angular/cli` and `npm install -g electron`.
2. Clone this repo to your local machine.
3. `cd` into the repo and run `npm install` to install the required dependencies.
4. Run `npm run build-mac` to build the angular app and have electron-packager make a release-build for the application.
5. Run `npm run create-mac-installer` to use the release-builds directory created in the previous step to create an installer for Mac.
6. Find your newly created .dmg file and install your new application!


## Installation

You can find the installation file available for download from my [portfolio](http://ericbastarache.github.io/#portfolio) at the bottom (sorry!). Currently it is only available for Mac with a Windows installer hopefully coming in the near future.
