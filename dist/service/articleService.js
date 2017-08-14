;(function (app) {
  app.factory('articleService', ['$http', function ($http) {
    const articleService = {
      getArticle: function getArticle(date) {
        return $http.get('/article/day?dev=1&date=' + date);
      }
    };
    return {
      articleService: articleService
    }
  }]);
}(angular.module('app')));