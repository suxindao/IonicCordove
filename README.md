Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic cordova
```

Then run: 

```bash
$ ionic start myProject
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.

## Cordova Install

http://ngcordova.com/docs/install/

```bash
$ bower install ngCordova
```

#### Include ng-cordova.js or ng-cordova.min.js in your index.html file before cordova.js and after your AngularJS / Ionic file (since ngCordova depends on AngularJS).
```bash
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

#### Inject as an Angular dependency

Then, include ngCordova as a dependency in your angular module:

```bash
angular.module('myApp', ['ngCordova'])
```

#### Install cordova plugin

In App Browser

```bash
cordova plugin add cordova-plugin-inappbrowser
```

ImagePicker
```bash
cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
```

Vibration
```bash
cordova plugin add cordova-plugin-vibration
```

AppVersion

```bash
cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
```


