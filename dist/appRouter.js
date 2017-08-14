/**
 *
 */
;(function () {
  'use strict';
  console.log("start");
  var app = angular.module('app', ['ui.router']);
  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('/index', {
        url: "/index",
        templateUrl: "views/index.html"
      })
  });
}());