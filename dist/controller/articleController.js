;(function (app) {
  'use strict';
  app.controller('article', ['$scope', 'articleService', function ($scope, articleService) {
    var date = new Date();
    var today = String(date.getFullYear()) + String(date.getMonth() + 1).replace(/\d+/g, s => ('00' + s).slice(-2)) + String(date.getDate());
    $scope.getArticle = function (datePram) {
      console.log(datePram);
      if (Number(datePram) > Number(today)) {
        alert("当前已是最新文章！");
        return;
      }
      articleService.articleService.getArticle(datePram).then(function(response) {
        console.log(response.data);
        $scope.article = response.data.data;
      }, function (error) {
        console.error(error);
      });
    };
    $scope.getArticle(today);
  }]).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);
}(angular.module('app')));