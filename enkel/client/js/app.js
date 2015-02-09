var app = angular.module('FinnApp', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange', {
      'default': '700', 
    })
    .accentPalette('red', {
      'default': '500' 
    });
});