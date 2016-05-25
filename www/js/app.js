// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'ngCordova',
  'starter.controllers'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $cordovaInAppBrowserProvider) {

    if (!window.cordova) {
      var appID = 1234567890;
      var version = "v2.0"; // or leave blank and default is v2.0
      //$cordovaFacebookProvider.browserInit(appID, version);
    }

    var browserOptions = {
      location: "yes",
      toolbar: "yes"
    };

    $cordovaInAppBrowserProvider.setDefaultOptions(browserOptions);

    $stateProvider

      .state('menu', {
        url: "/menu",
        templateUrl: "templates/menu.html"
      })


      .state('inAppBrowser', {
        url: '/inAppBrowser',
        templateUrl: 'templates/inAppBrowser.html',
        controller: "InAppBrowserCtrl"
      })

      .state('imagePicker', {
        url: '/imagePicker',
        templateUrl: 'templates/imagePicker.html',
        controller: "ImagePickerCtrl"
      })
      
      .state('vibration', {
        url: '/vibration',
        templateUrl: 'templates/vibration.html',
        controller: "VibrationCtrl"
      })

      .state('version', {
        url: '/version',
        templateUrl: 'templates/version.html',
        controller: "VersionCtrl"
      })

      .state('sendSMS', {
        url: '/sendSMS',
        templateUrl: 'templates/sendSMS.html',
        controller: "SMSCtrl"
      })


//      .state('about', {
//        url: "/about",
//        templateUrl: "app/about.html"
//      })
//
//      .state('appAvailability', {
//        url: '/appAvailability',
//        templateUrl: 'app/appAvailability/appAvailability.html',
//        controller: "AppAvailabilityCtrl"
//      })
//
//      .state('appRate', {
//        url: '/appRate',
//        templateUrl: 'app/appRate/appRate.html',
//        controller: "AppRateCtrl"
//      })
//
//
//      .state('barcodeScanner', {
//        url: '/barcodeScanner',
//        templateUrl: 'app/barcodeScanner/barcodeScanner.html',
//        controller: "BarcodeScannerCtrl"
//      })
//
//      .state('batteryStatus', {
//        url: '/batteryStatus',
//        templateUrl: 'app/batteryStatus/batteryStatus.html',
//        controller: "BatteryStatusCtrl"
//      })
//
//      .state('beacon', {
//        url: '/beacon',
//        templateUrl: 'app/beacon/beacon.html',
//        controller: "BeaconCtrl"
//      })
//
//      .state('camera', {
//        url: '/camera',
//        templateUrl: 'app/camera/camera.html',
//        controller: "CameraCtrl"
//      })
//
//      .state('clipboard', {
//        url: '/clipboard',
//        templateUrl: 'app/clipboard/clipboard.html',
//        controller: "ClipboardCtrl"
//      })
//
//      .state('contacts', {
//        url: '/contacts',
//        templateUrl: 'app/contacts/contacts.html',
//        controller: "ContactsCtrl"
//      })
//
//
//      .state('datePicker', {
//        url: '/datePicker',
//        templateUrl: 'app/datePicker/datePicker.html',
//        controller: "DatePickerCtrl"
//      })
//
//      .state('device', {
//        url: '/device',
//        templateUrl: 'app/device/device.html',
//        controller: "DeviceCtrl"
//      })
//
//      .state('deviceMotion', {
//        url: '/deviceMotion',
//        templateUrl: 'app/deviceMotion/deviceMotion.html',
//        controller: "DeviceMotionCtrl"
//      })
//
//
//      .state('deviceOrientation', {
//        url: '/deviceOrientation',
//        templateUrl: 'app/deviceOrientation/deviceOrientation.html',
//        controller: "DeviceOrientationCtrl"
//      })
//
//      .state('dialogs', {
//        url: '/dialogs',
//        templateUrl: 'app/dialogs/dialogs.html',
//        controller: "DialogsCtrl"
//      })
//
//      .state('emailComposer', {
//        url: '/emailComposer',
//        templateUrl: 'app/emailComposer/emailComposer.html',
//        controller: "EmailComposerCtrl"
//      })
//
//      .state('facebook', {
//        url: '/facebook',
//        templateUrl: 'app/facebook/facebook.html',
//        controller: "FacebookCtrl"
//      })
//
//      .state('file', {
//        url: '/file',
//        templateUrl: 'app/file/file.html',
//        controller: "FileCtrl"
//      })
//
//      .state('fileTransfer', {
//        url: '/fileTransfer',
//        templateUrl: 'app/fileTransfer/fileTransfer.html',
//        controller: "FileTransferCtrl"
//      })
//
//      .state('fileOpener2', {
//        url: '/fileOpener2',
//        templateUrl: 'app/fileOpener2/fileOpener2.html',
//        controller: "FileOpener2Ctrl"
//      })
//
//      .state('flashlight', {
//        url: '/flashlight',
//        templateUrl: 'app/flashlight/flashlight.html',
//        controller: "FlashlightCtrl"
//      })
//
//      .state('geolocation', {
//        url: '/geolocation',
//        templateUrl: 'app/geolocation/geolocation.html',
//        controller: "GeolocationCtrl"
//      })
//
//      .state('globalization', {
//        url: '/global',
//        templateUrl: 'app/globalization/globalization.html',
//        controller: "GlobalizationCtrl"
//      })
//
//      .state('googleAnalytics', {
//        url: '/googleAnalytics',
//        templateUrl: 'app/googleAnalytics/googleAnalytics.html',
//        controller: "GoogleAnalyticsCtrl"
//      })
//
//      .state('healthkit', {
//        url: '/healthkit',
//        templateUrl: 'app/healthkit/healthkit.html',
//        controller: "HealthKitCtrl"
//      })

//      .state('localNotification', {
//        url: '/localNotification',
//        templateUrl: 'app/localNotification/localNotification.html',
//        controller: "LocalNotificationCtrl"
//      })
//
//      .state('media', {
//        url: '/media',
//        templateUrl: 'app/media/media.html',
//        controller: "MediaCtrl"
//      })
//
//      .state('network', {
//        url: '/network',
//        templateUrl: 'app/network/network.html',
//        controller: "NetworkCtrl"
//      })
//
//      .state('preferences', {
//        url: '/preferences',
//        templateUrl: 'app/preferences/preferences.html',
//        controller: "PreferencesCtrl"
//      })
//
//      .state('printer', {
//        url: '/printer',
//        templateUrl: 'app/printer/printer.html',
//        controller: "PrinterCtrl"
//      })
//
//      .state('pushNotifications', {
//        url: '/pushNotifications',
//        templateUrl: 'app/pushNotifications/pushNotifications.html',
//        controller: "PushNotificationsCtrl"
//      })
//
//      .state('socialSharing', {
//        url: '/socialSharing',
//        templateUrl: 'app/socialSharing/socialSharing.html',
//        controller: "SocialSharingCtrl"
//      })
//
//      .state('sqlite', {
//        url: '/sqlite',
//        templateUrl: 'app/sqlite/sqlite.html',
//        controller: "SqliteCtrl"
//      })
//
//
//      .state('statusbar', {
//        url: '/statusbar',
//        templateUrl: 'app/statusbar/statusbar.html',
//        controller: "StatusbarCtrl"
//      })
//
//
//      .state('toast', {
//        url: '/toast',
//        templateUrl: 'app/toast/toast.html',
//        controller: "ToastCtrl"
//      })
//
//      .state('touchid', {
//        url: '/touchid',
//        templateUrl: 'app/touchid/touchid.html',
//        controller: "TouchIDCtrl"
//      })
//
//      .state('upsPushNotifications', {
//        url: '/upsPushNotifications',
//        templateUrl: 'app/upsPushNotifications/pushNotifications.html',
//        controller: "UpsPushNotificationsCtrl"
//      });

    $urlRouterProvider.otherwise('/menu');
  });
