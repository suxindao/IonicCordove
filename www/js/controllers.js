/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

  .controller('InAppBrowserCtrl', function ($scope, $rootScope, $cordovaInAppBrowser) {
    $scope.openBrowser = function () {
      alert("bbb");

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

  .controller('VibrationCtrl', function ($scope, $cordovaVibration) {

    $scope.duration = 100;

    $scope.vibrate = function () {
      console.log("vibrating");
      $cordovaVibration.vibrate($scope.duration);
    }
  });
