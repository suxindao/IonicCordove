/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

  .controller('InAppBrowserCtrl', function ($scope, $rootScope, $cordovaInAppBrowser) {
    $scope.openBrowser = function () {

      document.addEventListener('deviceready', function () {

        var options = {
          location: "no"
        };

        $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options).then(function () {
          console.log("InAppBrowser opened http://ngcordova.com successfully");
        }, function (error) {
          console.log("Error: " + error);
        });

      }, function () {
        console.log("not ready!!!");
      });
    };

    document.addEventListener('deviceready', function () {

      $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
        alert("Exited Browser");
        console.log(JSON.stringify(result));
      });


      $rootScope.$on("$cordovaInAppBrowser:loadstop", function (event, result) {
        alert("Load Stop event");
        console.log(JSON.stringify(result));
      })
    }, false);

  })

  //获取本地图片
  .controller('ImagePickerCtrl', function ($scope, $rootScope, $cordovaImagePicker) {
    $scope.imagePicker = function () {
      var options = {
        maximumImagesCount: 10,
        width: 800,
        height: 800,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
          }
        }, function (error) {
          // error getting photos
        });


//      window.imagePicker.getPictures(
//        function (results) {
//          for (var i = 0; i < results.length; i++) {
//            console.log('Image URI: ' + results[i]);
//          }
//        }, function (error) {
//        console.log('Error: ' + error);
//      }, {
//        maximumImagesCount: 10,
//        width: 800
//      }
//      );

    };


  })

  //震动效果
  .controller('VibrationCtrl', function ($scope, $cordovaVibration) {

    $scope.duration = 100;

    $scope.vibrate = function () {
      console.log("vibrating");
      $cordovaVibration.vibrate($scope.duration);
    };
  })

  //获取版本
  .controller('VersionCtrl', function ($scope, $cordovaAppVersion) {

    $scope.getVersionInfo = function () {

      $cordovaAppVersion.getVersionNumber().then(function (version) {
        $scope.appVersion = version;
      }, false);

      $cordovaAppVersion.getVersionCode().then(function (build) {
        $scope.appBuild = build;
      }, false);

      $cordovaAppVersion.getAppName().then(function (name) {
        $scope.appName = name;
      }, false);

      $cordovaAppVersion.getPackageName().then(function (package) {
        $scope.appPackage = package;
      }, false);

    };

  })

  //发送短信
  .controller('SMSCtrl', function ($scope, $cordovaSms) {

    $scope.number = "13910657489";
    $scope.message = "这是文本信息";

    //CONFIGURATION
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
      }
    };

    $scope.sendSMS = function () {

      document.addEventListener("deviceready", function () {

        $cordovaSms
          .send($scope.number, $scope.message, options)
          .then(function () {
            alert("发送成功");
          }, function (error) {
            alert("发送失败");
          });

      });
    };

  })

  .controller('SplashScreenCtrl', function ($scope, $cordovaSplashscreen) {

    $scope.showSplashScreen = function () {

      $cordovaSplashscreen.show();
      
      setTimeout(function () {
        $cordovaSplashscreen.hide();
      }, 5000);
    };

  })

  .controller('TestCtrl', function ($scope, $cordovaVibration) {

  });
